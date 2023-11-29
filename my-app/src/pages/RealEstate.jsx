import React from 'react';
import img10 from '../Images/img10.jpg';
import img11 from '../Images/img11.png';

export default function RealEstate() {
  return (
    <div className='RealEstate'>
      <div className='one_one' >
        <div className='one'>
          <h1>Welcome to the future of real estate investing</h1>
          <p>Simple, low-cost, and more powerful than ever.</p>
        </div>
        <img src={img10} alt="" width="40%" />
      </div>
      <h1>Real Estate</h1>
      <h3>Your portfolio is powered by high-quality, resilient assets</h3>
      <img src={img11} alt="" width="45%" />
      <p>Your portfolio is powered by high-quality, resilient assets. Our assets drive your returns. We pair our extensive network and expertise with the collective buying power of our investor community to acquire high-quality assets ranging from debt to equity, commercial to residential, and more.</p>
      <p>We follow a "value investing" strategy of acquiring assets for less than what we believe is their intrinsic value, and typically less than their replacement cost. Our team then works to increase the value of each asset over time through hands-on management and in partnership with local operators.</p>
      <p>We've specifically built the TheFipTrades portfolio with the intention of being able to withstand prolonged periods of economic distress. Nothing can be guaranteed, but because of our conservative approach and extensive underwriting processes, we believe the TheFipTrades portfolio is, from a risk-adjusted-return standpoint, well positioned to be able to sustain a severe economic downturn.</p>
    </div>
  );
}