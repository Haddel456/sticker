import { useState } from 'react';

// A component to display feedback messages
function Message({ message, type }) {
    return (
        <div className={`message ${type}`}>
            {message}
        </div>
    );
}



export default Message;