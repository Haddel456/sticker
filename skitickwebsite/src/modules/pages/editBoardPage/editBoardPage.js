import React from 'react'
import { BoardForm } from '../../boards/components/boardForm/boardForm'
import Navbar from '../../publicComponents/navBar/Navbar';
import { rdxBoardsActions } from '../../boards/rdx/boards.rdx';
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import { useBoardsHelpers } from '../../boards/hooks/useBoardsHelper';
export function EditBoardPage(props) {

    const { id } = useParams();
    const [board, setBoard] = useState();

    const handleFormSubmit = (formData) => {
        console.log('Form data submitted:', formData);
        // You can perform further actions like sending data to an API here
    };

    const { getBoard, pendingGetBoards } = useBoardsHelpers();

    const dispatch = useDispatch();
    useEffect(() => {
        (async () => {
            if (id) {
            const boardData = await getBoard(id);
            if (boardData) {
                setBoard((prev) => {
                if (!prev) {
                    return boardData;
                } else {
                    return prev;
                }
                });
                dispatch(rdxBoardsActions.setSelectedBoard(boardData));

            }
            }
        })();
        }, [id, getBoard, dispatch]);

    return (
        <>
        <div >
            <Navbar/>

            <BoardForm onSubmit={handleFormSubmit} />
        </div>
        </>
    )
}
