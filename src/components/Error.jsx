import React from 'react';

const Error = () => {
    return (
        <div className='bg-dark' >
        <div className="container d-flex justify-content-center align-items-center bg-dark text-light" style={{ height: '100vh' }}>
            <div className="alert alert-danger" role="alert">
                <h4 className="alert-heading">Page Not Available</h4>
                <p>The page you are looking for is currently unavailable.</p>
                <hr />
                <p className="mb-0">Please check the URL or try again later.</p>
            </div>
        </div>
        </div>
    );
};

export default Error;
