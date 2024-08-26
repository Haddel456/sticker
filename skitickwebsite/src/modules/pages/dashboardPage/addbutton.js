import React from 'react';
import { useNavigate } from 'react-router-dom';

export function AddButton({}){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/createboard');
    };

return (
    <button onClick={handleClick}>Add New Board </button>
);

}