import { validation } from '../../utils/validation';

export const handleExecute = e => {
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
            if (
                (positionArr[2] === 'NORTH' && positionArr[0] === '0') ||
                (positionArr[2] === 'SOUTH' && positionArr[0] === '4') ||
                (positionArr[2] === 'WEST' && positionArr[1] === '0') ||
                (positionArr[2] === 'EAST' && positionArr[1] === '4')
            ) {
                setValid(false);
                return false;
            } else {
                const movement = positionArr[2] === 'SOUTH' || positionArr[2] === 'EAST' ? 1 : -1;
                const index = positionArr[2] === 'NORTH' || positionArr[2] === 'SOUTH' ? 0 : 1;
                const payload = positionArr.map((p, i) => index === i ? parseInt(p) + movement : p).join(',');
                dispatch({ type: 'UPDATE', payload });
            }
        }

        // Change current direction
        if (commandArr[0] === 'LEFT' || commandArr[0] === 'RIGHT') {
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
            dispatch({
                type: 'COMMAND',
                payload: position
            });
        } else {
            dispatch({
                type: 'COMMAND',
                payload: command
            });
        }

        setCommand('');

        // Scroll console to the end
        const historyContainer = document.getElementById('history');
        historyContainer.scrollTo(0, historyContainer.scrollHeight);
    } else {
        setValid(false);
    }
}