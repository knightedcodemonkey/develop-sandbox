import '../styles/message.css'
import type { ReactNode } from 'react'

export const Message = ({ children }: { children: ReactNode }) => <p className="msg">{children}</p>
