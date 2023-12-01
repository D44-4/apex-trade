import React from 'react'
import img14 from '../Images/img14.png'
import img15 from '../Images/img15.png'


const Carousel = () => {
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <img src={img14} className="d-block w-100" alt="" width="90" height="600" />
                    <div className="carousel-caption d-none d-md-block text-primary">
                        <h1>Trade Forex and Commodities with financial thinking.</h1>
                        <h4>Access 40,000+ instruments – across asset classes – to trade, hedge and invest from a single account.</h4>
                        <div>
                            <button type="button" class="btn btn-primary btn-lg">Open account</button>
                            <button type="button" class="btn btn-secondary btn-lg">Login account</button>

                        </div>
                        <p>The small capital requirements in trading forex are due to the use of leverage when trading.</p>
                        <div className='d-flex align-center'>
                            <h5><i class="bi bi-tools"></i>Enhanced Tools</h5>
                            <h5><i class="bi bi-file-text-fill"></i>Trading Guides</h5>
                            <h5><i class="bi bi-lightning-fill"></i>Fast execution</h5>
                            <h5><i class="bi bi-percent"></i>0% Commission</h5>
                        </div>
                    </div>

                </div>

                <div className="carousel-item" data-bs-interval="2000">
                    <div className="carousel-caption d-none d-md-block">
                        <h1>Trade Stocks and Cryptos Seamlessly.</h1>
                        <h4>Trade Cryptocurrencies, Stock Indices, Commodities and Forex from a single account.</h4>
                        <div>
                            <button type="button" class="btn btn-primary btn-lg">Open account</button>
                            <button type="button" class="btn btn-secondary btn-lg">Login account</button>
                        </div>
                        <div className='d-flex align-center'>
                            <h5><i class="bi bi-tools"></i>Enhanced Tools</h5>
                            <h5><i class="bi bi-file-text-fill"></i>Trading Guides</h5>
                            <h5><i class="bi bi-lightning-fill"></i>Fast execution</h5>
                            <h5><i class="bi bi-percent"></i>0% Commission</h5>
                        </div>
                    </div>
                    <img src={img15} className="d-block w-100" alt="..." width="90" height="600" />

                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel