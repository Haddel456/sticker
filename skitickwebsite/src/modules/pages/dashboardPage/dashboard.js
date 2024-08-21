import React from 'react'
import { BoardsList } from '../../boards/components/boards/boardsList'
import { demoBoardList } from './demoData'
import Navbar from '../../publicComponents/navBar/Navbar'
import './dashboard.css'
export function Dashboard(props) {


    return (
        <>
         <Navbar/>
        <div className='dashboardContainer'>
          <BoardsList boardsList={demoBoardList}/> 
        </div>
        </>
    )
}
