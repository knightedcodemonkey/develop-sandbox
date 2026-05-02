import { createPortal } from 'react-dom'

export const Notification = ({ children }) => {
  return createPortal(
    <div className="notification">{children}</div>,
    document.body
  )
}
