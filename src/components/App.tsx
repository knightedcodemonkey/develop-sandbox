import { List } from '../components/list.js'
import { Item } from '../components/item.js'

const items = [1, 2, 3, 'close']

const App = () => {
  return (
    <List>
      {items.map(item => {
        return <Item key={item} value={item} />
      })}
    </List>
  )
}
