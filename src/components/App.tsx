import { useState } from 'react'
import type { MouseEvent } from 'react'

type CounterButtonProps = {
  label: string
  active: boolean
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

const CounterButton = ({ label = 'default', active, onClick }: CounterButtonProps) => (
  <button
    type="button"
    data-active={active ? "true" : "false"}
    className={active ? "counter-button is-even" : "counter-button"}
    onClick={onClick}
  >
    {label}
  </button>
)

