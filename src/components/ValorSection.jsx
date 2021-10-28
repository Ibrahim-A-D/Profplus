import React from 'react'
import Headline from './Headline'
import ValorCardSection from './ValorCardSection'
import "./ValorSection.css"

function ValorSection() {
    return (
        <div className="valor__section">
            <Headline fElement="Comment ça" sElement="Marche ?"/>
            <ValorCardSection/>
        </div>
    )
}

export default ValorSection
