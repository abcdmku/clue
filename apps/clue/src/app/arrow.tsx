import { RotatingArrow } from '@clue/comp-lib';
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


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <RotatingArrow angle={heading || 0} />
    </div>
  );
};

export default Arrow;

