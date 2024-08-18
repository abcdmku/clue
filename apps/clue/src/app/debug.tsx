import { useOrientation } from "@clue/comp-lib";

export const Debugger = () => {
  const data = useOrientation();
  const arrowStyle: React.CSSProperties = {
    position: 'fixed',
    top: '0',
  };


  return (
    <div style={arrowStyle}>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
