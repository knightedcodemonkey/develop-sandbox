import { useState } from 'react'
import type { MouseEvent } from 'react'

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
    {label}
  </button>
)

const App = () => {
  const [count, setCount] = useState(0)
  const handleClick = (_event: MouseEvent<HTMLButtonElement>) => {
    setCount(current => current + 1)
  }

  return (
    <CounterButton
      label={`React clicks: ${count}`}
      active={count % 2 === 0}
      onClick={handleClick}
    />
  )
}
