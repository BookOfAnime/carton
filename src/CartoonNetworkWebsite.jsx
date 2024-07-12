import React, { useState, useEffect } from 'react';

// Simulated data (replace with real data in a production scenario)
const shows = [
  { id: 1, title: "Dexter's Laboratory", image: '/images/dexter.png' },
  { id: 2, title: "The Powerpuff Girls", image: '/images/powerpuff_girls.png' },
  { id: 3, title: "Johnny Bravo", image: '/images/johnny_bravo.png' },
  { id: 4, title: "Courage the Cowardly Dog", image: '/images/courage.png' },
  { id: 5, title: "Ed, Edd n Eddy", image: '/images/ed_edd_eddy.png' },
  { id: 6, title: "Samurai Jack", image: '/images/samurai_jack.png' },
];

const games = [
  { id: 1, title: "Dexter's Lab Experiment", image: '/images/dexter_game.png' },
  { id: 2, title: "Powerpuff Girls: Mojo Madness", image: '/images/powerpuff_game.png' },
  { id: 3, title: "Johnny Bravo's Date Dash", image: '/images/johnny_game.png' },
  { id: 4, title: "Courage's Creepy Crypt", image: '/images/courage_game.png' },
];

const NavBar = () => (
  <nav style={{
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: '15px 0',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  }}>
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
    }}>
      <img src="/images/cn_logo.png" alt="Cartoon Network" style={{ height: '40px' }} />
      <div style={{ display: 'flex', gap: '20px' }}>
        {['Home', 'Shows', 'Games', 'Schedule', 'About'].map(item => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            style={{
              color: '#FFFFFF',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: 'bold',
              padding: '5px 10px',
              transition: 'all 0.3s ease',
            }}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  </nav>
);

const HeroSection = () => (
  <div id="home" style={{
    backgroundImage: 'url(/images/hero_background.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    textAlign: 'center',
    paddingTop: '60px', // Account for fixed navbar
  }}>
    <div>
      <h1 style={{ fontSize: '3em', marginBottom: '20px' }}>Welcome to Cartoon Network</h1>
      <p style={{ fontSize: '1.2em', maxWidth: '600px', margin: '0 auto' }}>
        Dive into a world of fun, adventure, and laughter with your favorite cartoons!
      </p>
    </div>
  </div>
);

const ShowsSection = () => (
  <section id="shows" style={{ padding: '60px 20px', backgroundColor: '#1C1C1C' }}>
    <h2 style={{ color: '#00A5E3', textAlign: 'center', marginBottom: '30px' }}>Popular Shows</h2>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '20px',
      maxWidth: '1200px',
      margin: '0 auto',
    }}>
      {shows.map(show => (
        <div key={show.id} style={{
          backgroundColor: '#2C2C2C',
          borderRadius: '10px',
          overflow: 'hidden',
          transition: 'transform 0.3s ease',
          cursor: 'pointer',
        }}>
          <img src={show.image} alt={show.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          <div style={{ padding: '15px' }}>
            <h3 style={{ color: '#FFFFFF', marginBottom: '5px' }}>{show.title}</h3>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const GamesSection = () => (
  <section id="games" style={{ padding: '60px 20px', backgroundColor: '#000000' }}>
    <h2 style={{ color: '#00A5E3', textAlign: 'center', marginBottom: '30px' }}>Featured Games</h2>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '20px',
      maxWidth: '1200px',
      margin: '0 auto',
    }}>
      {games.map(game => (
        <div key={game.id} style={{
          backgroundColor: '#1C1C1C',
          borderRadius: '10px',
          overflow: 'hidden',
          transition: 'transform 0.3s ease',
          cursor: 'pointer',
        }}>
          <img src={game.image} alt={game.title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
          <div style={{ padding: '15px' }}>
            <h3 style={{ color: '#FFFFFF', marginBottom: '5px' }}>{game.title}</h3>
            <button style={{
              backgroundColor: '#00A5E3',
              color: '#FFFFFF',
              border: 'none',
              padding: '8px 15px',
              borderRadius: '5px',
              cursor: 'pointer',
              marginTop: '10px',
            }}>
              Play Now
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const ScheduleSection = () => (
  <section id="schedule" style={{ padding: '60px 20px', backgroundColor: '#1C1C1C' }}>
    <h2 style={{ color: '#00A5E3', textAlign: 'center', marginBottom: '30px' }}>Today's Schedule</h2>
    <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: '#2C2C2C', borderRadius: '10px', padding: '20px' }}>
      {['9:00 AM - The Powerpuff Girls', '10:00 AM - Dexter\'s Laboratory', '11:00 AM - Johnny Bravo', '12:00 PM - Courage the Cowardly Dog'].map((item, index) => (
        <div key={index} style={{
          padding: '15px',
          borderBottom: index < 3 ? '1px solid #3C3C3C' : 'none',
          color: '#FFFFFF',
        }}>
          {item}
        </div>
      ))}
    </div>
  </section>
);

const AboutSection = () => (
  <section id="about" style={{ padding: '60px 20px', backgroundColor: '#000000', color: '#FFFFFF' }}>
    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <h2 style={{ color: '#00A5E3', marginBottom: '20px' }}>About Cartoon Network</h2>
      <p style={{ lineHeight: '1.6' }}>
        Cartoon Network is a leading animation network for kids and families. Since 1992, Cartoon Network has been bringing laughter, adventure, and creativity to viewers of all ages with its unique blend of animated entertainment.
      </p>
    </div>
  </section>
);

const Footer = () => (
  <footer style={{
    backgroundColor: '#000000',
    color: '#FFFFFF',
    padding: '30px 20px',
    textAlign: 'center',
  }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <img src="/images/cn_logo.png" alt="Cartoon Network" style={{ height: '30px', marginBottom: '20px' }} />
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
        {['Terms of Use', 'Privacy Policy', 'AdChoices', 'Contact Us'].map(item => (
          <a key={item} href="#" style={{ color: '#FFFFFF', textDecoration: 'none' }}>{item}</a>
        ))}
      </div>
      <p>© 2024 Cartoon Network. All Rights Reserved.</p>
    </div>
  </footer>
);

const CartoonNetworkWebsite = () => {
  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#1C1C1C',
      color: '#FFFFFF',
    }}>
      <NavBar />
      <HeroSection />
      <ShowsSection />
      <GamesSection />
      <ScheduleSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default CartoonNetworkWebsite;