import { Pricing } from '../../components/pricing/Pricing'
import { InfoSection } from '../../components/info-section/InfoSection'
import { homeObjOne, homeObjTwo } from './Data'
import AutoCarousel from '../../components/carousels/AutoCarousel'

export const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <AutoCarousel />
      <InfoSection {...homeObjTwo} />
      <Pricing />
    </>
  )
}
