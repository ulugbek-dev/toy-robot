export const validation = v => {
    const min = 0, max = 4;
    const directions = ['NORTH', 'SOUTH', 'WEST', 'EAST'];
    const commands = ['LEFT', 'RIGHT', 'MOVE', 'REPORT'];

    const c = v.trim().split(' ');
    if(c.length > 2) return false;
    if(c.length > 1) {
        if(c[0] !== 'PLACE') return false;

        const position = c[1].split(',');
        
        if(position.length !== 3) return false;
        
        const positionX = parseInt(position[0]);
        const positionY = parseInt(position[1]);
        const direction = position[2];

        if(positionX > max || positionX < min || positionY > max || positionY < min) return false;
        if(directions.filter(d => d === direction).length === 1) return true;
        else return false;
    } else {
        if(commands.filter(x => x === c[0]).length === 1) return true;
        return false;
    }
}