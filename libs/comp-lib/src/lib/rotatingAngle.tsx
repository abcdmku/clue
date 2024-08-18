export const RotatingArrow = ({ angle = 0 }) => {
  const arrowStyle: React.CSSProperties = {
    transform: `rotate(${angle || 0}deg)`,
    transition: 'transform 0.3s ease-in-out',
  };

  return <div style={arrowStyle}>↑</div>;
};

export default RotatingArrow;