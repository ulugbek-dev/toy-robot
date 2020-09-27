import styled from 'styled-components';
import { primaryColor } from '../../utils/variables';

export const TableAndRobotStyled = styled.div`
    width: 100%;
    display: flex;
    padding: 30px;

    .table {
        width: 50vw;
        height: calc(50vw - 60px);
        max-width: 100%;
        max-height: calc(1300px / 2 - 60px);
        border: 10px solid gainsboro;
        position: relative;
        transform: rotate(-90deg);
    }

    .row {
        display: flex;
        height: 20%;

        .cell {
            height: 100%;
            width: 20%;
            background-color: #f9f9f9;
        }

        :nth-child(even) {
            .cell:nth-child(even) {
                background-color: ${primaryColor}; 
            }
        }
        :nth-child(odd) {
            .cell:nth-child(odd) {
                background-color: ${primaryColor}; 
            }
        }
    }

    .robot {
        width: 20%;
        height: 20%;
        padding: 20px;
        position: absolute;
        transition: 250ms ease-in-out;
        top: ${props => parseInt(props.position[0]) * 20}%;
        left: ${props => parseInt(props.position[1]) * 20}%;
        transform: rotate(${props => props.direction}deg);
        display: ${props => props.display};
    }

    @media(max-width: 768px) {
        padding-top: 0;

        .table {
            width: 100vw;
            height: calc(100vw - 60px);
        }
    }
`