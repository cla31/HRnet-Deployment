import React from 'react'
import '../style/components/modal.css'
import { useState } from 'react'

const Modal = ({
  messageModal,
  functionButton,
  messageBouton,
  image,
  ContentModalStyle,
  buttonStyle,
  ContainerModalStyle,
  ImageModalStyle,
}) => {
  const [showModal, setShowModal] = useState(true)
  const handleClose = () => {
    setShowModal(false)
  }
  return (
    showModal && (
      <div className="container-modal" style={ContainerModalStyle}>
        <div className="background-modal"></div>
        <div className="modal" style={ContentModalStyle}>
          <div className="modal-cross-container">
            <div className="modal-cross" onClick={handleClose}>
              X
            </div>
          </div>
          <div className="message-modal-button">
            <div>
              <img
                className="image-modal"
                src={image}
                alt="icone validation"
                style={ImageModalStyle}
              />
            </div>
            <h1 className="message-modal">{messageModal}</h1>
            <button
              className="button-modal"
              onClick={functionButton}
              style={buttonStyle}
            >
              {messageBouton}
            </button>
          </div>
        </div>
      </div>
    )
  )
}
export default Modal
