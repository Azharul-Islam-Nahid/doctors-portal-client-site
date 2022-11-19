import React from 'react';

const ConfirmationModal = ({ title, message, modalData, closeModal, actionButtonName, modalAction }) => {
    return (
        <div>
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => modalAction(modalData)} htmlFor="confirmation-modal" className="btn">{actionButtonName}</label>
                        <button onClick={() => closeModal()} className="btn btn-outline mr-2">cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;