import keywords from './keywords'
import { ButtonSuccess, TextSegment, AboutContainer } from '../components'

const columnCount = 5;

const About = () => {
    const resumeLink = `${import.meta.env.VITE_APP_RESUME_LINK}`

    return (
        <AboutContainer>
            <TextSegment wide>
                <h2>About Technology Impact Consulting, LLC</h2>
                <p>
                We provide solutions to problems encountered in the application of
                current technologies. We operate in web-based and mobile applications
                in location based services (LBS), video analytics, social media, and
                business process automation. Dr. Richard P. Hooper, principal, is a 40
                year veteran in the field of computer sciences, systems architecture,
                and data modeling. He uses a variety of current technologies to design
                and/or implement solutions for clients. If you have need solutions for
                a specific technical issue, need advice, or want a plan for migrating to
                a new technology, contact us.
                </p>
                <h2 style={{marginTop:30 + 'px'}}>keywords:</h2>
                <div style={{ columnCount: columnCount, columnGap: '1rem' }}>
                    {keywords
                        .split(',')
                        .map(word => word.trim())
                        .sort((a: string, b: string) => a.localeCompare(b))
                        .map((word: string, index: number) => (
                            <div key={index}>{word}</div>
                        ))}
                </div>

                <p style={{marginTop:25 + 'px'}}>
                    <ButtonSuccess onClick={() => window.open(resumeLink, '_blank', 'noopener,noreferrer')}>
                        View Resume of Richard P. Hooper, PhD
                    </ButtonSuccess>

                </p>
            </TextSegment>
        </AboutContainer>
    )
}

export default About;