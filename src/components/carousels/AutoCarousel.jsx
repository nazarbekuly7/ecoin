import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi'
import { Container } from '../../GlobalStyles'
import { Coin } from '../../pages/coin/Coin'
import { 
  CarouselRow, 
  CarouselImg, 
  CarouselHeader 
} from './Carousel.styles'
import { 
  PriceChange,
  CardBody, 
  CardLink, 
  CardHeading,
} from '../coins/Coins.styles'

const AutoCarousel = () => {
    const [data, setData] = useState(null)

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false';
  
    useEffect(() => {
       axios.get(url)
        .then((res) => {
            setData(res.data) 
        })
        .catch((error) => console.log(error));
  
    }, [data]);
    console.log(data)
    if (!data) return null;

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      speed: 10000,
      autoplaySpeed: 1000,
      cssEase: "linear",
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

  return (
    <Slider {...settings}>
      {data.map(data => {
        return (
          <Container>
            <CardLink  to={`/Coin/${data.id}`} element={<Coin />}>
              <CarouselRow>
                <CarouselHeader>
                  <CarouselImg src={data.image} alt="" />
                  <CardHeading>{data.name}</CardHeading>
                </CarouselHeader>
                ${data.current_price.toLocaleString()}
                <CardBody>
                  {data.price_change_percentage_24h < 0 ? (
                  <PriceChange>
                    <FiArrowDown />
                    {data.price_change_percentage_24h.toFixed(2)}%
                  </PriceChange>
                  ) : (
                  <PriceChange increase>
                    <FiArrowUpRight />
                    {data.price_change_percentage_24h.toFixed(2)}%
                  </PriceChange>
                  )}
                </CardBody>
              </CarouselRow>
            </CardLink>
          </Container>
        )
      })}
    </Slider>
  )
}

export default AutoCarousel;
