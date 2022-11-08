import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CoinItem } from './CoinItem'
import { Container, SubHeading } from '../../GlobalStyles'
import { Coin } from '../../pages/coin/Coin'
import { 
    CoinContainer,
    SearchWrapper,
    SearchBtn,
    SearchIcon,
    SearchInput,
    HeaderContainer, 
    Text
} from './Coins.styles'

export const Coins = () => {
    const [coins, setCoins] = useState([]);

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false';

    useEffect(() => {
        axios.get(url).then((res) => {
          setCoins(res.data)
        }).catch((error) => console.log(error));
    }, [coins])
    
  return (
    <Container>
        <CoinContainer>
            <SubHeading>Search</SubHeading>
            <SearchWrapper>
                <SearchInput placeholder="Search..." type="text" />
                <SearchBtn>
                    <SearchIcon />
                </SearchBtn>
            </SearchWrapper>
            <HeaderContainer>
                <Text>#</Text>
                <Text marginLeft>Coin</Text>
                <Text marginLeft>Price</Text>
                <Text marginLeft>24h</Text>
                <Text>Volume</Text>
                <Text>Mkt Cap</Text>
            </HeaderContainer>
            {coins.map(coins => {
                return (
                    <Link to={`/coin/${coins.id}`} element={<Coin />}>
                        <CoinItem coins={coins} key={coins.id} />
                    </Link>
                );
            })}
        </CoinContainer>
    </Container>
  )
}
