import styled from 'styled-components';

export const HeaderStyled = styled.header`
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 26px;
    }

    @media(max-width: 768px) {
        height: 100px;
    }
`