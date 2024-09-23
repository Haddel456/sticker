
// src/api/stickersApi.js

const BASE_URL = 'https://skitick-app-935033534367.me-west1.run.app/api/stickers';

// Fetch all stickers
export const getStickers = async () => {
    try {
        const response = await fetch(`${BASE_URL}/stickers`);
        if (!response.ok) {
            throw new Error('Failed to fetch stickers');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching stickers:', error);
        throw error;
    }
};

// Add a new sticker
export const addSticker = async (data) => {
    try {
        const response = await fetch(`https://skitick-app-935033534367.me-west1.run.app/api/stickers/insert`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error('Failed to save image');
        }
        return response.json();
    } catch (error) {
            throw error;
        
    }
};

// Update an existing sticker
export const updateSticker = async (stickerId, data) => {
    try {
        const response = await fetch(`${BASE_URL}/update/${stickerId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error('Failed to update sticker');
        }
        return response.json();
    } catch (error) {
        console.error('Error updating sticker:', error);
        throw error;
    }
};


export const DeleteSticker = async (stickerId) => {
  try {
      const response = await fetch(`${BASE_URL}/delete-by-id/${stickerId}`, {
          method: 'Delete',
          headers: {
              'Content-Type': 'application/json',
          },
      });
      if (!response.ok) {
          throw new Error('Failed to Delete sticker');
      }
      return response.json();
  } catch (error) {
      console.error('Error Deleting  sticker:', error);
      throw error;
  }
};