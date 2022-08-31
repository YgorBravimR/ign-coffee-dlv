import { HeaderButton, HeaderButtonsContainer, HeaderContainer, CoffeDeliveryLogo } from "./styles";
import { MapPin, ShoppingCart } from 'phosphor-react'
import coffeeLogo from '../../assets/coffeeLogo.svg'
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export function Header() {
  const { cartQuantity } = useCart()

  return (
    <HeaderContainer>
      <div className="container">
        <CoffeDeliveryLogo>
          <NavLink to="/">
            <img src={coffeeLogo} />
          </NavLink>
          <p>.bravo</p>
        </CoffeDeliveryLogo>
        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={28} weight="fill" />
            Vila Velha, ES
          </HeaderButton>
          <NavLink to="/complete-order">
            <HeaderButton variant="yellow">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={28} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}