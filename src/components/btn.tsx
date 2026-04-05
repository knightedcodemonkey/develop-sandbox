import { useState } from 'react'
import type { MouseEvent } from 'react'

// Simple SVG icon component with title for accessibility
const ClickIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon"
    role="img"
  >
    <title>Click icon</title>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 8 12 12 14 14" />
    <line x1="12" y1="12" x2="8" y2="12" />
  </svg>
)

type CounterButtonProps = {
  label: string
  active: boolean
  loading?: boolean
  disabled?: boolean
  variant?: 'primary' | 'secondary'
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

const CounterButton = ({ label, active, loading = false, disabled = false, variant = 'primary', onClick }: CounterButtonProps) => (
  <button
    type="button"
    data-active={active ? "true" : "false"}
    aria-pressed={active}
    className={`counter-button ${variant} ${active ? 'is-even' : ''} ${loading ? 'loading' : ''}`}
    onClick={onClick}
    disabled={disabled || loading}
  >
    {loading ? <div className="spinner" aria-live="polite">Loading...</div> : <ClickIcon />}
    <span className="button-text">{label}</span>
  </button>
)

export default App
