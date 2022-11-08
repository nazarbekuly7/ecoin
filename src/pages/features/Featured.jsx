import AutoCarousel from '../../components/carousels/AutoCarousel'
import { InfoSection } from '../../components/info-section/InfoSection'
import { Pricing } from '../../components/pricing/Pricing'
import { homeObjTwo, homeObjOne } from './Data'

export const Featured = () => {
  return (
    <>
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
        <AutoCarousel />
        <Pricing />
    </>
  )
}
