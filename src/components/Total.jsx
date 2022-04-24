const Total = ({ item }) => {
  return (
    <>
      <h2 className="text-center">Total</h2>
      {item.length > 0 ? (
        <div>
          <hr />
          <h3>{item.brand}</h3>
        </div>
      ) : null}
    </>
  );
};

export default Total;
