import React, { useEffect, useState } from 'react';

const Arrow: React.FC = () => {
  const [heading, setHeading] = useState<number | null>(null);

  useEffect(() => {
    const handleOrientation = (event: DeviceOrientationEvent) => {
      if (event.alpha !== null) {
        setHeading(event.alpha);
      }
    };

    window.addEventListener('deviceorientation', handleOrientation);

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []);

  const arrowStyle: React.CSSProperties = {
    transform: `rotate(${heading || 0}deg)`,
    transition: 'transform 0.3s ease-in-out',
  };

  return (
    <div>
      <div style={arrowStyle}>↑</div>
      <p>Heading: {heading !== null ? `${heading.toFixed(2)}°` : 'N/A'}</p>
    </div>
  );
};

export default Arrow;
