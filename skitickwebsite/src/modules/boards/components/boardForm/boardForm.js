import React, { useState } from 'react';
import "./boardForm.css"
export function BoardForm({onSubmit}) {
    // Define state for form inputs
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        backgroundImage: '',
        numOfQuestions: '',
        level: '',
        type: '',
        minScore: '',
        numOfTries: '',
        status: '',
        index: '',
        numberOfStickers: ''
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Call the prop function to handle form submission
        if (onSubmit) {
            onSubmit(formData);
        }
        // Reset the form
        setFormData({
            title: '',
            description: '',
            backgroundImage: '',
            numOfQuestions: '',
            level: '',
            type: '',
            minScore: '',
            numOfTries: '',
            status: '',
            index: '',
            numberOfStickers: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Board Form</h1>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="backgroundImage">Background Image URL:</label>
                <input
                    type="text"
                    id="backgroundImage"
                    name="backgroundImage"
                    value={formData.backgroundImage}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="numOfQuestions">Number of Questions:</label>
                <input
                    type="number"
                    id="numOfQuestions"
                    name="numOfQuestions"
                    value={formData.numOfQuestions}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="level">Level:</label>
                <input
                    type="number"
                    id="level"
                    name="level"
                    value={formData.level}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="type">Type:</label>
                <input
                    type="text"
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="minScore">Minimum Score:</label>
                <input
                    type="number"
                    id="minScore"
                    name="minScore"
                    value={formData.minScore}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="numOfTries">Number of Tries:</label>
                <input
                    type="number"
                    id="numOfTries"
                    name="numOfTries"
                    value={formData.numOfTries}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="status">Status:</label>
                <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>
            </div>
            <div>
                <label htmlFor="index">Index:</label>
                <input
                    type="number"
                    id="index"
                    name="index"
                    value={formData.index}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="numberOfStickers">Number of Stickers:</label>
                <input
                    type="number"
                    id="numberOfStickers"
                    name="numberOfStickers"
                    value={formData.numberOfStickers}
                    onChange={handleChange}
                />
            </div>
            <button type="action">Create Album</button>
            <button type="action">Add Questions List</button>
            <button type="submit">Submit</button>
        </form>
    );
}