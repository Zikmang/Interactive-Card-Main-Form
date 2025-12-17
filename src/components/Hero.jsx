import cardLogo from '../assets/images/card-logo.svg'


function Hero({cardNo, userName, month, year, cvc}) {
    return(
        <div className='card-display-section'>
            <div className="gradient-bg"></div>

            <div className="card-front">
                <img src={cardLogo} alt="" />
                <span className='card-no'>{cardNo || "0000 0000 0000 0000"}</span>
                <div className='bottom-card'>
                    <h1 className='card-name'>{userName || "Jane Appleseed"}</h1>
                    <div><span className='month'>{month || "00"}</span>/<span className='year'>{year || "00"}</span></div>
                </div>
            </div>

            <div className="card-back">
                <span>{cvc || "000"}</span>
            </div>
        </div>
    )
}

export default Hero;