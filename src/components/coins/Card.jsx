import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi'
import { Coin } from '../../pages/coin/Coin'
import { 
  CardContainer, 
  CardHeader, 
  CardHeading, 
  CardImg,
  CardBody,
  PriceChange,
  CardLink
} from './Coins.styles'

const Card = (props) => {
  return (
    <CardContainer>
       <CardLink  to={`/Coin/${props.data.id}`} element={<Coin />}>
        <CardHeader>
          <CardImg src={props.data.image} alt="" />
          <CardHeading>{props.data.name}</CardHeading>
        </CardHeader>
        <CardBody>
          ${props.data.current_price.toLocaleString()}
        </CardBody>
        {props.data.price_change_percentage_24h < 0 ? (
          <PriceChange>
            <FiArrowDown />
            {props.data.price_change_percentage_24h.toFixed(2)}%
          </PriceChange>
        ) : (
          <PriceChange increase>
            <FiArrowUpRight />
            {props.data.price_change_percentage_24h.toFixed(2)}%
          </PriceChange>
        )}
       </CardLink>
    </CardContainer>
  )
}

export default Card;