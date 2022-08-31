import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from "./styles";
import { MapPin, ShoppingCart } from 'phosphor-react'
import coffeeLogo from '../../assets/coffeeLogo.svg'
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={coffeeLogo} />
        </NavLink>
        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={28} weight="fill" />
            <span>Vila Velha, ES</span>
          </HeaderButton>
          <NavLink to="/complete-order">
            <HeaderButton variant="yellow">
              <ShoppingCart size={28} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}