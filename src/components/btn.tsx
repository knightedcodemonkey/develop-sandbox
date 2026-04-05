import { useState } from 'react'
import type { MouseEvent } from 'react'

const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="20"
    height="20"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
)

type CounterButtonProps = {
  label: string
  active: boolean
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

const CounterButton = ({ label, active, onClick }: CounterButtonProps) => (
  <button
    type="button"
    data-active={active ? "true" : "false"}
    className={active ? "counter-button is-even" : "counter-button"}
    onClick={onClick}
  >
    <span className="button-icon">
      <PlusIcon />
    </span>
    <span className="button-text">{label}</span>
  </button>
)

