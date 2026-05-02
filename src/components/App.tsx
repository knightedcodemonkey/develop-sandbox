import { List, Item } from './list.js'

const items = Array.from({length: 100}, (_, i) => `item ${++i}`)

const App = () => {
  return (
    <List>
      {items.map(item => <Item item={item} />)}
    </List>
  )
}
