import { Link } from 'react-router-dom';
import Footer from './footing'
import Home from './home-page';
import About from './about-page';
import EditData from './edit-data';
import type { TopicsData } from '../components/MainTypes';
import { ButtonPanel, TwoColumnPanel } from '../components';
import { ButtonSuccess } from '../components/AppStyles';

type MainPageProps = {
    topicData: TopicsData
    addData: (model: string, data: unknown[]) => void
};

export const MainPage = ({ topicData, addData }: MainPageProps) => {
    return (
      <div>
        <Home data={topicData} toAdd={addData} />
        <ButtonPanel>
          <Link to="/whats-new">
            <ButtonSuccess>See the latest at Technology Impact Consulting!</ButtonSuccess>
          </Link>
        </ButtonPanel>
        <Footer isAbout={false} notMain={false} />
      </div>
    );
};

export const AboutPage = () => {
    return (
        <div>
        <About />
        <div className="button-panel">
        </div>
        <Footer isAbout={true} notMain={true} />
        </div>
    );
};

export const EditPage = ({
    topics,
    submitChange,
}: {
    topics: TopicsData | null;
    submitChange: (updatedData: TopicsData) => void;
}) => {
    return (
        <div>
        <EditData topics={topics} submitChange={submitChange} />
        <Footer isAbout={true} notMain={true} />
        </div>
    )
};

export const WhatsNew = () => {
    const resumeLink = `${import.meta.env.VITE_APP_RESUME_LINK}`
    return (
        <div>
            <TwoColumnPanel>
                <div>
                    <h2>What's new?</h2>
                    <p>After a full career in research and development, with roles from software engineer to
                    engineering executive, I have come back to my first love. <strong>I am at my best when I'm solving
                    problems and creating new capabilities.</strong>  Not that it wasn't exciting developing space interceptors
                    and automotive lane departure warning systems, but my role there was that of a leader.  I was
                    honored to serve as a principal investigator developing our nation's Intelligent Transportation
                    System's National Architecture and enjoyed teaching how to extend it and apply it.  Lot's of
                    challenges and great rewards along the way. I was also honored to be selected one of 15
                    Engineers of the Year at Rockwell International in 1991 out of 17,000 engineers employed
                    that year.</p>

                    <h2>The challenge</h2>
                    <p>
                    Overall, what keeps my mind challenged is applying logic, creating algorithms, applying
                    computer science concepts, and acquiring new tools to develop new capabilities.  For the past
                    couple of years devoted all of my working hours to helping several new startups, paving
                    the way for attracting investment in these new companies.  And now with the rise
                    of <strong>artificial intelligence</strong> and machine learning,
                    I see even more opportunities to innovate and create value.
                    </p>
                    <p style={{marginTop:25 + 'px', textAlign: 'center'}}>
                    <ButtonSuccess onClick={() => window.open(resumeLink, '_blank', 'noopener,noreferrer')}>
                        Resume of Richard P. Hooper, PhD
                    </ButtonSuccess>
                    </p>
                </div>
                <div>
                    <h2>Emerging Startups</h2>
                    <p>I have helped several startups over the years bring their business concepts to reality:</p>
                    <ul className="startups">
                        <li><a href="http://lyt.ai/" target="_blank" rel="noopener noreferrer">LYT</a>: LYT Speed helps you move buses through traffic with more reliability and faster service.</li>
                        <li><a href="http://sportoco.com/" target="_blank" rel="noopener noreferrer">Sportoco</a>: creating game-of-the-game sports excitement</li>
                        <li><a href="https://postd.io/" target="_blank" rel="noopener noreferrer">Postd</a>: offering an ad-free digital marketplace for creators, artists, and writers.</li>
                        <li><a href="https://transact.io/" target="_blank" rel="noopener noreferrer">Transact</a>: supplying the debit card for digital media.</li>
                        <li><a href="http://info.homeunion.com" target="_blank" rel="noopener noreferrer">HomeUnion</a>: providing real estate investment opportunities.</li>
                        <li><a href="http://www.voluware.com" target="_blank" rel="noopener noreferrer">Voluware</a>: streamling and automating prior medical authorizations/referrals.</li>
                    </ul>
                    <h2>Full Stack Development</h2>
                    <p>
                    So now, I've settled into being the best full-stack developer in town!  I have already
                    used a mutliple different stacks at these startup companies as well as with other more established clients.
                    Regardless of the tools, languages, and frameworks, the concepts are similar.  Advanced dynamic UI frameworks such as
                    Angular and REACT provide for rich user interacation.  Cloud based microservices provide the backend processes to
                    support complex functionality whether using RESTful APIs or two-way publish/subscribe interface with the client frontends.
                    </p>

                    <p>I am always looking for new clients!  And I keep abreast of
                        the <Link to={`/`} >technologies</Link> that are impacting our world
                        in {new Date().getFullYear()}.
                    </p>

                </div>
            </TwoColumnPanel>
            <div className="button-panel">
            </div>
            <Footer isAbout={false} notMain={true} />
        </div>
    )
};
