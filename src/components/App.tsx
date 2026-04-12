import { ItemWrap } from './module.js'
import '../styles/app.css'

const ItemList = () => {
  const items = Array.from({ length: 200 }, (_, i) => `Item ${i + 1}`);

  return (
    <div>
      <h2>List of 200 Items</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <ItemWrap>{item}</ItemWrap>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
