import React from 'react'
import { BoardsList } from '../../boards/components/boards/boardsList'
import { demoBoardList } from './demoData'
import Navbar from '../../publicComponents/navBar/Navbar'
import './dashboard.css'
import { AddButton } from './addbutton'
export function Dashboard(props) {


    return (
        <>
         <Navbar/>
        <div className='dashboardContainer'>
          <BoardsList boardsList={demoBoardList}/> 
          <AddButton/>
        </div>
        </>
    )
}
