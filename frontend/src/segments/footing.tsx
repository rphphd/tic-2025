import { Link } from 'react-router-dom';
import type { JSX } from 'react/jsx-runtime';

import { AppFooter } from '../components';

const links = [
    { title: 'About Technology Impact Consulting', link: '/about'},
    { title: 'Gartner IT Glossary', link: 'https://www.gartner.com/it-glossary/'},
    { title: 'Linkedin', link: 'https://www.linkedin.com/company/technology-impact-consulting-llc'},
    { title: 'X', link: 'https://x.com/TechImpactCons'},
    { title: 'Facebook', link: 'https://www.facebook.com/Technology-Impact-Consulting-164113913074/'},
    { title: 'Contact Us', link: 'http://www.techimpactcons.com/qrlp.html'},
]

interface FooterProps {
    notMain: boolean;
    isAbout: boolean;
}

const Footer = ({ notMain, isAbout }: FooterProps) => {
        const list: JSX.Element[] = [];
        let url: JSX.Element;
        let updatedLinks = [...links];
        if (notMain) {
            updatedLinks = [{ title: 'Home', link: '/' }, ...links];
        }
        updatedLinks.forEach((value, index) => {
            if (value.link.indexOf('http') >= 0) {
                url = (<a href={value.link} target="_blank" rel="noopener noreferrer">{value.title}</a>);
                list.push(<li key={index}>{url}</li>);
            } else {
                if (!isAbout || value.link !== links[0].link) {
                    url = (<Link to={`${import.meta.env.VITE_APP_CLIENT_URL}${value.link}`}>{value.title}</Link>);
                    list.push(<li key={index}>{url}</li>);
                }
            }
        });
        return(
            <AppFooter>
                <ul>{list}</ul>
            </AppFooter>
        )
}

export default Footer;