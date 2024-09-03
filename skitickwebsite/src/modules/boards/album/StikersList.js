import React from 'react'
import "./StikersList.css"
import GridView from '../../publicComponents/gridview/GridView'


export function StikersList({StikersList}) {

    return (
        <>
        <GridView>
            {StikersList && StikersList.map(sticker => (
                <div className='stikerslistContainer' key={sticker.id} >
                    <img className='stikerImg' src={sticker.url} alt={`Sticker ${sticker.id}`} />
                </div>
               
            ))}
        </GridView>
        </>
    )
}
