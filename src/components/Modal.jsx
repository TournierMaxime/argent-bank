import React from "react"

const Modal = ({ isOpen, children }) => {
  if (!isOpen) return null

  return (
    <div className="modal">
      <div className="modal-content">{children}</div>
    </div>
  )
}

export default Modal
