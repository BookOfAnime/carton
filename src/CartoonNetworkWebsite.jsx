import React, { useState, useEffect } from 'react';

const CartoonNetworkGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real scenario, you would fetch the list of images from your server
    // For this example, we'll simulate it with a fixed list
    const simulatedImageList = [
      'dexter.png',
      'johnny_bravo.png',
      'powerpuff_girls.png',
      'courage.png',
      'ed_edd_eddy.png',
      'samurai_jack.png',
      // Add more image filenames as needed
    ];

    setImages(simulatedImageList);
    setLoading(false);
  }, []);

  if (loading) {
    return <div style={{ color: '#FFFFFF' }}>Loading...</div>;
  }

  return (
    <div style={{
      backgroundColor: '#000000',
      minHeight: '100vh',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <h1 style={{ color: '#00A5E3', marginBottom: '20px' }}>Cartoon Network Gallery</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '20px',
        width: '100%',
        maxWidth: '1200px',
      }}>
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              overflow: 'hidden',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`,
            }}
          >
            <img
              src={`/images/${image}`}
              alt={`Cartoon Network character ${index + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// Add this style to your component or in a separate CSS file
const styles = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const CartoonNetworkWebsite = () => {
  return (
    <div>
      <style>{styles}</style>
      <CartoonNetworkGallery />
    </div>
  );
};

export default CartoonNetworkWebsite;