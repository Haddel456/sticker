import React, { useState } from 'react'
import "./StikersList.css"
import GridView from '../../publicComponents/gridview/GridView'
import { DeleteSticker } from './api/StikersApi'
import Message from '../Message'


 export function StikersList({stickers ,  onEdit}) {

  const [currentSticker, setCurrentSticker] = useState(stickers);
  const [status , setStatus]= useState(null);

 

  const handleDelete = async (deletedSticker) => {
    // const updatedSticker = { ...deletedSticker, status: '5' };  // Update status to 5

    try {
        // Update the sticker's status to '5' on the server
        await DeleteSticker(deletedSticker._id);
         setCurrentSticker(currentSticker => 
          currentSticker.filter(sticker => sticker._id !== deletedSticker._id)
        );
        setStatus({ message: 'Sticker edited successfully', type: 'success' });
        
    } catch (error) {
      setStatus({ message: 'An error occurred while editing the sticker', type: 'error' });
    }
};
  

  const handleEdit = (editSticker) => {
    onEdit(editSticker);
  };

    return (
        <>
        {status && <Message message={status.message} type={status.type} />}
        <GridView>
        {currentSticker && currentSticker
        .filter(sticker => sticker.status !== '5')
        .map(sticker => (
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
