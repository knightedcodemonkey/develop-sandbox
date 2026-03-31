type CounterButtonProps = {
  label: string
  onClick: (event: MouseEvent) => void
}

const CounterButton = ({ label = 'foobarlabel', onClick }: CounterButtonProps) => (
  <button class="counter-button" type="button" onClick={onClick}>
    {label}
  </button>
)
