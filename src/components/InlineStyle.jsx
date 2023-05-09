export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 2px lightgreen",
    borderRadius: "20px",
    padding: "8px",
    margin: "8px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  };
  const titleStyle = {
    margin: "0",
    color: "darkgreen"
  };
  const buttonStyle = {
    backgroundColor: "palegreen",
    border: "none",
    padding: "8px",
    borderRadius: "8px"
  };
  return (
    <div style={containerStyle}>
      <p style={titleStyle}>Inline styles</p>
      <button style={buttonStyle}>Ah</button>
    </div>
  );
};
