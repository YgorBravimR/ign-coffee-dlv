import { RegularText, TitleText } from "../../components/Typography";
import { OrderConfirmedContainer, OrderDetailsContent } from "./styles";
import confirmedOrderImage from '../../assets/confirmedOrder.svg'
import { InfoWithIcon } from "../../components/InfoWithIcon";
import { MapPin, CurrencyDollar, Clock } from 'phosphor-react'
import { useTheme } from "styled-components";

export function OrderConfirmed() {
  const { colors } = useTheme()

  return (
    <OrderConfirmedContainer className="container">
      <div>
        <TitleText size="l">Uhu!! Pedido Confirmado!</TitleText>
        <RegularText size="l" color="subtitle">Agora é só aguardar que logo o café chegará até você</RegularText>
      </div>
      <section>
        <OrderDetailsContent>
          <InfoWithIcon
            icon={<MapPin weight="fill" />}
            iconBg={colors["brand-purple"]}
            text={
              <RegularText>
                Entrega em <strong>Rua Joãozinho da Silva, 481</strong>
                <br /> Soteco - Vila Velha, ES
              </RegularText>
            }
          />
          <InfoWithIcon
            icon={<Clock weight="fill" />}
            iconBg={colors["brand-yellow"]}
            text={
              <RegularText>
                Previsão de entrega
                <br /> <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />
          <InfoWithIcon
            icon={<CurrencyDollar weight="fill" />}
            iconBg={colors["brand-yellow-dark"]}
            text={
              <RegularText>
                Pagamento na entrega
                <br /> <strong>Cartão de Crédito</strong>
              </RegularText>
            }
          />
        </OrderDetailsContent>
        <img src={confirmedOrderImage} />
      </section>
    </OrderConfirmedContainer >
  )
}