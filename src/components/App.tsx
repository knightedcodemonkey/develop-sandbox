const items = ['p', 'p', 'p']
const Item = ({ val }) => <li style={{color: 'red'}}>{val}</li>
const App = () => {
  return (
    <ul>
      {items.map(item => <Item val={item} />)}
    </ul>
  )
}
