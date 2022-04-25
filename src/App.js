import Card from "./components/Card";
import Total from "./components/Total";

const App = () => {
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-light bg-light">
          <h1 className="mt-2">Store</h1>
          <a href="https://google.com">Ofertas</a>
          <a href="https://google.com">Mis pedidos</a>
          <a href="https://google.com">Contacto</a>
          <button className="btn btn-primary">Salir</button>
        </nav>
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
