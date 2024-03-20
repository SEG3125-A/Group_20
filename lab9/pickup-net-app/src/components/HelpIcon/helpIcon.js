import React, { useState } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

function HelpIcon({ message }) {
    const [showToast, setShowToast] = useState(false);

    const toggleShowToast = () => setShowToast(!showToast);

    return (
        <>
            <button className="info-icon-button" onClick={toggleShowToast} aria-label="Info">
                <FontAwesomeIcon icon={faInfoCircle} size="2x" />
            </button>

            <ToastContainer className="p-3" position="middle-center" containerPosition="fixed" style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Toast onClose={toggleShowToast} show={showToast} delay={5000} autohide style={{ backgroundColor: '#171717' }} className="custom-toast">
                    <Toast.Header style={{ backgroundColor: '#d0fd1b', color: '#000000'}}>
                        <strong className="me-auto" style={{ color: '#000000'}}>Website Info</strong>
                    </Toast.Header>
                    <Toast.Body style={{ color: '#f8f9fa', padding: '20px' }}>{message}</Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    );
}

export default HelpIcon;
