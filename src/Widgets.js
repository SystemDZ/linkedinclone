import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>Linkedin News</h2>
                <InfoIcon />
            </div>
            {newsArticle("First is last", "Top news - 1,789 readers")}
            {newsArticle("React v18.0", "Tech - 6,384 readers")}
            {newsArticle("BTC exceeds the limits", "CryptoMarket - 789 readers")}
            {newsArticle("Amazon Q4 Reports", "Finance - 4,726 readers")}
        </div>
    )
}

export default Widgets
