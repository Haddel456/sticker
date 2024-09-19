import React, { useState } from 'react'
import "./StikersList.css"
import GridView from '../../publicComponents/gridview/GridView'
import { DeleteSticker } from './api/StikersApi'
import Message from '../Message'


 export function StikersList({stickers ,  onEdit}) {

  const [currentSticker, setCurrentSticker] = useState(stickers);
  const [state , setStatus]= useState('');

  const handleDelete = async (deletedSticker) => {
    const updatedSticker = { ...deletedSticker, status: '5' };  // Update status to 5

    try {
        // Update the sticker's status to '5' on the server
        await DeleteSticker(deletedSticker._id, updatedSticker);

        // Update current stickers in state: Filter out the sticker with status '5'
        // setCurrentSticker((currentSticker) => 
        //     currentSticker.filter(sticker => sticker._id !== deletedSticker._id)
        // );

        setStatus('Sticker deleted successfully');
        <Message message="Sticker deleted successfully " type="error" />
    } catch (error) {
        setStatus('An error occurred while deleting the sticker');
        <Message message="Oops something happened " type="error" />
    }
            setCurrentSticker((currentSticker) => 
            currentSticker.filter(sticker => sticker._id !== deletedSticker._id)
        );
};
  
  console.log(state);
  console.log(currentSticker);
  const handleEdit = (editSticker) => {
    onEdit(editSticker);
  };

    return (
        <>
        <GridView>
        {currentSticker && currentSticker.map(sticker => (
        <div className='stickerListContainer' key={sticker._id}>
          <img className='stickerImg' src={sticker.imagePath} alt={`Sticker ${sticker._id}`}  />
          <div className='imgButton'>
          <button onClick={() => handleEdit(sticker)} >Edit</button>
          <button onClick={() => handleDelete(sticker)}>Delete</button>
          </div>
        </div>
      ))}
        </GridView>
        </>
    )
}
