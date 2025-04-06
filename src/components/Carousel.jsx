import React, { useState, useEffect } from 'react';

const styles = {
  carousel: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '80vh',
    overflow: 'hidden',
  },
  headerButtonGroup: {
    position: 'absolute',
    zIndex: 200,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '50px',
  },
  headerText: {
    height: 'fit-content',
    color: 'white',
    fontSize: '2.5rem',
    textAlign: 'center',
  },
  button: {
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '4px',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: 'fit-content',
  },
  description: {
    position: 'absolute',
    right: '20px',
    bottom: '20px',
    zIndex: 200,
    background: 'rgba(0, 0, 0, 0.6)',
    borderRadius: '4px',
    padding: '0.5rem 1rem',
    color: 'white',
    fontSize: '0.875rem',
    margin: 0,
  },
  indicators: {
    position: 'absolute',
    bottom: '5%',
    left: 0,
    right: 0,
    zIndex: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
  },
  indicator: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
  indicatorActive: {
    backgroundColor: 'white',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    zIndex: 100,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  items: {
    display: 'flex',
    zIndex: 0,
    transition: 'transform 0.5s ease-in-out',
    width: '100%',
    height: '100%',
  },
  item: {
    minWidth: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center 75%',
  }
}

export default function Carousel(props) {
  const {
    carouselData, 
    headerText, 
    buttonText, 
    onClick, 
    interval = 8000,
    height = '80vh',
    overlayColor ='rgba(0, 0, 0, 0.3)',
    overlayOpacity = 0.3
  } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const goToItem = index => setCurrentIndex(index)
  const goToNextItem = () => setCurrentIndex(prev => (prev + 1) % carouselData.length)
  
  useEffect(() => {
    if (!carouselData || carouselData.length <= 1) return;
    const currentInterval = setInterval(goToNextItem, interval)
    return () => clearInterval(currentInterval);
  }, [carouselData, interval]);

  if (!carouselData || carouselData.length === 0) return <></>
  return (
    <div style={{ ...styles.carousel, height: height }}>
      {carouselData.map((item, index) => (
        currentIndex === index && (
          <p key={`desc-${index}`} style={styles.description}>
            {item.description}
          </p>
        )
      ))}

      <div style={styles.headerButtonGroup}>
        {headerText && 
          <h1 style={styles.headerText}>{headerText}</h1>
        }
        {buttonText && onClick && (
          <button style={styles.button} onClick={onClick}>
            {buttonText}
          </button>
        )}
      </div>
      
      <div style={styles.indicators}>
        {carouselData.map((_, index) => (
          <div
            key={`indicator-${index}`}
            onClick={() => goToItem(index)}
            style={{
              ...styles.indicator,
              ...(index === currentIndex ? styles.indicatorActive : {})
            }}
          />
        ))}
      </div>
      
      <div style={{ ...styles.overlay, backgroundColor: overlayColor, opacity: overlayOpacity }} />
      
      <div 
        style={{
          ...styles.items,
          transform: `translateX(-${currentIndex * 100}%)`
        }}
      >
        {carouselData.map((item, index) => (
          <div key={`item-${index}`} style={styles.item}>
            <div style={styles.imageContainer}>
              <img
                src={item.imageSource}
                alt={item.description}
                style={styles.image}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}