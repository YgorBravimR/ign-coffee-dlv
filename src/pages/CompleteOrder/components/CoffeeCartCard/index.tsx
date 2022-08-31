import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import { CoffeeCartCardContainer, ActionsContainer, RemoveButton } from "./styles";
import { Trash } from 'phosphor-react'

export function CoffeeCartCard() {
  return (
    <CoffeeCartCardContainer>
      <div>
        <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1662940800&Signature=CWabfd-HQ0-x-3ynDIPZI9GVqrqDRwjrpe9II1o4Nrl67HZGcJ8NqCj3DuPvcagSQsNNPG0ixWc7EhzhzgI7MHtI7-aqzsSqRByh6toAMl-AdVo~AuWmDC5GlkTVjxdRjhcCe9PhEA3ZO0SEOJYQ9thwRK1JUASR1nCK6cKnbZcJ4PA4Y6qKSQzg3PlLge3fE9gfsA0Ej4ES-Is4lULPAmsfIUMT3UYhwDJ-4oOVNpx83wDliFP9HA1C~~XuazKZL4POKpvrPxJYjDdnEjZDEqrGu1neqXAkr9cBw9MYh~0dV-9qoRHdffcUfO7BUFvv7ag4oBJOk2CcUsImR8OOmg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
        <div>
          <RegularText color="subtitle">Expresso Tradicional</RegularText>
          <ActionsContainer>
            <QuantityInput size="small" />
            <RemoveButton >
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
      <p>R$9,90</p>
    </CoffeeCartCardContainer>
  )
}