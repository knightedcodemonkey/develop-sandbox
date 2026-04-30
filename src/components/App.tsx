import '../styles/app.scss'
import { List } from '../components/list.js'
import { Item } from '../components/item.js'

const items = [1, 2, 3, 'fish']

const App = () => {
  return (
    <List>
      {items.map(item => {
        return <Item value={item} />
      })}
    </List>
  )
}
