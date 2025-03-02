import { useState, useEffect } from 'react';

const Alert = ({ message, type, duration = 5000 }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration]);

    if (!visible) return null;

    return (
        <div role="alert" className={`alert alert-${type} fixed top-4 right-4 z-50 shadow-lg`}>
            <span>humanize({message})</span>
        </div>
    );
};

export default Alert;