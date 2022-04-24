import Card from "./components/Card";
import Total from "./components/Total";

const App = () => {


  return (
    <>
      <div className="container">
        <h1>iShop</h1>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col">
              <Card />
            </div>
            <div className="col">
              <Total />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
