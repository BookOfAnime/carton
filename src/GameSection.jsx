import React from 'react';

const GamesSection = () => (
  <div>
    <h2 style={{ color: '#00A5E3', textAlign: 'center', margin: '20px 0' }}>Cartoon Network Games</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
      {['Dexter's Lab Puzzle', 'PowerPuff Girls Battle', 'Johnny Bravo's Dance Off', 'Courage's Spooky Adventure'].map((game, index) => (
        <div key={index} style={{
          backgroundColor: '#00A5E3',
          padding: '20px',
          borderRadius: '10px',
          textAlign: 'center',
          color: '#FFFFFF',
          cursor: 'pointer',
        }}>
          {game}
        </div>
      ))}
    </div>
  </div>
);

export default GamesSection;
```

3. MemesSection.js:

```jsx
import React from 'react';

const MemesSection = () => (
  <div>
    <h2 style={{ color: '#00A5E3', textAlign: 'center', margin: '20px 0' }}>Cartoon Network Memes</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
      {[1, 2, 3, 4].map((meme) => (
        <div key={meme} style={{
          backgroundColor: '#2C2C2C',
          height: '250px',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FFFFFF',
        }}>
          Meme {meme}
        </div>
      ))}
    </div>
  </div>
);

export default MemesSection;
```

4. LinksSection.js:

```jsx
import React from 'react';

const LinksSection = () => (
  <div>
    <h2 style={{ color: '#00A5E3', textAlign: 'center', margin: '20px 0' }}>Useful Links</h2>
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {['Official Cartoon Network Site', 'CN YouTube Channel', 'CN Store', 'CN Apps'].map((link, index) => (
        <li key={index} style={{
          backgroundColor: '#2C2C2C',
          margin: '10px 0',
          padding: '15px',
          borderRadius: '5px',
          cursor: 'pointer',
        }}>
          {link}
        </li>
      ))}
    </ul>
  </div>
);

export default LinksSection;