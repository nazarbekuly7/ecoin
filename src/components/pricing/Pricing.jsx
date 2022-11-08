import { Button } from '../../GlobalStyles'
import { GiReceiveMoney, GiCutDiamond, GiCapitol } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { SubHeading } from '../../GlobalStyles';
import {
  PricingSection,
  PricingWrapper,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.styles'

export const Pricing = () => {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <SubHeading>Services</SubHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiReceiveMoney />
                </PricingCardIcon>
                <PricingCardPlan>Free</PricingCardPlan>
                <PricingCardCost>$0.00</PricingCardCost>
                <PricingCardLength>Lifetime</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Live prices</PricingCardFeature>
                  <PricingCardFeature>Historical data 13000+ crypto</PricingCardFeature>
                  <PricingCardFeature>Crypto market</PricingCardFeature>
                </PricingCardFeatures>
                <Button>Sign Up for Free</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCapitol />
                </PricingCardIcon>
                <PricingCardPlan>Premium</PricingCardPlan>
                <PricingCardCost>$29.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardLength>Everything in Free, plus:</PricingCardLength>
                  <PricingCardFeature>Portfolio</PricingCardFeature>
                  <PricingCardFeature>Ad-free ECOIN</PricingCardFeature>
                  <PricingCardFeature>Charts Analytics</PricingCardFeature>
                </PricingCardFeatures>
                <Button>Subscribe Now</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Premium+</PricingCardPlan>
                <PricingCardCost>$359.99</PricingCardCost>
                <PricingCardLength>per year</PricingCardLength>
                <PricingCardFeatures>
                <PricingCardLength>Everything in Free, plus:</PricingCardLength>
                  <PricingCardFeature>Ad-free ECOIN</PricingCardFeature>
                  <PricingCardFeature>24/7 Support</PricingCardFeature>
                  <PricingCardFeature>ECOIN Premium+ NFT</PricingCardFeature>
                </PricingCardFeatures>
                <Button>Subscribe Now</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  )
}
