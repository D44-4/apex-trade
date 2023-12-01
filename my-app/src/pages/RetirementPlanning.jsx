import React from 'react';
import img1 from '../Images/img1.webp';
import img2 from '../Images/img2.jpg';
import img3 from '../Images/img3.jpg';

export default function RetirementPlanning() {
  return (
    <div className='RetirementPlanning'>
      <h1>Save for your retirement.
        Invest in your future</h1>
      <p>Help strengthen your retirement savings by investing in high-quality real estate assets.</p>
      <h2>Retirement Planning</h2>
      <p>
      A portfolio built to help preserve and grow your retirement savings. If you're still years away from your retirement, investing in long-term assets like real estate may be a smart choice. This asset class can provide unique stability and insulation from market fluctuations, allowing you to help make the most of your retirement savings over the long term. Our portfolios are invested across high-quality real estate assets with the goal of delivering consistently strong long-term results.
      </p>
      <h3>OUR APPROACH</h3>
      <p>
      Diversification for your tax-advantaged account. When saving for retirement, there are a number of accounts that can provide tax benefits to help you keep more of what you earn for your retirement. These accounts may allow you to defer taxes or let your savings grow tax-free, both of which can help boost your after-tax profits. We've created a simple way for you to diversify your retirement portfolio by investing in private real estate through a tax-advantaged retirement account, allowing you to reduce risk and improve stability.
      </p>
      <h3>OUR PLATFORM</h3>
      <p>Investing for your retirement should be simple.</p>
      <p>With TheFipTrades, it's easy to open an IRA and start investing. You can choose to roll over an existing retirement account (IRA, 401k, or another employer-sponsored plan) or make a contribution to open a new account and start investing today. Funding your account is typically completed directly through our online platform without any complicated paperwork.</p>
      <h2>Retirement Plan</h2>
      <img src={img1} alt="" width="45%"/>
      <h3>INDIVIDUAL PLAN</h3>
      <h5>Min Deposit: $150k</h5>
      <h5>ROI: 10%</h5>
      <img src={img2} alt="" width="45%"/>
      <h3>COUPLE/JOINT PLAN</h3>
      <h5>Min Deposit: $250k</h5>
      <h5>ROI: 20%</h5>
      <img src={img3} alt="" width="45%"/>
      <h3>FAMILY PLAN</h3>
      <h5>Min Deposit: $500k</h5>
      <h5>ROI: 30%</h5>
      <button type="button" class="btn btn-primary">Get Started</button>
    </div>
  );
}