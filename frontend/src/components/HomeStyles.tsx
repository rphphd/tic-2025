import styled from 'styled-components';

export const WideWidth = styled.div`

    /* Small mobile devices (e.g., smartphones in portrait orientation) */
    @media (min-width: 320px) { /* 1.5.4, 1.3.5 */
        display: none;
    /* ... specific styles for small mobiles ... */
    }

    /* Larger mobile phones (e.g., smartphones in landscape orientation or larger models) */
    @media (min-width: 480px) { /* 1.3.5, 1.2.2 */
        display: none;
    /* ... specific styles for larger mobiles ... */
    }

    /* Tablets (e.g., iPads in portrait orientation, small laptops) */
    @media (min-width: 768px) { /* 1.3.5, 1.2.2 */
        display: none;
    /* ... specific styles for tablets ... */
    }

    /* Small desktops and laptops */
    @media (min-width: 1024px) { /* 1.3.5, 1.6.2 */
        display: none;
    /* ... specific styles for small desktops ... */
    }

    /* Large desktops and high-resolution screens */
    @media (min-width: 1280px) { /* 1.2.3, 1.3.5 */
        display: block;
    /* ... specific styles for large desktops ... */
    }
`;

export const NarrowWidth = styled.div`
    @media all and (max-width: 1178px) and (max-height: 760px) {
        display: inline-block;
    }

    @media all and (min-width: 1102px) and (min-height: 729px) {
        display: none;
    }

    @media all and (min-width: 1035px) and (min-height: 761px) {
        display: none;
    }

        /* Small mobile devices (e.g., smartphones in portrait orientation) */
    @media (min-width: 320px) { /* 1.5.4, 1.3.5 */
        display: inline-block;
    /* ... specific styles for small mobiles ... */
    }

    /* Larger mobile phones (e.g., smartphones in landscape orientation or larger models) */
    @media (min-width: 480px) { /* 1.3.5, 1.2.2 */
        display: inline-block;
    /* ... specific styles for larger mobiles ... */
    }

    /* Tablets (e.g., iPads in portrait orientation, small laptops) */
    @media (min-width: 768px) { /* 1.3.5, 1.2.2 */
        display: inline-block;
    /* ... specific styles for tablets ... */
    }

    /* Small desktops and laptops */
    @media (min-width: 1024px) { /* 1.3.5, 1.6.2 */
        display: inline-block;
    /* ... specific styles for small desktops ... */
    }

    /* Large desktops and high-resolution screens */
    @media (min-width: 1280px) { /* 1.2.3, 1.3.5 */
        display: none;
    /* ... specific styles for large desktops ... */
    }
`;

export const HomePageContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
    overflow-y: auto;
    width: 96vw;
    height: 65vh;

    /* Small mobile devices (e.g., smartphones in portrait orientation) */
    @media (min-width: 320px) { /* 1.5.4, 1.3.5 */
        flex-direction: row;
    /* ... specific styles for small mobiles ... */
    }

    /* Larger mobile phones (e.g., smartphones in landscape orientation or larger models) */
    @media (min-width: 480px) { /* 1.3.5, 1.2.2 */
        flex-direction: row;
    /* ... specific styles for larger mobiles ... */
    }

    /* Tablets (e.g., iPads in portrait orientation, small laptops) */
    @media (min-width: 768px) { /* 1.3.5, 1.2.2 */
        flex-direction: row;
    /* ... specific styles for tablets ... */
    }

    /* Small desktops and laptops */
    @media (min-width: 1024px) { /* 1.3.5, 1.6.2 */
        flex-direction: column;
    /* ... specific styles for small desktops ... */
    }

    /* Large desktops and high-resolution screens */
    @media (min-width: 1280px) { /* 1.2.3, 1.3.5 */
        flex-direction: column;
    /* ... specific styles for large desktops ... */
    }
`;

export const TwoColumnPanel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-content: flex-start;
    width: 96vw;
    height: 65vh;
    margin: 0 auto;

    div {
        font-size: calc(9px + 1vmin);
        line-height: calc(9px + 1.6vmin);
        min-height: 0;
        padding: 0 20px;

        h2 {
            line-height: calc(9px + 1.8vmin);
            width: 100%;
        }

        p {
            text-wrap: balanced;
        }

        /* Small mobile devices (e.g., smartphones in portrait orientation) */
        @media (min-width: 320px) { /* 1.5.4, 1.3.5 */
            width: 96%;
        /* ... specific styles for small mobiles ... */
        }

        /* Larger mobile phones (e.g., smartphones in landscape orientation or larger models) */
        @media (min-width: 480px) { /* 1.3.5, 1.2.2 */
            flex-direction: row;
            width: 96%;.. specific styles for larger mobiles ... */
        }

        /* Tablets (e.g., iPads in portrait orientation, small laptops) */
        @media (min-width: 768px) { /* 1.3.5, 1.2.2 */
            width: 96%;
        /* ... specific styles for tablets ... */
        }

        /* Small desktops and laptops */
        @media (min-width: 1024px) { /* 1.3.5, 1.6.2 */
            width: 47%;
        /* ... specific styles for small desktops ... */
        }

        /* Large desktops and high-resolution screens */
        @media (min-width: 1280px) { /* 1.2.3, 1.3.5 */
            width: 47%;
        /* ... specific styles for large desktops ... */
        }
    }
`;

export const AboutContainer = styled(HomePageContainer)`
    height: auto;
    min-height: 80vh;
`;


interface TextSegmentProps {
    wide?: boolean;
}

export const TextSegment = styled.div<TextSegmentProps>`
    font-size: calc(9px + 1vmin);
    line-height: calc(9px + 1.6vmin);
    min-height: 0;
    padding: 0 20px;

    p {
        text-wrap: balanced;
    }

    ul {
        margin: 0;
        vertical-align: top;
    }

    ul:last-child {
        margin-bottom: 1em;
    }

    h2 {
        line-height: calc(9px + 1.8vmin);
        width: 100%;
    }

    /* Small mobile devices (e.g., smartphones in portrait orientation) */
    @media (min-width: 320px) { /* 1.5.4, 1.3.5 */
        width: 96%;
    /* ... specific styles for small mobiles ... */
    }

    /* Larger mobile phones (e.g., smartphones in landscape orientation or larger models) */
    @media (min-width: 480px) { /* 1.3.5, 1.2.2 */
        flex-direction: row;
        width: 96%;.. specific styles for larger mobiles ... */
    }

    /* Tablets (e.g., iPads in portrait orientation, small laptops) */
    @media (min-width: 768px) { /* 1.3.5, 1.2.2 */
        width: 96%;
    /* ... specific styles for tablets ... */
    }

    /* Small desktops and laptops */
    @media (min-width: 1024px) { /* 1.3.5, 1.6.2 */
        width: ${(props) => (props.wide ? '96%' : '47%')};
    /* ... specific styles for small desktops ... */
    }

    /* Large desktops and high-resolution screens */
    @media (min-width: 1280px) { /* 1.2.3, 1.3.5 */
        width: ${(props) => (props.wide ? '96%' : '47%')};
    /* ... specific styles for large desktops ... */
    }

`;

export const ButtonPanel = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: space-between;
    margin: 0 auto;
    margin-top: 5px;
    min-height: 33px;
    width: 96vw;
`;

export const Popups = styled.div`
    position: relative;
    display: inline-block;

    .tooltip-item {
        background-color: #d1cc00 !important;
        border-color: #97cc00 !important;
        border-width: 2px !important;
        color: #443380 !important;
        max-width: 500px !important;
        opacity: 1 !important;
    }

    .tooltip-item.place-top:after {
        border-top-color: #97cc00 !important;
    }

    .tooltip-item.place-bottom:after {
        border-bottom-color: #97cc00 !important;
    }

    .tooltip-item.place-left:after {
        border-left-color: #97cc00 !important;
    }

    .tooltip-item a {
        color: #D2457B;
    }

`;
