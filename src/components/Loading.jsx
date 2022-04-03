import React from 'react';

const Loading = () => {
    return (
        <div className='d-flex justify-content-center mb-4 pb-4'>
            <div className="spinner-grow text-light" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;
