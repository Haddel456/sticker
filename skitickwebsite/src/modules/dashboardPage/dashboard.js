import React from "react";
import { CardsList } from "../boards/components/boards/boardsList";

import React from 'react'
import { BoardsList } from '../boards/components/boards/boardsList'
import { demoBoardList } from './demoData'

export function Dashboard(props) {

    return (
        <>
        <div className='dashboardContainer'>
          <BoardsList boardsList={demoBoardList}/> 
        </div>
        </>
    )
}
