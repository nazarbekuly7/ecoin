import axios from 'axios'
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import DOMPurify from 'dompurify';
import { Heading, SubHeading } from '../../GlobalStyles';
import { Img } from '../../components/coins/Coins.styles';
import {
    ContentWrapper,
    Content, 
    RankBtn, 
    Info, 
    InfoHeading, 
    InfoText,
    CoinPrice, 
    StatsContainer,
    StatsRow,
    StatsText,
    About,
    Table,
    Th, Td, Tr,
} from './Coin.styles';

export const Coin = () => {
    
    const [coin, setCoin] = useState({});
    const params = useParams();

    const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

    useEffect(() => {
        axios.get(url).then((res) => {
            setCoin(res.data)
        }).catch((error) => console.log(error))
    },)

  return (
    <ContentWrapper>
        <Content>
            <RankBtn>Rank # {coin.market_cap_rank}</RankBtn>
            <Heading>{coin.name}</Heading>
        </Content>
        <Content>
            <Info>
                <InfoHeading>
                    {coin.image ? <Img src={coin.image.small} alt='alt' /> : null}
                    <InfoText>{coin.name}</InfoText>
                    {coin.symbol ? <InfoText>{coin.symbol.toUpperCase()}/USD</InfoText> : null}
                </InfoHeading>
                <CoinPrice>
                    {coin.market_data?.current_price ? <Heading>${coin.market_data.current_price.usd.toLocaleString()}</Heading> : null}
                </CoinPrice>
            </Info>
        </Content>
        <Content>
            <Table>
                <thead>
                    <Tr>
                        <Th>1h</Th>
                        <Th>24h</Th>
                        <Th>7d</Th>
                        <Th>14d</Th>
                        <Th>30d</Th>
                        <Th>1year</Th>
                    </Tr>
                </thead>
                <tbody>
                    <Tr>
                        <Td>{coin.market_data?.price_change_percentage_1h_in_currency ? <p>{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(1)}%</p> : null}</Td>
                        <Td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(1)}%</p> : null}</Td>
                        <Td>{coin.market_data?.price_change_percentage_7d_in_currency ? <p>{coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(1)}%</p> : null}</Td>
                        <Td>{coin.market_data?.price_change_percentage_14d_in_currency ? <p>{coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(1)}%</p> : null}</Td>
                        <Td>{coin.market_data?.price_change_percentage_30d_in_currency ? <p>{coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(1)}%</p> : null}</Td>
                        <Td>{coin.market_data?.price_change_percentage_1y_in_currency ? <p>{coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(1)}%</p> : null}</Td>
                    </Tr>
                </tbody>
            </Table>
        </Content>
        <Content>
            <StatsContainer>
                <StatsRow>
                    <h4>24 Hour Low</h4>
                    {coin.market_data?.low_24h ? <StatsText>${coin.market_data.low_24h.usd.toLocaleString()}</StatsText> : null}
                </StatsRow>
                <StatsRow>
                    <h4>24 Hour High</h4>
                    {coin.market_data?.high_24h ? <StatsText>${coin.market_data.high_24h.usd.toLocaleString()}</StatsText> : null}
                </StatsRow>
                <StatsRow>
                    <h4>Market Cap</h4>
                    {coin.market_data?.market_cap ? <StatsText>${coin.market_data.market_cap.usd.toLocaleString()}</StatsText> : null}
                </StatsRow>
                <StatsRow>
                    <h4>Circulating Supply</h4>
                    {coin.market_data ? <StatsText>${coin.market_data.circulating_supply}</StatsText> : null}
                </StatsRow>
            </StatsContainer>
        </Content>
        <Content>
            <About>
                <SubHeading>About</SubHeading>
                <p dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(coin.description ? coin.description.en : ''),
                    }}>
                </p>
            </About>
        </Content>
    </ContentWrapper>
  )
}
