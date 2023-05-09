export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">Styled JSX</p>
        <button className="button">Wow</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px lightgreen;
          border-radius: 20px;
          padding: 8px;
          margin: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .title {
          margin: 0;
          color: darkgreen;
        }

        .button {
          background-color: palegreen;
          border: none;
          padding: 8px;
          border-radius: 8px;
        }
      `}</style>
    </>
    // SCSSの記法をするには要拡張
  );
};
