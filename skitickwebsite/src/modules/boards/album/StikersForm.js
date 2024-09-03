import React , {useState , useEffect }from 'react'
import "./StikersForm.css"
import { StikersList } from './StikersList';


const StikersForm = () => {

  const API_KEY = 'IVjDTOUmDdK6FBs33q62GNWIMndFXZA9';

    const [imageUrl, setImageUrl] = useState('');
    const [status , setStatus] = useState('');
    const [stickers, setStickers] = useState([]);

    const handleSave = async () => {
        const data = {
          imagePath: imageUrl,
        };
    
        try {
          const response = await fetch('http://192.168.241.12:3000/api/stickers/insert', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
    
          if (response.ok) {
            setStatus('Image saved successfully');
          } else {
            setStatus('Failed to save image');
          }
        } catch (error) {
          setStatus('An error occurred while saving the image');
        }
      };

    console.log(status);

    const handleUrlChange = (e) => {
        setImageUrl(e.target.value);
      };
    

      const handleFileChange = async (e) => {
        const file = e.target.files[0];
        console.log(file);
      
        if (file) {
          const formData = new FormData();
          formData.append('file', file);
          formData.append('api_key', API_KEY);
      
          try {
            const response = await fetch('https://www.imghippo.com/v1/upload', {
              method: 'POST',
              body: formData,
            });
      
            if (response.ok) {
              const data = await response.json();
              if (data && data.url) {
                setImageUrl(data.url);
                setStatus('Image saved successfully');
              }
            } else {
              console.error('Error uploading the image:', response.statusText);
              setStatus('Failed to upload image');
            }
          } catch (error) {
            console.error('Error uploading the image:', error);
            setStatus('Error uploading image');
          }
        }
      };


      const getStickers = async () => {
        try {
          const response = await fetch('http://192.168.241.12:3000/api/stickers'); 
          if (response.ok) {
            const data = await response.json();
            setStickers(data);  
          } else {
            console.error('Failed to fetch stickers');
          }
        } catch (error) {
          console.error('Error fetching stickers:', error);
        }
      };

      useEffect(() => {
        getStickers();  
      }, []);

    return(
      <>
      <form>
      <h2>Upload Stikers</h2>
      <label>Image URL or Upload: </label>
      <div className='textBton'>
      <input 
          type="text" 
          value={imageUrl} 
          onChange={handleUrlChange}
          placeholder="Enter image URL or Upload image" 
        />
        </div>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <br/>
      <button onClick={handleSave}>Save</button>
      </form>
      <StikersList stickers={stickers} />
      </>
    );
}


export default StikersForm;