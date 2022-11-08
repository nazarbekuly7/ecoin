import { 
  CoinRow, 
  Text, 
  ImgSymbol, 
  Img 
} from './Coins.styles'

export const CoinItem = (props) => {
  return (
    <>  
      <CoinRow>
        <Text>{props.coins.market_cap_rank}</Text>
        <ImgSymbol>
          <Img src={props.coins.image} alt="alt" />
          <Text>{props.coins.symbol.toUpperCase()}</Text>
        </ImgSymbol>
        <Text>${props.coins.current_price.toLocaleString()}</Text>
        <Text>{props.coins.price_change_percentage_24h.toFixed(2)}%</Text>
        <Text>${props.coins.total_volume.toLocaleString()}</Text>
        <Text>${props.coins.market_cap.toLocaleString()}</Text>
      </CoinRow>
    </>
  )
}
