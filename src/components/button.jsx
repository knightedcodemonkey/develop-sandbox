const Button = ({ text = "💩" }) => {
  const handleClick = (event) => {
    const button = event.currentTarget;
    button.classList.add('bounce');
    const handleAnimationEnd = () => {
      button.classList.remove('bounce');
      button.removeEventListener('animationend', handleAnimationEnd);
    };
    button.addEventListener('animationend', handleAnimationEnd);
  };

  return <button type="button" className="btn" onClick={handleClick}>{text}</button>
}