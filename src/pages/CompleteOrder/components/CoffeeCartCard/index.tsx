import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import { CoffeeCartCardContainer, ActionsContainer, RemoveButton } from "./styles";
import { Trash } from 'phosphor-react'
import { CartItem } from "../../../../contexts/CartContext";
import { formatMoney } from "../../../../utils/FormatMoney";
import { useCart } from "../../../../hooks/useCart";

interface CoffeeCartCardProps {
  coffee: CartItem;
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  const { ChangeCartItemQuantity, RemoveCartItem } = useCart()

  function handleIncrease() {
    ChangeCartItemQuantity(coffee.id, 'increase')
  }

  function handleDecrease() {
    ChangeCartItemQuantity(coffee.id, 'decrease')
  }

  function handleRemove() {
    RemoveCartItem(coffee.id)
  }

  const coffeeTotal = coffee.price * coffee.quantity;

  const formattedPrice = formatMoney(coffeeTotal)

  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={`/coffees/${coffee.photo}`} />
        <div>
          <RegularText color="subtitle">{coffee.name}</RegularText>
          <ActionsContainer>
            <QuantityInput
              size="small"
              quantity={coffee.quantity}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />
            <RemoveButton onClick={handleRemove}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
      <p>R$ {formattedPrice}</p>
    </CoffeeCartCardContainer>
  )
}