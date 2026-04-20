import '../styles/app.css'

type CounterButtonProps = {
  label: string
  onClick: (event: MouseEvent) => void
}

const CounterButton = ({ label, onClick }: CounterButtonProps) => (
  <button class="counter-button" type="button" onClick={onClick}>
    {label}
  </button>
)

const App = () => {
  let count = 0
  const handleClick = (event: MouseEvent) => {
    count += 1
    const button = event.currentTarget as HTMLButtonElement
    button.textContent = `Clicks: ${count}`
    button.dataset.active = count % 2 === 0 ? 'false' : 'true'
    button.classList.toggle('is-even', count % 2 === 0)
  }

  return <CounterButton label='Clicks: 0' onClick={handleClick} />
}
