import { useEffect, useState, type Key } from 'react';
import ReactTooltip from 'react-tooltip';
import TechIcons from './tech-icons.tsx';
import type { JSX } from 'react/jsx-runtime';

import { NarrowWidth, HomePageContainer, TextSegment,
  WideWidth, Popups } from '../components/HomeStyles.tsx';
import type { TopicsData, Technologies } from '../components/MainTypes.tsx';

type HomeProps = {
    data: TopicsData | null;
    toAdd: (model: string, data: unknown[]) => void;
};

const Home = ({
      data = null,
      toAdd = () => {}
    }: HomeProps) => {
    const [technologies, setTechnologies] = useState((data && (data as TopicsData).technologies) || []);
    const [descriptions, setDescriptions] = useState((data && (data as TopicsData).topicDescriptions) || []);
    const [links, setLinks] = useState((data && (data as TopicsData).topicLinks) || []);
    const [groups, setGroups] = useState<JSX.Element[][]>([]);
    const [ttips, setTtips] = useState<React.ReactElement[]>([]);

    useEffect(() => {
      const makeGroup = (topicTechnologies: Technologies[], start: number, finish: number) => {
        return topicTechnologies.reduce((code: JSX.Element[], t: Technologies, i: Key | null | undefined) => {
          if (typeof i === 'number' && i >= start && i < finish) {
            const ttId = `ttip${i}`;
            code.push((<li key={i} data-tip data-for={ttId}>{t.name || t.title}</li>));
          }
        return code;
        }, [])
      };

      const newGroups = [];
      const half = Math.ceil(technologies.length / 2);
      newGroups.push(makeGroup(technologies, 0, half));
      newGroups.push(makeGroup(technologies, half, half * 2));

      setGroups(newGroups);

      if (data && technologies && links && descriptions) {
        if (data && data.count > 0 &&
            data.technologies &&
            data.technologies.length === data.count &&
            data.topicDescriptions.length === data.count &&
            data.topicLinks.length === data.count
            ) {
                setTechnologies(data.technologies);
                setDescriptions(data.topicDescriptions);
                setLinks(data.topicLinks);
        } else {
            // add topics to server
            toAdd('technologies', technologies);
            setTechnologies(technologies);
            toAdd('topicdescriptions', descriptions);
            setDescriptions(descriptions);
            toAdd('topiclinks', links);
            setLinks(links);
        }
      }

      const makeTtips = [];
      for (const [index, value] of technologies.entries()) {
        const ttId = `ttip${value.id}`
        const idCode = value.id;
        const descObj = descriptions.find((d: { technology: string | number }) => d.technology === idCode);
        const description = descObj ? descObj.description : '';
        const linkObj = links.find((d) => d.technology === idCode);
        const link = linkObj?.link || '';
        makeTtips.push(
          <ReactTooltip id={ttId} key={index} html={true} delayHide={100} effect="solid" border={true}
              clickable={true} eventOff="focusout" className="tooltip-item" type='error'>
            { `${description}  <p>See the  <a href=${link} target='_blank'>
            Wikipedia</a> article for more information.</p>` }
          </ReactTooltip>
        )
      }
      setTtips(makeTtips);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, toAdd]);

    return (
      <HomePageContainer>
        <TextSegment>
        <h2>What's the impact of technology on your world?</h2>
        <p>Mid-year 2025, the focus is on <strong>artificial intelligence</strong>: how can it improve business
        performance, how can it provide new answers and insight, and how can it simplify and make things more
        efficient.
        </p>
        <p>Is your small business facing a technology challenge? Does your web site need a fresh approach?
        Are you starting up a new business? Do you need expertise to architect the technology that will drive
        your success? Does your large enterprise face new challenges in the market? Do you need the computing
        resource elasticity offered by the "cloud"? Are you overwhelmed with data and still lacking information?
        Are you a commercial web/mobile provider that needs some systems engineering, a new architecture, and
        good design principles?</p>
        <p>You've probably considered that there is a technology solution. Do you need technology advice?
        Would added technology expertise provide a solution? Do you need software development expertise?
        Do you need help incorporating <strong>artificial intelligence</strong> into your current systems and processes?</p>

        </TextSegment>
        <TextSegment>
          <h2>
          Fueled by technology advances,
          </h2>
          <p>
          the promise of new products and services is:
          improved business performance, increased sales and market capture,
          a better quality of life,
          savings of time, greater security, improved health, more fun and more
          opportunities to connect with an ever-expanding social circle.
          </p>
        </TextSegment>
        <TextSegment>
          <h2>
            In {new Date().getFullYear()}, these technologies are impacting our world:
          </h2>
          <NarrowWidth>
            <ul>
              {groups[0]}
            </ul>
            <ul>
              {groups[1]}
            </ul>
          </NarrowWidth>
          <Popups>{ttips}</Popups>
          <WideWidth>
            <TechIcons technologies={technologies}/>
          </WideWidth>
          <p>Whatever your technology need is, we have resources to help you.
          Short-term or long-term, we can provide you technology solutions.
          </p>
        </TextSegment>
      </HomePageContainer>
    );
}

export default Home;