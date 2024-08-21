import React from 'react'
import { Board } from './board'
import GridView from '../../../gridview/GridView'
export function BoardsList({boardsList}) {

    return (
        <>
            <GridView>
            {boardsList.map(board => <Board title={board.title} backgroundImage={board.backgroundImage} description={board.description} key={board.id}/>)}
            </GridView>
        </>
    )
}
