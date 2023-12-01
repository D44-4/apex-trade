import React from 'react';
import './../App.css';
import Carousel from '../components/Carousel';


export default function Home() {
  return (
    <div className='Home'>
      <Carousel />
      <div className='d-flex'>
        <div className='w-30'>
          <h2>Trading products</h2>
          <p>Choose from 6 asset classes and get access to 500+ trading instruments</p>
        </div>
        <div>
        <div className='d-flex'>
        <i class="bi bi-currency-exchange"></i>
        <i class="bi bi-graph-up"></i>
        <i class="bi bi-currency-bitcoin"></i>
        <i class="bi bi-droplet-fill text-danger"></i>
        <i class="bi bi-file-earmark-richtext-fill"></i>
        <i class="bi bi-boxes text-danger"></i>
       </div>
        <div className='d-flex'>
          <h4>Forex</h4>
        <h4>Indices</h4>
       <h4>Bitcoin</h4>
        <h4>Energy</h4>
       <h4>Stocks</h4>
       <h4>Commodities</h4>
        </div>
        </div>
        
      </div>
      <h1>Putting our investors first is Key</h1>
      <h5>We are committed to providing all our investors with exceptional service while offering our team the best training.</h5>
      <p>TheFipTrades is an International online broker that has been actively operating in the Crypto & Stocks Trading trading markets. With our advanced, web-based trading platform, you can trade on the largest lists of assets in the industry. From Currency pairs, and Commodities to stocks and indices, we have it all. Keep your trading costs down with competitive spreads, commissions and low margins. View spreads on our most popular cash instruments.</p>
      <h2>Experience more than Trading.</h2>
      <h5>We follow a very strict and disciplined process for investment, as we are aware, that we are dealing with our client’s funds. Investment means a lot to us, and we respect the trust of our clients.</h5>
      <div className='d-flex'>
        <div>
          <h2>Economic</h2>
          <p>Stay ahead of the markets with world-leading market analysis. Keep your trading costs down with competitive spreads, commissions and low margins.</p>
          </div>
        <div>
          <h2>Technical</h2>
          <p>Real-time and detailed data monitoring on trades, stocks and binary with clear graphical demonstration. Additional reference for users with pool data.</p>
          </div>
      </div>
      <div>
        <h2>ACCESS TO OUR FINANCIAL MARKETS</h2>
        <p>Bitcoin is the first decentralized digital money. This cryptocurrency was created in 2009. It was originally mentioned on October 31, 2008 when a person who calls himself Satoshi Nakamoto and who is considered to be a founder of Bitcoin published an article under the title Bitcoin: A Peer-to-Peer Electronic Cash System. Bitcoin gave a start to the whole new era of cryptocurrencies. Subsequently, the first block and the first 50 bitcoins were generated. In 2016 and 2017, trading bitcoins has been growing quite popular with retail traders and major investors. The leading trading floors such as CME Group and CBOE Global Markets have already introduced trading futures on bitcoins. .</p>
      </div>
      <div>
        <h2>Why TheFipTrades is a trusted Crypto & Stocks Trading broker</h2>
        <h5>While existing solutions offer to solve just one problem at a time, our team is up to build a secure, useful, & easy-to-use platform.</h5>
      </div>
      <div className='d-flex'>
        <div>
          <h4>200x leverage trading</h4>
          <p>We have a ultra fast execution, tight spreads, and advanced platform features, we make to sure increase profitability.</p>
        </div>
        <div>
          <h4>Low Fees</h4>
          <p>Adoption of PPS+ and PPLNS payment methods. Transaction fees will be paid for both methods. A setup fee so low as to guarantee safety and daily profits.</p>
        </div>
        <div>
          <h4>Fully Transparent</h4>
          <p>Real-time and detailed data monitoring on trades, stocks and binary with clear graphical demonstration. Additional reference for users with pool data.</p>
        </div>
      </div>
      <div className='d-flex'>
        <div>
          <h4>Committed to forex education</h4>
            <p>Our round-the-clock E-mail, Telegram and Facebook support team will respond to you at any time, any day. Even on weekends and holidays!</p>
          </div>
        <div>
          <h4>Competitve commissions</h4>
            <p>Reasonable fees for takers and makers, special conditions for high-volume traders, and strong offers for market makers.</p>
          </div>
      </div>
    <div>
        <h2 className='text-center'>Account Types</h2>
        <div className='d-flex'>
          <div>
            <h3>STARTER</h3>
            <p>✓ Trading Instruments: 36 currency pairs, Metals, Cryptocurrencies</p>
            <p>✓ Minimum deposit: 10,000 USD / 10,000 EUR</p>
            <p>✓ Spread: Floating from 1.3 pips</p>
            <p>✓ Maximum leverage: 24,999</p>
            <p>✓ Return on Investment: 187%</p>
            <p>✓ Deposit bonuses: All offers</p>
            <p>✓ Loyalty bonuses: All offers</p>
            <button type="button" class="btn btn-primary">Choose Plan</button>
          </div>
          <div>
            <h3>SILVER</h3>
            <p>✓ Trading Instruments: 36 currency pairs, Metals, CFD on US stocks, CFD on Indices, CFD on Oil, Cryptocurrencies</p>
            <p>✓ Minimum deposit: 25,000 USD / 25,000 EUR</p>
            <p>✓ Spread: Floating from 1.3 pips</p>
            <p>✓ Maximum : 49,999</p>
            <p>✓ Return on Investment: 216%</p>
            <p>✓ Deposit bonuses: All offers</p>
            <p>✓ Loyalty bonuses: All offers</p>
            <button type="button" class="btn btn-primary">Choose Plan</button>
          </div>
          <div>
            <h3>GOLD</h3>
            <p>✓ Trading Instruments: 36 currency pairs, Metals, CFD on US stocks, CFD on Indices, CFD on Oil, Cryptocurrencies</p>
            <p>✓ Minimum deposit: 50,000 USD / 50,000 EUR</p>
            <p>✓ Spread: Floating from 0 pips</p>
            <p>✓ Maximum leverage: 99,999</p>
            <p>✓ Return on Investment: 246%</p>
            <p>✓ Deposit bonuses: All offers</p>
            <p>✓ Loyalty bonuses: All offers</p>
            <button type="button" class="btn btn-primary">Choose Plan</button>
          </div>
        </div>
        <div>
          <h3>PLATINUM</h3>
          <p>✓ Trading Instruments: More than 12,000: Indices, Real stocks, CFD on stocks, Forex and ETF, CFDs on Oil, CFDs on Metals, CFDs on Brazil Stocks, Cryptocurrencies</p>
          <p>✓ Minimum deposit: 150,000 USD / 150,000 EUR</p>
          <p>✓ Spread: Floating from 0.01 USD</p>
          <p>✓ Maximum leverage: 1,000,000</p>
          <p>✓ Return on Investment: 301%</p>
          <p>✓ Deposit bonuses: All offers</p>
          <p>✓ Loyalty bonuses: All offers</p>
          <button type="button" class="btn btn-primary">Choose Plan</button>
        </div>
        </div>
        <div className='text-center'>
          <h5>Start trading with TheFipTrades</h5>
          <h3>Fast account opening in 3 simple steps</h3>
          <div className='d-flex'> 
            <p>Register</p>
            <p>Fund</p>
            <p>Trade</p>
          </div>
          <div className='d-flex'>
            <p>Create an account today on our trading platform.</p>
            <p>Fund your account using a wide range of funding methods.</p>
            <p>Access 180+ instruments across all asset classes inside the platform.</p>
          </div>
          <button type="button" class="btn btn-primary">Setup your trading account</button>
        </div>
        <div className='d-flex'>
          <h2>Connect to global capital markets</h2>
          <p>Trade Binary Options with the best platform, on a wide selection of assets, with high payouts, lightning-fast order execution and get personal customer support around the clock, fast withdrawals and the expertise of industry leaders.</p>
        </div>
      
    </div>
  );
}