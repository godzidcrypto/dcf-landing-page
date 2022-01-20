import './App.css';

import { useState, useEffect, useRef } from 'react'
import { Tweet } from 'react-twitter-widgets'

function App() {

  // useState Variables
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  // FAQ Toggle
  const [toggleFAQ, setToggleFAQ] = useState(false)
  const toggle = index => {
    if (toggleFAQ === index) {
      return setToggleFAQ(null)
    }
    setToggleFAQ(index)
  }

  // Loading Screen
  window.addEventListener('load', (event) => {
    const el = document.getElementById('loading');
    el.style.display = "none";
  });

  // Navbar Window Resize
  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
    }

  }, [])

  // // Fade-In
  const [isVisible, setVisible] = useState(true);

  // const domRef = useRef();

  // useEffect(() => {
  //   const observer = new IntersectionObserver(entries => {
  //     entries.forEach(entry => entry.isIntersecting && setVisible(true));
  //   });

  //   observer.observe(domRef.current);

  //   return () => observer.unobserve(domRef.current);
  // }, []);


  // Fade-In 2
  // const faders = document.querySelectorAll(".fade-in-section");

  // const appearOptions = {
  //   threshold: 0,
  //   rootMargin: "0px 0px -250px 0px"
  // };
  
  // const appearOnScroll = new IntersectionObserver(function(
  //   entries,
  //   appearOnScroll
  // ) {
  //   entries.forEach(entry => {
  //     if (!entry.isIntersecting) {
  //       return;
  //     } else {
  //       entry.target.classList.add("is-visible");
  //       appearOnScroll.unobserve(entry.target);
  //     }
  //   });
  // },
  // appearOptions);

  // faders.forEach(fader => {
  //   appearOnScroll.observe(fader);
  // });

  // Drag to Scroll
  window.onload = function(){
    const ele = document.getElementsByClassName('milestone-container');
    // ele[0].scrollTop = 100;
    // ele[0].scrollLeft = 150;

    let pos = { top: 0, left: 0, x: 0, y: 0 };

    const mouseDownHandler = function (e) {
      ele[0].style.cursor = 'grabbing';
      ele[0].style.userSelect = 'none';
      
      pos = {
          // The current scroll
          left: ele[0].scrollLeft,
          top: ele[0].scrollTop,
          // Get the current mouse position
          x: e.clientX,
          y: e.clientY,
      };

      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = function (e) {
      // How far the mouse has been moved
      const dx = e.clientX - pos.x;
      const dy = e.clientY - pos.y;

      // Scroll the element
      ele[0].scrollTop = pos.top - dy;
      ele[0].scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = function () {
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);

      ele[0].style.cursor = 'grab';
      ele[0].style.removeProperty('user-select');
    };

    ele[0].addEventListener('mousedown', mouseDownHandler);
}

  const numbers = [
    {
      number: 150952,
      title: "Total ◎ Volume "
    },
    {
      number: 15000,
      title: "Total Users"
    },
    {
      number: 550000,
      title: "Total Flips"
    },
    {
      number: 22642844,
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

    "1474511680520425472",
    "1474556602191515651",
    "1473069607288193038",
    "1474649536308002819",
    
    "1477085631058567173",
    "1478598851644723201",
    "1479486746056220675",
    "1482440612049731585",
  ]

  const features = [
    {
      img: "/leaderboard.png",
      title: "🏆 DCF Leaderboard",
      description: "The more SOL you flip, the higher points you get in our Leaderboard! You can also view the total volume made by our white-label partners!",
      link: "https://leaderboard.degencoinflip.com/wagmi/top",
    },
    {
      img: "/supportdiscord.png",
      title: "🆘 Support Discord Server",
      description: "Need you address to get blacklisted? Is the Solana TPS messing with your flip? Open a ticket in our Support Server!",
      link: "https://discord.gg/7Pja5sHER8",
    },
    {
      img: "/dcfstatistics.png",
      title: "⏳ DCF Statistics",
      description: "View the total volume that has been flipped for today! Created by a fellow DCF Holder, DegenFaragu",
      link: "https://dcf-statistics.nftrix.net/",
    },
    {
      img: "/mixpanel.png",
      title: "📊 Mixpanel",
      description: "View all the statistical dashboards that prove the 50/50 probability of flips! Created by a fellow DCF Holder, RyanHirsch",
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
      title: "🥚 The Beginning",
      date: "Dec 5th 2021",
      description: "DegenCoinFlip’s first twitter post",
      tweet: "1467754495329243142"
    },
    {
      title: "🚀 The Launch",
      date: "Dec 8th 2021",
      description: "DCF Opens mint at .33 sol, sells out instantly, and launches game all within an hour.",
      tweet: "1468680827840221185"
    },
    {
      title: "💰 The Million Dollars",
      date: "Dec 9th 2021",
      description: "1 MILLION dollars flipped in two days. Up 42x from mint. 6/555 listed, top 10 in magic eden",
      tweet: "1469408968028139532"
    },
    {
      title: "🧑‍💻 The Hack",
      date: "Dec 10th 2021",
      description: "Degencoinflip gets exploited by white hat hackers.",
      tweet: "1469424664288051201"
    },
    {
      title: "⚒️ The Patch",
      date: "Dec 11th 2021",
      description: "All funds are restored and game is patched.",
      tweet: "1469479724783386624"
    },
    {
      title: "⚔️ The Attacks",
      date: "Dec 15th 2021",
      description: "Discord attacked by competitors and banned twice",
      tweet: "1471280390207909888"
    },
    {
      title: "💰 The 5 Million Dollars",
      date: "Dec 22nd 2021",
      description: "DCF crosses $5,000,000 in USD flipped",
      tweet: "1473761607222054916",
    },
    {
      title: "👨‍🍳 The Celebrity Chef",
      date: "Dec 24th 2021",
      description: "DCF brings on newest member,  Restaurateur and Celebrity Chef",
      tweet: "1474556602191515651"
    },
    {
      title: "💎 The Diamond Hands",
      date: "Dec 26th 2021",
      description: "DCF took the place as the number one diamond handed community in all of Solana.",
      tweet: "1475151622246260737"
    },
    {
      title: "😺 The Meerkats",
      date: "Dec 27th 2021",
      description: "DCF launches it’s white-label partnership with the great Millionaire Meerkats Country Club",
      tweet: "1475637478325321729"
    },
    {
      title: "💰 The 10 Million Dollars",
      date: "Dec 29th 2021",
      description: "DCF hits huge milestone $10 MILLION flipped!",
      tweet: "1476281596911120385"
    },
    {
      title: "2️⃣ The 2 Sol Flip",
      date: "Dec 31st 2021",
      description: "Added 2 Sol Flip Option",
      tweet: "1477083146654863361"
    },
    {
      title: "📊 The Dex",
      date: "January 1st 20212",
      description: "DegenDex white-label partnership",
      tweet: "1477351879210274819"
    },
    {
      title: "🧑‍💻 The Sol Dev",
      date: "Jan 2nd 2022",
      description: "Brought on a great and respected member of the Sol Dev community, STACC.",
      tweet: "1477788189385322500"
    },
    {
      title: "🐶 The Doges",
      date: "Jan 4th 2022",
      description: "Doge Capital white-label partnership",
      tweet: "1478443761625612295"
    },
    {
      title: "🐌 The Slugs",
      date: "Jan 6th 2022",
      description: "Solana Slugs white-label partnership",
      tweet: "1479214370441732097"
    },
    {
      title: "🐲 The Dragons",
      date: "Jan 9th 2022",
      description: "Boryoku Dragonz white-label partnership",
      tweet: "1480208628443275265"
    },
    {
      title: "🤑 The Gigantic Giveaway",
      date: "Jan 10th 2021",
      description: "GIGANTIC 34 SOL giveaway",
      tweet: "1480717234662088705"
    },
    {
      title: "🐥 The Chicks",
      date: "Jan 11th 2022",
      description: "SolChicks white-label partnership",
      tweet: "1481034472799801346"
    },
    {
      title: "💳 The Player Cards",
      date: "Jan 15th 2022",
      description: "DCF Player Cards Announced",
      tweet: "1482434527486087168",
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
        {(toggleMenu || screenWidth > 1300) && (
          <div className="nav-links">
            <a href="#about" className="nav-link nav-item" onClick={() => setToggleMenu(!toggleMenu)}>About Us</a>
            <a href="#testimonials" className="nav-link nav-item" onClick={() => setToggleMenu(!toggleMenu)}>Testimonials</a>
            <a href="#partners" className="nav-link nav-item" onClick={() => setToggleMenu(!toggleMenu)}>Partners</a>
            <a href="#features" className="nav-link nav-item" onClick={() => setToggleMenu(!toggleMenu)}>Tools & Data</a>
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
        <div className={ `segment hero fade-in-section ${ isVisible ? 'is-visible' : '' }` }>
          <div>
            <h1 id="about" className="colored-text">
              Double your Solana with a click of a button.
            </h1>
            <p>
            Degen Coin Flip is a smart contract that allows users to play Double or Nothing with their Solana tokens. Odds are 50/50 with a 3.5% fee that goes to DCF NFT holders. There has been over $20M USD flipped, and every single transaction through the <span><a href="https://solscan.io/account/BU6VD7ASxAcAfvAZCxQH6Rqm8RNgdj5t7Xkh4EsQtK8U" target="_blank">smart contract</a></span> is verifiable on-chain.
            </p>
            <a href="https://degencoinflip.com/#" target="_blank">
              <img src="/cta.png" alt="" />
            </a>
          </div>
          <img src="/dcf.png" alt="" />
        </div>
        <div className={ `segment big-numbers fade-in-section ${ isVisible ? 'is-visible' : '' }` }>
          <div className="number-container">
            {numbers.map((number, index) => (
              <div className="number">
                <h3>{number.title}</h3>
                <p>{number.number.toLocaleString()} +</p>
              </div>
            ))}
          </div>
        </div>
        <div className={ `segment testimonials fade-in-section ${ isVisible ? 'is-visible' : '' }` }>
          <h1 id="testimonials">
            <span>Testimonials</span>
          </h1>
          <div className="testimonial-container">
            {testimonials.map((testimonial, index) => (
              <div className="testimonial" key={index}>
                <Tweet tweetId={testimonial} />
              </div>
            ))}
          </div>
        </div>
        <div className={ `segment partners fade-in-section ${ isVisible ? 'is-visible' : '' }` }>
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
        <div className={ `segment features fade-in-section ${ isVisible ? 'is-visible' : '' }` }>
          <h1 id="features">
            <span>Degen Coin Flip Tools & Data</span>
          </h1>
          {/* <p>Description for features</p> */}
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
        <div className={ `segment milestones fade-in-section ${ isVisible ? 'is-visible' : '' }` }>
          <h1 id="milestones">
            <span>Milestones</span>
          </h1>
          {/* <img src="/scroll.png" alt="" /> */}
          <div className="milestone-container">
            {milestones.map((milestone, index) => (
              <div className="milestone" key={index}>
                <h3><span>{milestone.title}</span></h3>
                <div className="bar-container">
                  <div className="bar-line bar-finished"></div>
                  <div className="bar-dot bar-finished"></div>
                </div>
                <h3>{milestone.date}</h3>
                <p>{milestone.description}</p>
                <div className="milestone-tweet">
                  <Tweet
                    tweetId={milestone.tweet}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={ `segment faq fade-in-section ${ isVisible ? 'is-visible' : '' }` }>
          <h1 id="faq">
            <span>FAQ</span>
          </h1>
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
