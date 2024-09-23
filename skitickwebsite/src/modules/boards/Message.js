import { useState ,useEffect} from 'react';
import './Message.css'; 

// A component to display feedback messages
function Message({ message, type }) {
    const [show, setShow] = useState(true);
    const defaultDuration = 10000;

    useEffect(() => {
        // Set a timer to hide the message after the defaultDuration
        const timer = setTimeout(() => {
            setShow(false);
        }, defaultDuration);

        // Cleanup the timer when the component unmounts or updates
        return () => clearTimeout(timer);
    }, []);

    if (!show) return null;

    return (
        <div className={`message ${type}`}>
            {message}
        </div>
    );
}



export default Message;