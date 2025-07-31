import { useEffect, useState, useMemo } from 'react'
import {Routes, Route, Link } from "react-router-dom"

import DataService from './services/data-service.ts';

import { AppContainer, AppIntro, AppHeader } from './components/AppStyles';
import { MainPage, AboutPage, WhatsNew, EditPage } from './segments/pages.tsx';
import Header from './segments/heading.tsx';
import type { TopicsData } from './components/MainTypes.tsx';

function App() {
  const [statusInicator, setStatusIndicator] = useState<string | null>(null);
  const [dbIndicadtor, setDbIndicator] = useState<string | null>(null);
  const [editDisplay, setEditDisplay] = useState('none');
  const [topicData, setTopicData] = useState<TopicsData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const showEdit = ['ticremote', 'localhost'].indexOf(window.location.hostname) >= 0;

  const dataService = useMemo(() => new DataService, []);

  useEffect(() => {
    const callAPI = async () => {
      const apiResp = await dataService.testAPI();
      setStatusIndicator(apiResp === 'API is working properly' ? 'green': 'red');
    };

    const callDB = async () => {
      const dbResp = await dataService.testDB();
      setDbIndicator(dbResp === 'Connected to Database' ? 'green': 'red');
    }
    if (dataService) {
      callAPI();
      callDB();
      const editDisplayAttribute = showEdit ? 'inline' : 'none';
      setEditDisplay(editDisplayAttribute);
    }
  }, [dataService, showEdit]);

  useEffect(() => {
    if (statusInicator === 'red') {
      console.error('API is not working');
    }
    if (dbIndicadtor === 'red') {
      console.error('DB is not connected');
    }
  }, [statusInicator, dbIndicadtor]);

  useEffect(() => {
    if (dataService && !topicData) {
      setIsLoading(true);
      dataService.getTopics()
        .then((data) => {
          setIsLoading(false);
          // Validate or cast the data to TopicsData
          if (
            data &&
            typeof data === 'object' &&
            'technologies' in data &&
            'topicDescriptions' in data &&
            'topicLinks' in data &&
            'count' in data
          ) {
            setTopicData(data as TopicsData);
          } else {
            setTopicData(null);
            console.error('home-page got invalid topics data', data);
          }
        }, err => {
          setIsLoading(false);
          console.error('home-page could not get db topics', err);
        });
  }
  }, [dataService, topicData]);

  const addData = (model: string, data: unknown[]) => {
    dataService.putTopics(model, data)
        .then( results => {
            console.log(`${model} added`, results);
        }, err => {
            console.log(`Could not add ${model} data`, data, err)
        })
  };

  const submitChange = (updatedTopics: TopicsData) => {

    if (dataService && updatedTopics) {
      Promise.all([
        updatedTopics.technologies ? dataService.putTopics('technologies', updatedTopics.technologies) : Promise.resolve(),
        updatedTopics.topicDescriptions ? dataService.putTopics('topicdescriptions', updatedTopics.topicDescriptions) : Promise.resolve(),
        updatedTopics.topicLinks ? dataService.putTopics('topiclinks', updatedTopics.topicLinks) : Promise.resolve()
      ])
        .then((responses) => {
          console.log('putTopics responses', responses);
        })
        .catch((err) => {
          console.error(`Could not update topic:`, err);
        });
    }
  };

  const DisplayEditLink: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    useEffect(() => {
        setEditDisplay('inline');
    }, []); // Only runs once after the component is mounted
    return <>{children}</>;
  };
  const HideEditLink: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    useEffect(() => {
        setEditDisplay('none');
    }, []); // Only runs once after the component is mounted
    return <>{children}</>;
  };

  return (
    <>
      {isLoading && <p>Loading...</p>}
      <AppContainer>
        <Link to={`/`}><AppHeader><Header /></AppHeader></Link>
        <Routes>
            <Route path={`/`} element={
              <DisplayEditLink>
                {topicData && <MainPage topicData={topicData} addData={addData} />}
              </DisplayEditLink>} />
            <Route path={`/about`} element={
              <DisplayEditLink>
                <AboutPage />
              </DisplayEditLink>} />
            <Route path={'/whats-new'} element={
              <DisplayEditLink>
                <WhatsNew />
              </DisplayEditLink>} />
            <Route path={'/edit-data'} element={
              <HideEditLink>
                <EditPage topics={topicData} submitChange={submitChange} />
              </HideEditLink>} />
        </Routes>
        <AppIntro>
          {/*
            <span style={{ color: statusIndicator }}>&#9729;</span>
            <span style={{ color: dbIndicator }}>&#10070;</span>
            */}
            <span style={{ display: editDisplay }}>
              <Link to={{ pathname: '/edit-data' }} style={{marginLeft: "10px"}}>Edit</Link>
            </span>
        </AppIntro>
      </AppContainer>
    </>
  )
}

export default App
