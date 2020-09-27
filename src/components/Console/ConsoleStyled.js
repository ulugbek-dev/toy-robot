import styled from 'styled-components';
import { primaryColor } from '../../utils/variables';

export const ConsoleStyled = styled.div`
    padding: 30px;
    height: 100%;
    display: flex;
    flex-direction: column;

    form {
        display: flex;
    }

    button {
        width: 100px;
        margin-left: 10px;
        padding: 12px 14px;
        border-radius: 8px;
        font-size: 16px;
        background-color: ${primaryColor};
        border: 1px solid ${primaryColor};
        color: white;
        font-family: monospace;
        cursor: pointer;
        transition: 250ms;
        filter: brightness(120%);
        :hover {
            filter: brightness(150%);
        }
    }

    input {
        width: calc(100% - 110px);
        padding: 12px 14px;
        border-radius: 8px;
        font-size: 16px;
        background-color: ${primaryColor};
        border: 1px solid ${primaryColor};
        color: white;
        font-family: monospace;
        transition: 250ms;

        &.invalid {
            border-color: red;
        }
    }

    ul {
        height: calc(100% - 44px);
        max-height: calc(50vw - 124px);
        overflow-y: auto;
        margin-bottom: 0;
        background-color: ${primaryColor};
        border-radius: 8px;
        padding: 20px;
        list-style: none;
        font-size: 14px;
        font-family: monospace;

        li {
            margin: 4px 0;
            display: flex;

            &.history {
                opacity: .8;
            }
        }
    }

    hr {
        width: 100%;
        border-color: #ffffff4f;
        border-style: dashed;
        margin: 14px 0px;
    }

    @media(max-width: 768px) {
        padding-top: 0;
        
        ul {
            min-height: 300px;
            font-size: 12px;
        }
    }
`