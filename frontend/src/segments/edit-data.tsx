import { useEffect, useState, useCallback } from 'react';
import type { JSX } from 'react';
import Icon from './icon';
import { EditPanel, EditBlock, ButtonPanel, ButtonWarn, ButtonPrimary } from '../components';
import type { Technologies, TopicsData } from '../components/MainTypes';

const EditData = ({
  topics,
  submitChange
}: {
  topics: TopicsData | null;
  submitChange: (updatedData: TopicsData) => void;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasChanged, setHasChanged] = useState(false);
  const [idToEdit, setIdToEdit] = useState<string | null>(null);
  const [choices, setChoices] = useState<JSX.Element[]>([]);
  const [tech, setTech] = useState<Technologies | undefined>(undefined);
  const [description, setDescription] = useState<string>('');
  const [extLink, setExtLink] = useState<string>('');

  useEffect(() => {
    console.log('id to edit', idToEdit);
  }, [idToEdit]);

  const handleSubmit = useCallback(() => {
    if (!topics || !idToEdit) return;

    // Create updated data using current state values
    const updatedTechnologies = topics.technologies.map(t =>
      t.id === idToEdit ? { ...t, ...tech } : t
    );

    const updatedDescriptions = topics.topicDescriptions.map(d =>
      d.technology === idToEdit ? { ...d, description } : d
    );

    const updatedLinks = topics.topicLinks.map(l =>
      l.technology === idToEdit ? { ...l, link: extLink } : l
    );

    const submittedData: TopicsData = {
      technologies: updatedTechnologies,
      topicLinks: updatedLinks,
      topicDescriptions: updatedDescriptions,
      count: updatedTechnologies.length,
    };

    submitChange(submittedData);
    setHasChanged(false);
  }, [topics, idToEdit, tech, description, extLink, submitChange]);

  const cancelChange = useCallback(() => {
    if (!topics || !idToEdit) return;

    // Reset to original values from topics prop
    const tech = topics.technologies.find(t => t.id === idToEdit);
    setTech(tech);
    setDescription(topics.topicDescriptions.find(d => d.technology === idToEdit)?.description || '');
    setExtLink(topics.topicLinks.find(l => l.technology === idToEdit)?.link || '');
    setIdToEdit(null);
    setHasChanged(false);
  }, [topics, idToEdit]);

  const loadIt = useCallback((evt: React.MouseEvent<HTMLLIElement>) => {
    if (!topics) return;
    const id = (evt.target as HTMLLIElement).id;
    setHasChanged(false);
    setIdToEdit(id);
    const tech = topics.technologies.find(t => t.id === id);
    if (tech) tech.name = tech.name || '';
    setTech(tech);
    setDescription(topics.topicDescriptions.find(d => d.technology === id)?.description || '');
    setExtLink(topics.topicLinks.find(l => l.technology === id)?.link || '');
}, [topics]);

  const changeItem = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const field = evt.target.name.replace('update', '').toLowerCase();
    const value = evt.target.value;

    switch (field) {
      case 'id':
        setIdToEdit(value);
        break;
      case 'title':
      case 'name':
      case 'split':
      case 'link':
        setTech(prev => prev ? { ...prev, [field]: value } : undefined);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'extlink':
        setExtLink(value);
        break;
      default:
        break;
    }

    setHasChanged(true);
  };

  useEffect(() => {
    if (topics) {
      const newChoices = topics.technologies.map((value) => (
        <li key={value.id} id={value.id} onClick={loadIt}>
          {value.name || value.title}
        </li>
      ));
      newChoices.push(
        <li className="new-line" key="add-new">
          <strong><em>Add New</em></strong>
        </li>
      );
      setChoices(newChoices);
      setIsLoading(false);
    }
  }, [topics, loadIt]);

  return (
    <EditPanel>
      {isLoading && <p>Loading...</p>}
      <h2>Edit Page</h2>
      <label>Choose Technology Topic:</label>
      <ul>{choices}</ul>
      {idToEdit && <EditBlock>
            <div className="input-block linear">
                <label>id:</label>
                <input
                  type="text"
                  name={`updateId`}
                  value={idToEdit}
                  onChange={changeItem}
                />
            </div>
            <div className="input-block linear">
                <label>title:</label>
                <input
                  type="text"
                  name={`updateTitle`}
                  value={tech?.title}
                  onChange={changeItem}
                />
            </div>
            <div className="input-block linear">
                <label>name:</label>
                <input
                  type="text"
                  name={`updateName`}
                  value={tech?.name}
                  onChange={changeItem}
                />
            </div>
            <div className="input-block linear">
                <label>split:</label>
                <input
                  type="text"
                  name={`updateSplit`}
                  value={tech?.split}
                  onChange={changeItem}
                />
            </div>
            <div className="input-block">
              <label>description:</label><br/>
              <textarea name="updateDescription" value={description} onChange={changeItem}></textarea>
              <div className="topic-icon"><Icon id={idToEdit} item={tech} /></div>
              <div className="icon-link">
                <label>image link:</label>
                <textarea name="updateLink" value={tech?.link ?? ''} onChange={changeItem} />
              </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: description }} />
            <div className="input-block">
              <label>external link:</label>
              <input
                type="text"
                name="updateExtLink"
                value={extLink}
                onChange={changeItem}
                style={{ width: '300px' }}
              />
            </div>
            <ButtonPanel>
              {hasChanged && <ButtonPrimary onClick={handleSubmit}>Submit</ButtonPrimary>}
              <ButtonWarn onClick={cancelChange}>Cancel</ButtonWarn>
            </ButtonPanel>
          </EditBlock>}
    </EditPanel>
  );
}

export default EditData;
