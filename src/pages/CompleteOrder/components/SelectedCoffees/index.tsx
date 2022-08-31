import { TitleText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { ConfirmationSection } from "./ConfirmationSection";
import { DetailsContainer, SelectedCoffessContainer } from "./styles";


export function SelectedCoffees() {
  const { cartItems } = useCart()


  return (
    <SelectedCoffessContainer>
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>
      <DetailsContainer>
        {cartItems.map((item) => (
          <CoffeeCartCard key={item.id} coffee={item} />
        ))}

        <ConfirmationSection />
      </DetailsContainer>
    </SelectedCoffessContainer>
  )
}