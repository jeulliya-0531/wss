import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './css/DemoModal.css';
import Placeholder from '../images/placeholder.gif'; 

function DemoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close Demo">
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <h2>Watch a Quick Demo</h2>
        
        <div className='demo-modal'>
          <img 
            src={Placeholder} 
            alt="SkinSight AI process demo"  
          />
        </div>
        <p>This demo shows you exactly how to capture an image and receive your initial assessment.</p>
      </div>
    </div>
  );
}

export default DemoModal;