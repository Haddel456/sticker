import React from 'react'
import { BoardForm } from '../boards/components/boardForm/boardForm'

export function EditBoardPage(props) {
    const handleFormSubmit = (formData) => {
        console.log('Form data submitted:', formData);
        // You can perform further actions like sending data to an API here
    };

    return (
        <>
            <div >
            <BoardForm onSubmit={handleFormSubmit} />
        </div>
        </>
    )
}
