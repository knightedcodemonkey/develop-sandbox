const CounterButton = ({ label = 'default', onClick }) => (
  <button class="counter-button" type="button" onClick={onClick}>
    {label}
  </button>
)
