import { useOrientation } from "@clue/comp-lib";

export const Debugger = () => {
  const data = useOrientation();
  const arrowStyle: React.CSSProperties = {
    position: 'fixed',
    top: '0',
  };


  return (
    <div style={arrowStyle}>
      <pre>{data && JSON.stringify({...data}, null, 2)}</pre>
      <ul>{data?.alpha}</ul>
      <ul>{data?.beta}</ul>
      <ul>{data?.gamma}</ul>
      <ul>{data?.absolute}</ul>
      <ul>{({...data} as any)?.webkitCompassHeading} </ul>
    </div>
  );
};
