import { RotatingArrow, useOrientation } from '@clue/comp-lib';
import React, { useEffect } from 'react';

const Arrow: React.FC = () => {
  const DO = useOrientation();

  useEffect(() => {
    console.log(DO);
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <RotatingArrow angle={DO.alpha || 0} />
    </div>
  );
};

export default Arrow;

