import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Automovil from "./components/Automovil";
import {db} from './data/db'
function App() {

  const data = db;

  return (
    <>
      <Header />

      <main className="container-xl mt-5">
        <h2 className="text-center">Automóviles disponibles</h2>
        <div className="row mt-5"></div>
        {
          data.map((auto) => (
            
            <Automovil key={auto.id} name={auto.name} image={auto.image} brand={auto.brand} price={auto.price} year={auto.year} topSpeed={auto.topSpeed }  />
            ))
        }

      </main>

      <footer className="mt-5 py-5">
        <div className="container-xl">
          <p className="text-center fs-6 mt-4 m-md-0 text-muted">
            © 2024 Super Carros, Inc
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
