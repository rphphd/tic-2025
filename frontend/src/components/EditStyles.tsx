import styled from 'styled-components';

export const EditPanel = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: no-wrap;
    -webkit-flex-wrap: no-wrap;
    justify-content: flex-start;
    align-content: space-between;
    width: 96vw;
    height: 70vh;
    overflow-y: auto;
    margin: 0 auto;

    label {
        font-weight: 700;
    }

    ul {
        font-size: 90%;
        list-style: none;
        padding: 0;
        margin: 0;
    }

    li {
        cursor: pointer;
        display: inline-block;
        margin-right: 20px;

        &.new-line {
            display: block;
            margin: 10px 0;
        }
    }
`;

export const EditBlock = styled.div`
    border: solid #97cc00 4px;
    margin: 25px 0 0 0;
    padding: 25px;
    width: 90vw;

    textarea {
        width: 50vw;
        height: 100px;
        resize: vertical;
    }

    .input-block.linear {
        display: inline;
        margin-left: 20px;
    }

    .input-block.linear:nth-child(1) {
        margin-left: 0;
    }

    .topic-icon {
        display: inline-block;
        margin-left: 25px;
        vertical-align: top;
    }

    .icon-link {
        display: inline-block;
        margin-left: 25px;
        vertical-align: top;
    }

    .icon-link textarea {
        display: block;
        margin: 0;
        height: inherit;
        width: 25vw;
    }

    .iconsquare:hover {
        cursor: pointer;
    }
`;

/*


.edit-error {
  margin: 20px auto;
  padding: 25px;
  text-align: center;
  width: 60vw;
}
*/