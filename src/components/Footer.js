import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='bulb'>
            <div className='pic'>
                <img src="bulb.png" alt="" />
                <h1>Knowledge Grow Your Influence</h1>
            </div>
            <div className='footer-text'>
                <p>Knowledge is a dynamic and ever-expanding entity. The world is constantly evolving, and embracing a mindset of continuous learning is essential. Whether through formal education, self-study, or experiential learning, the pursuit of knowledge is a lifelong journey.</p>
                <a href="/">Get Started</a>
            </div>
        </div>
        <div className='newsletter'>
            <div className='news-left'>
                <h4>Subscribe</h4>
                <h1>Subscribe To Get Latest <br />Update From Us</h1>
                <span className='curve'><img src="curve.png" alt="" /></span>
            </div>
            <div className='news-right'>
                <p>Contact Us and be a part of environment protection with Sustainability.Come let us fight for our future genertions</p>
                <form action="">
                    <input type="email" name='email' />
                    <button>Subscribe</button>
                </form>
            </div>
        </div>
        <div className='footer-menu'>
            <h1>Echo Mind</h1>
            <ul className='footer-inner-nav'>
                <li><a href="#hub">Hub</a></li>
                <li><a href="#mint">Mint</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#socials">Socials</a></li>
            </ul>
        </div>
        <hr />
        <div>
            <p className='text-center'>&#169; Copyright 2023-2028 | All Right Reserved |</p>
        </div>
    </div>
  )
}

export default Footer