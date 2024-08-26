import React from 'react';
import { BoardForm } from '../../boards/components/boardForm/boardForm';
import Navbar from '../../publicComponents/navBar/Navbar';

export function CreateBoard(){
    return(
        <>
        <div >
            <Navbar/>

            <BoardForm  />
        </div>
        </>
    );
}