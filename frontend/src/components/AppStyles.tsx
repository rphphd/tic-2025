import styled from 'styled-components';

export const AppContainer = styled.div`
  min-height: 100vh;

  a {
    text-decoration: none;
  }
`;

export const AppIntro = styled.p`
  margin: 0;
  text-align: left;
  font-size: calc(9px + .4vmin);
  position: fixed;
  bottom: 2vh;
`;

export const AppHeader = styled.header`
  div.outer {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    font-size: calc(9px + 1.5vmin);

    p {
      color: #666;
    }
  }

  h2 {
    color: #443380;
  }

  .logo {
    display: flex;
    height: 100px; /*  312px */
    width: 76px; /* 237px */
  }

  .logo-block {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 98vw;

    p {
      font-style: italic;
    }
  }

  .boxes {
    height: 33.5px;
    /* width: 62%; */
    overflow: hidden;
  }

  .boxes svg {
    margin: 0;
    height: 2.125vmax;
    width: 98vw;
  }
`;

export const AppFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-self: flex-end;
  flex-grow: 2;
  justify-content: space-evenly;
  font-size: calc(9px + .4vmin);
  padding: 20px 20px 0 20px;
  position: fixed;
  bottom: 4vh;
  width: 98%;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    list-style: none;
    padding: 0;
    margin: 0;

    a {
      text-decoration: none;
      color: #443380;
    }
`;


export const Button = styled.button`
  font-size: calc(9px + 1vmin);
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-right: 10px;
`;

export const ButtonPrimary = styled(Button)`
  background-color: #4949aa;
  color: #fff;
`;

export const ButtonSecondary = styled(Button)`
  background-color: #ccc;
  color: #333;
`;

export const ButtonSuccess = styled(Button)`
  background-color: #97cc00;
  color: #fff;
`;

export const ButtonWarn = styled(Button)`
  background-color: #d1cc00;
  color: #666;
`;

export const TechIconsPanel = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 450px;
  margin: 0 auto;

  svg {
    margin: 0 8px 8px 0;
  }

  .iconsquare:hover {
    cursor: pointer;
  }

`
