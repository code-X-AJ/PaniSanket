import React from 'react'

export default function Scroller() {
    const ScrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    };

    return <button className='fixed bottom-1 right-2' onClick={ScrollToTop}><img src="https://cdn-icons-png.flaticon.com/128/11104/11104552.png" alt="loading..." height="40px" width="40px" /></button>;
};
