import React, { useState } from 'react';
import { ConsoleStyled } from './ConsoleStyled';
import { useSelector, useDispatch } from 'react-redux';
import { validation } from '../../utils/validation';

export default function Console() {

    const dispatch = useDispatch();

    // Get movement history and current position from store
    const history = useSelector(state => state.history);
    const position = useSelector(state => state.position);

    // Input value
    const [command, setCommand] = useState('');

    // Validation
    const [valid, setValid] = useState(true);

    // Command input handle
    const handleCommand = e => {
        setValid(true);
        setCommand(e.target.value.toUpperCase());
    }

    // Execute hanlde
    const handleExecute = e => {
        e.preventDefault();

        if (command && validation(command)) {
            const commandArr = command.trim().split(' ');
            const positionArr = position.split(',');

            // Change current position
            if (commandArr[0] === 'PLACE')
                dispatch({
                    type: 'UPDATE',
                    payload: commandArr[1]
                });

            // Change current position
            if (commandArr[0] === 'MOVE') {
                if (!position || (positionArr[2] === 'NORTH' && positionArr[1] === '4') || (positionArr[2] === 'SOUTH' && positionArr[1] === '0') ||
                    (positionArr[2] === 'WEST' && positionArr[0] === '0') || (positionArr[2] === 'EAST' && positionArr[0] === '4')) {
                    setValid(false);
                    return false;
                } else {
                    const movement = positionArr[2] === 'SOUTH' || positionArr[2] === 'WEST' ? -1 : 1;
                    const index = positionArr[2] === 'NORTH' || positionArr[2] === 'SOUTH' ? 1 : 0;
                    const payload = positionArr.map((p, i) => index === i ? parseInt(p) + movement : p).join(',');
                    dispatch({ type: 'UPDATE', payload });
                }
            }

            // Change current direction
            if (commandArr[0] === 'LEFT' || commandArr[0] === 'RIGHT') {
                if(!position) {
                    setValid(false);
                    return false;
                }
                const directions = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
                const left = directions.map((p, i) => positionArr[2] === p ? i === 0 ? directions[3] : directions[i - 1] : '').join('');
                const right = directions.map((p, i) => positionArr[2] === p ? i === 3 ? directions[0] : directions[i + 1] : '').join('');
                if (commandArr[0] === 'LEFT')
                    dispatch({
                        type: 'UPDATE',
                        payload: positionArr.map((p, i) => 2 === i ? left : p).join(',')
                    });
                else 
                    dispatch({
                        type: 'UPDATE',
                        payload: positionArr.map((p, i) => 2 === i ? right : p).join(',')
                    });;
            }

            // Change current direction
            if (commandArr[0] === 'REPORT') {
                if(!position) {
                    setValid(false);
                    return false;
                }
                dispatch({ type: 'COMMAND', payload: position });
            } else {
                dispatch({ type: 'COMMAND', payload: command });
            }

            setCommand('');

            // Scroll console to the end
            const historyContainer = document.getElementById('history');
            historyContainer.scrollTo(0, historyContainer.scrollHeight);
        } else {
            setValid(false);
        }
    }

    return (
        <ConsoleStyled>
            <form onSubmit={handleExecute}>
                <input
                    type="text"
                    placeholder="Enter command"
                    value={command}
                    onChange={handleCommand}
                    className={!valid ? 'invalid' : ''}
                />
                <button>EXECUTE</button>
            </form>
            <ul id="history">
                <li><b>COMMANDS:</b></li>
                <li><span>1.</span> PLACE will put the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST</li>
                <li><span>2.</span> MOVE will move the toy robot one unit forward in the direction it is currently facing.</li>
                <li><span>3.</span> LEFT and RIGHT will rotate the robot 90 degrees in the specified direction without changing the position of the robot.</li>
                <li><span>4.</span> REPORT will announce the X,Y and F of the robot. This can be in any form, but standard output is sufficient.</li>
                <li><hr /></li>

                {history.map((h, i) => (
                    <li key={i} className="history">{h}</li>
                ))}
            </ul>
        </ConsoleStyled>
    );
}