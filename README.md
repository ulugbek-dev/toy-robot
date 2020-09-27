# TOY ROBOT - React App

### Description
- The application is a simulation of a toy robot moving on a square tabletop, of dimensions 5 units x 5 units.

## Demo
- [https://toy-robot-ten.vercel.app](https://toy-robot-ten.vercel.app)

## Screenshot
[![N|Solid](https://raw.githubusercontent.com/ulugbek-dev/toy-robot/master/public/assets/screenshot.png)](https://raw.githubusercontent.com/ulugbek-dev/toy-robot/master/public/assets/screenshot.png)

## Commands
- PLACE X,Y,F: will put the toy robot on the table in position X,Y and facing NORTH,
  SOUTH, EAST or WEST. The first valid command to the robot is a PLACE command, after that, any
  sequence of commands may be issued, in any order, including another PLACE
  command. The application should discard all commands in the sequence until
  a valid PLACE command has been executed.
- MOVE: will move the toy robot one unit forward in the direction it is
  currently facing.
- LEFT and RIGHT will rotate the robot 90 degrees in the specified direction
  without changing the position of the robot.
- REPORT: will announce the X,Y and F of the robot. This can be in any form,
  but standard output is sufficient.

## Example Input and Output:
Example a

    PLACE 0,0,NORTH
    MOVE
    REPORT

Expected output:

    0,1,NORTH

Example b

    PLACE 0,0,NORTH
    LEFT
    REPORT

Expected output:

    0,0,WEST

## Used techs

- JavaScript
- ReactJS
- Redux
- Styled Components

## Online view

- Deployed in Vercel server. For online view click [here](https://toy-robot-ten.vercel.app)