export const RotatingArrow = ({ angle = 0 }) => {
  const arrowStyle: React.CSSProperties = {
    transform: `rotate(${angle || 0}deg)`,
    fontSize: '30rem',
  };

  return <div style={arrowStyle}>↑</div>;
};

export default RotatingArrow;