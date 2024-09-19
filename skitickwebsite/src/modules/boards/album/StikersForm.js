import React , {useState , useEffect, useRef }from 'react'
import "./StikersForm.css"
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { storage } from "../../../firestore/firestore"
import { StikersList } from './StikersList'
import Navbar from '../../publicComponents/navBar/Navbar'
import { getStickers, addSticker, updateSticker } from './api/StikersApi'
import Message from '../Message'

const StikersForm = () => {

    const [imageUrl, setImageUrl] = useState('');
    const [status , setStatus] = useState('');
    const [stickers, setStickers] = useState([]);
    const [isUploaded, setIsUploaded] = useState(false);
    const fileInputRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [imageName, setImageName] = useState('');
    const [editedSticker, setEditedSticker] = useState(null);
    

    const handleSave = async () => {

        const data = {
          imagePath: imageUrl,
          name: imageName,
          status: '1',
        };

        if(!imageUrl || !imageName){
          console.log('No URL entered');
          return;
        }
        try {
          if (editedSticker) {
              await updateSticker(editedSticker._id, data);
              <Message message="Sticker Edited successfully" type="success" />
          } else {
              await addSticker(data);
              setStatus('Image saved successfully');
              <Message message="Sticker Added successfully" type="success" />
          }
      } catch (error) {
          setStatus('An error occurred while saving the image');
          <Message message="Oops something happened " type="error" />
      }
  };
    

    const handleCancel = () => {
        setImageUrl('');  // Clear the image URL
        setIsUploaded(false);  // Allow the user to upload another file
        setProgress(0);
        setEditedSticker(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';  
        }
    };  


    const handleUrlChange = (e) => {
      if (!isUploaded) {
        setImageUrl(e.target.value);
      }
    };

    const handleImageNameChange = (e) => {
      setImageName(e.target.value); 
    };


    const handleEditSticker = (sticker) => {
      setImageName(sticker.name); 
      setImageUrl(sticker.imagePath); 
      setEditedSticker(sticker);
    };

      const handleFileChange = async (e) => {
        const file = e.target.files[0];
        console.log('')
        if (!file) {
          console.log('No file selected');
          return;
        }

        setIsLoading(true);
        setProgress(0);

      const storageRef = ref(storage, 'images/' + file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);
    
      // Monitor the file upload progress
      uploadTask.on('state_changed', 
        (snapshot) => {
          // Get upload progress as a percentage
          const progressValue = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progressValue); 
        }, 
        (error) => {
          console.error('Error uploading file:', error);
          <Message message="Oops something happened " type="error" />
          setIsLoading(false); // Stop loading on error
        }, 
        async () => {
          // File successfully uploaded
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          setImageUrl(downloadURL);
          setIsUploaded(true);
          setIsLoading(false); 
        }
      );
    };

    const fetchStickers = async () => {
      try {
          const data = await getStickers();
          setStickers(data);
      } catch (error) {
          console.error('Failed to fetch stickers:', error);
          <Message message="Oops something happened " type="error" />
      }
  };
  useEffect(() => {
      fetchStickers();
  }, []);


    return(
      <>
      <Navbar></Navbar>
      <form>
      <h2>Upload Stikers</h2>
      <div className='nameSticker'>
      <label>Image Name: </label>
      <input 
          type="text" 
          value={imageName} 
          onChange={handleImageNameChange}
          placeholder="Enter Name for the Image" 
          required       
        />
        </div>
      <div className='urlInp'>
      <label>Image URL or Upload: </label>
      <input 
          type="text" 
          value={imageUrl} 
          onChange={handleUrlChange}
          placeholder="Enter Image URL or Upload Image" 
          required
          readOnly={isUploaded}
          style={{
            color: isUploaded || isLoading ? '#a0a0a0' : '#000',   
            cursor: isUploaded || isLoading ? 'not-allowed' : 'text'        
          }}
        />
      </div>
      <div className='chooseImg'>
        <input 
        type="file" 
        accept="image/*" 
        onChange={handleFileChange} 
        disabled={isUploaded || isLoading}
        ref={fileInputRef}
        id="fileUpload"
        />

      {isUploaded && !isLoading &&(
        <button className='cancelBtn' onClick={handleCancel} >
          Cancel
        </button>
      )}  
      </div> 
      
      {isLoading &&(
      <div>
       <div>Loading: {progress}%</div>
      <progress value={progress} max="100"></progress>
      </div>
    )}
    

    {imageUrl && !isLoading && (
        <div className='showImg'>
          <img src={imageUrl} alt="Uploaded"/>
        </div>
      )}
      
      {editedSticker ? (
        <div>
        <button onClick={handleSave}>Save Changes</button>
        <button> Cancel Changes</button>
        </div>
      ):(
        <button  style= {{ width:'100%' }}onClick={handleSave}>Save</button>
      )}
    
      </form>
      {stickers.length === 0 ? (
        <p className='noStikers'>No stickers available.</p>
      ) : (
        <StikersList stickers={stickers} onEdit={handleEditSticker}  />
      )}
      </>
    );
}


export default StikersForm;