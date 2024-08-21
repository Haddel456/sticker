import React from 'react'
import './board.css';
import { useNavigate } from 'react-router-dom';

export function Board({ id, album, numOfQuestions, questions, level, type, MinScore, numOfTries, status, backgroundImage, title,
    description, index}) {
        
    const navigate = useNavigate();

    const goToEditPage = () => {
          navigate(`/editBoard/${id}`);
        };
        
    return (
        <>
         <div className="grid-item" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="title">{title}</div>
            <div>{description}</div>
            <div className="buttons">
                <button className="button" onClick={goToEditPage} >Edit</button>
                <button className="button" >Delete</button>
            </div>
        </div>
        </>
       
    )
}

