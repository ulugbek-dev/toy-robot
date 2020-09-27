import styled from 'styled-components';

export const HomeStyled = styled.div`
    display: flex;
    max-width: 1300px;
    margin: auto;

    .column {
        width: 50%;
    }

    @media(max-width: 768px) {
        flex-direction: column-reverse;

        .column {
            width: 100%;
        }
    }
`