import { useEffect, useState } from 'react';

export const useOrientation = () => {
  const [deviceOrientation, setDeviceOrientation] = useState<DeviceOrientationEvent>();

  useEffect(() => {
    const handleOrientation = (e: DeviceOrientationEvent) => setDeviceOrientation(e);
    window.addEventListener('deviceorientation', handleOrientation);
    return () => { window.removeEventListener('deviceorientation', handleOrientation) };
  }, []);

  return deviceOrientation;
};
