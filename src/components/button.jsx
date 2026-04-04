type CounterButtonProps = {
  label?: string
  onClick?: (event: MouseEvent) => void
}

const CounterButton = ({ label = '💩', onClick }: CounterButtonProps) => {
  let count = 0
  const button = document.createElement('button')
  button.className = 'counter-button'
  button.type = 'button'
  button.textContent = `${label} 0`

  // Add bounce class on click and remove it after animation
  button.addEventListener('click', (event) => {
    count += 1
    button.textContent = `${label} ${count}`
    button.classList.add('bounce')
    setTimeout(() => button.classList.remove('bounce'), 300)
    if (onClick) onClick(event)
  })

  return button
}

