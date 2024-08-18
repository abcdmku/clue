import { RotatingArrow, useOrientation } from '@clue/comp-lib';
import React, { useEffect, useState } from 'react';

const Arrow: React.FC = () => {
  const  { webkitCompassHeading } = useOrientation();

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <RotatingArrow angle={webkitCompassHeading || 0} />
    </div>
  );
};

export default Arrow;

