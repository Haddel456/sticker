import React from 'react'
import { Question } from './question'
export function Questions({questionsList}) {
    

    return (
        <>
        {
            questionsList.map(question => <Question questionData = {question}/>)
        }
        </>
    )
}
