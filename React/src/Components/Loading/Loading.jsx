import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a delay to show the loading screen
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // Adjust the delay time as needed

        return () => clearTimeout(timer);
    }, []);

    return (
        loading ? <div><img src="https://media.itsnicethat.com/original_images/giphy-2021-gifs-and-clips-animation-itsnicethat-02.gif" alt="" /></div> : null
    );
};

export default LoadingScreen;