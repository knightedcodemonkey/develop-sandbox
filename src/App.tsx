import './styles/styles.css'
import { Boop } from './components/boop.js'
import { Beep } from './components/beep.js'

const Bop = () => <p>bop bop</p>

function App () {
  return (
    <>
      <Boop />
      <Beep />
      <Bop />
    </>
  )
}
