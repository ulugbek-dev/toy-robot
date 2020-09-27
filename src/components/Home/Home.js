import React from 'react';
import { HomeStyled } from './HomeStyled';
import TableAndRobot from '../TableAndRobot/TableAndRobot';
import Console from '../Console/Console';

export default function Home() {
  return (
    <HomeStyled>
        <div className="column">
            <TableAndRobot />
        </div>
        <div className="column">
            <Console />
        </div>
    </HomeStyled>
  );
}