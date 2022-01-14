import './App.css';

import { useState, useEffect } from 'react'
import { Tweet } from 'react-twitter-widgets'

function App() {

  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const [toggleFAQ, setToggleFAQ] = useState(false)
  const toggle = index => {
    if (toggleFAQ === index) {
      return setToggleFAQ(null)
    }
    setToggleFAQ(index)
  }

  window.addEventListener('load', (event) => {
    const el = document.getElementById('loading');
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

  const numbers = [
    {
      number: 5463,
      title: "Total ◎ Volume "
    },
    {
      number: 2043,
      title: "Total Users"
    },
    {
      number: 420234,
      title: "Total Flips"
    },
    {
      number: 17435644,
      title: "Total $USD"
    },
  ]

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
    "1481693042956455936",
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

  const features = [
    {
      img: "/leaderboard.png",
      title: "Leaderboard",
      description: "Leaderboard Description",
      link: "https://leaderboard.degencoinflip.com/wagmi/top",
    },
    {
      img: "/supportdiscord.png",
      title: "Support Discord Server",
      description: "Support Server Description",
      link: "https://discord.gg/7Pja5sHER8",
    },
    {
      img: "/dcfstatistics.png",
      title: "DCF Statistics",
      description: "Created by DegenFaragu",
      link: "https://dcf-statistics.nftrix.net/",
    },
    {
      img: "/mixpanel.png",
      title: "Mixpanel",
      description: "Created by RyanHirsch",
      link: "https://mixpanel.com/public/8pagXxBh9Jq4tC636qDB2X",
    },
  ]

  const questions = [
    {
      question: "What is Degen Coin Flip (DCF)?",
      answer: "Degen Coin Flip is a smart contract that allows users to play Double or Nothing with their Solana tokens. Odds are 50/50 with a 3.5% fee that goes to DCF NFT holders."
    },
    {
      question: "How do I know I can Trust DCF?",
      answer: "DCF has over 100K SOL (~16 Million USD) flipped since we started and we are the trusted platform on Solana. \n \n The DCF Team and DCF NFT holders' have aligned incentives for the game to have exactly 50/50 odds. \n \n Our House and Fee wallets are all public and every transaction can be reviewed by anyone."
    },
    {
      question: "Where can I track transactions?",
      answer: "House Wallet: \n https://explorer.solana.com/address/DLq9BPETifWi56sxmW29FVCYGhpJSupq9v6uC5cYxgQA \n \n Fee Wallet: \n https://explorer.solana.com/address/Fe77Txknt6mLx52wNq58TJ9Arwe6oEyDHUAaG7c1xo5"
    },
    {
      question: "Where can I learn more?",
      answer: "Join us on discord, there will always be someone to help you out. \n https://discord.gg/f5JGjGysHU."
    },
  ]

  const milestones = [
    {
      title: "Title of Achievement",
      date: "Dec 2021",
      description: "Devs did something"
    },
    {
      title: "Title of Achievement",
      date: "Dec 2021",
      description: "Devs did something"
    },
    {
      title: "Title of Achievement",
      date: "Dec 2021",
      description: "Devs did something"
    },
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
            <a href="#features" className="nav-link nav-item" onClick={() => setToggleMenu(!toggleMenu)}>Features</a>
            <a href="#milestones" className="nav-link nav-item" onClick={() => setToggleMenu(!toggleMenu)}>Milestones</a>
            <a href="#faq" className="nav-link nav-item" onClick={() => setToggleMenu(!toggleMenu)}>FAQ</a>
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
        <div className="segment big-numbers">
          <div className="number-container">
            {numbers.map((number, index) => (
              <div className="number">
                <h3>{number.title}</h3>
                <p>{number.number.toLocaleString()}</p>
              </div>
            ))}
          </div>
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
        <div className="segment features">
          <h1 id="features">
            <span>Features</span>
          </h1>
          <p>Description for features</p>
          <div className="feature-container">
            {features.map((feature, index) => (
                <div className="feature">
                  <a href={feature.link} target="_blank" key={index}>
                    <img src={feature.img} alt="" />
                  </a>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
            ))}
          </div>
        </div>
        <div className="segment milestones">
          <h1 id="milestones">
            <span>Milestones</span>
          </h1>
          <p>Description of Milestones</p>
          <div className="milestone-container">
            {milestones.map((milestone, index) => (
              <div className="milestone">
                <h3>{milestone.title}</h3>
                <div className="bar-container">
                  <div className="bar-line bar-finished"></div>
                  <div className="bar-dot bar-finished"></div>
                </div>
                <h3>{milestone.date}</h3>
                <p>{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="segment faq">
          <h1 id="faq">
            <span>FAQ</span>
          </h1>
          <p>Description for FAQ</p>
          <div className="question-container">
            {questions.map((question, index) => (
              <div className="question">
                <div className="wrap" onClick={() => toggle(index)} key={index}>
                  <h3>{question.question}</h3>
                  <span>{toggleFAQ === index ? "-" : "+"}</span>
                </div>
                {toggleFAQ === index
                ?
                  (<p>{question.answer}</p>)
                : null
                }
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer>
        <h2>Flip your way up with <span>Degen Coin Flip</span></h2>
        <p>Gamble responsibly.</p>
        <a href="https://degencoinflip.com/#" target="_blank">
          <img src="/cta.png" alt="" />
        </a>
        <div>
          <a href="https://discord.gg/EbKC53qVWZ" target="_blank" className="nav-link" onClick={() => setToggleMenu(!toggleMenu)}>
            <img src="/discord.png" alt="Discord" className="nav-favicon" />
          </a>
          <a href="https://twitter.com/degencoinflip" target="_blank" className="nav-link" onClick={() => setToggleMenu(!toggleMenu)}>
            <img src="/twitter.png" alt="Twitter" className="nav-favicon" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
