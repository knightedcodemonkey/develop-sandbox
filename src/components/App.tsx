import '../klass.css'
import {B} from '../components/module.js'
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
  return <B />
}
