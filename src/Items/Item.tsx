import Button from '@material-ui/core/Button'

import { CartItemType } from '../backend/data'
import { Wrapper } from '../App.styles'

type Props = {
  item: CartItemType
  handleAddToCart: (clickedItem: CartItemType) => void
}

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.image} />
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h1>{item.price}</h1>
    </div>
    <Button onClick={() => handleAddToCart(item)}></Button>
  </Wrapper>
)
export default Item
