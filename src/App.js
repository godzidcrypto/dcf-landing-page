import './App.css';

import { useState, useEffect } from 'react'
import { Tweet } from 'react-twitter-widgets'

function App() {

  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  window.addEventListener('load', (event) => {
    const el = document.getElementById('loading');
    console.log(el)
    el.style.display = "none";
  });

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
    }

  }, [])

  const partners = [
    {
      img: "/mmcc.gif",
      site: "https://flip.meerkatmillionaires.club/",
    },
    {
      img: "/degendex.png",
      site: "https://flip.degendex.io/",
    },
    {
      img: "/dogecapital.png",
      site: "https://flip.thedogecapital.com/",
    },
    {
      img: "/solslugs.png",
      site: "https://flip.solslugs.com/",
    },
    {
      img: "/boryoku.gif",
      site: "https://tajfeet.io/",
    },
    {
      img: "/solchicks.png",
      site: "https://flip.solchicks.io/",
    },
    {
      img: "/nftradar.png",
      site: "https://flip.solnftradar.com/",
    },
  ]

  const testimonials = [
    "1475191919840006157",
    "1474990901902544900",
    "1478538876352270337",
    "1478439766408499205",
    "1478400569740042242",
    "1478417888415465483",
    "1478232998147354627",
    "1477085631058567173",
    "1476984398037733379",
    "1476754061852839936",
    "1478559125147639808",
  ]

  return (
    <div className="App">
      <nav>
        <div className="nav-responsive">
          <a href="/">
            <div>
              <img src="/dcf.png" className="App-logo" alt="logo" />
              <p>Degen Coin Flip</p>
            </div>
          </a>
          <div className="nav-burger" onClick={() => setToggleMenu(!toggleMenu)}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        {(toggleMenu || screenWidth > 990) && (
          <div className="nav-links">
            <a href="#about" className="nav-link nav-item" onClick={() => setToggleMenu(!toggleMenu)}>About Us</a>
            <a href="#testimonials" className="nav-link nav-item" onClick={() => setToggleMenu(!toggleMenu)}>Testimonials</a>
            <a href="#partners" className="nav-link nav-item" onClick={() => setToggleMenu(!toggleMenu)}>Partners</a>
            <a href="https://discord.gg/EbKC53qVWZ" target="_blank" className="nav-link" onClick={() => setToggleMenu(!toggleMenu)}>
              <img src="/discord.png" alt="Discord" className="nav-favicon" />
            </a>
            <a href="https://twitter.com/degencoinflip" target="_blank" className="nav-link" onClick={() => setToggleMenu(!toggleMenu)}>
              <img src="/twitter.png" alt="Twitter" className="nav-favicon" />
            </a>
            <a href="https://degencoinflip.com/" target="_blank" className="nav-link" onClick={() => setToggleMenu(!toggleMenu)}>
              <button>Double My Solana →</button>
            </a>
          </div>
        )}
      </nav>
      <div className="App-container">
        <div className="segment hero">
          <div>
            <h1 id="about">
              <span>Double your Solana</span> with a click of a button.
            </h1>
            <p>
            Degen Coin Flip is a smart contract that allows users to play Double or Nothing with their Solana tokens. Odds are 50/50 with a 3.5% fee that goes to DCF NFT holders.
            </p>
            <a href="https://degencoinflip.com/#" target="_blank">
              <img src="/cta.png" alt="" />
            </a>
          </div>
          <img src="/dcf.png" alt="" />
        </div>
        <div className="segment testimonials">
          <h1 id="testimonials">
            Hear from the <span>success stories</span> of our users.
          </h1>
          <p>From winstreaks to huge rewards in a matter of seconds.</p>
          <div className="testimonial-container">
            {testimonials.map((testimonial, index) => (
              <div className="testimonial" key={index}>
                <Tweet tweetId={testimonial} />
              </div>
            ))}
          </div>
        </div>
        <div className="segment partners">
          <h1 id="partners">
            Meet our partnered <span>NFT projects.</span>
          </h1>
          <p>We are the <b>trusted brand</b> of this meta.</p>
          <div className="partner-container">
            {partners.map((partner, index) => (
              <a href={partner.site} target="_blank" key={index}>
                <img src={partner.img} alt="" className="partner" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
