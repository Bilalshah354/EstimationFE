import React from 'react'
import OurServices from '../../Components/ResidentialEstimating/OurServices'
import StatSection from '../../Components/ResidentialEstimating/StatSection'
import Services from '../../Components/ResidentialEstimating/Services'
import WhyChooseUs from '../../Components/ResidentialEstimating/WhyChooseUs'
import Client from '../../Components/ResidentialEstimating/Client'
import CTASection from '../../Components/ResidentialEstimating/ResidentialCta'
import WorkingProcessSection from '../../Components/ResidentialEstimating/WorkingProcess'



const ResidentialEstimatingPage = () => {
  return (
    <div>
     <OurServices/>
     <StatSection/>
     <Services/>
     <WorkingProcessSection/>
     <WhyChooseUs/>
     <Client/>
     <CTASection/>
    </div>
  )
}

export default ResidentialEstimatingPage
