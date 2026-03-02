import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Automovil from "./components/Automovil";
import { db } from './data/db'
import { useState } from "react";
function App() {

  const [cart, setCart] = useState([])

  const data = db;

  const eliminarItem = (id) => {
    
    const updateItem = cart.filter((item) => item.id !== id)
    setCart(updateItem)

  }
  
  const handleClickAgregar =(item)=>{
      const itemExist = cart.findIndex(auto => auto.id === item.id)
    console.log(itemExist)

    if (itemExist >= 0) {

      const updateCart = [...cart]
      updateCart[itemExist].quantity++
      setCart(updateCart)
      console.log("Ya existe")
      console.log(cart)
      
    } else {
      item.quantity=1
      setCart([...cart, item])
      console.log("No existe")
      console.log(cart)
    }
  }

  return (
    <>
      <Header eliminarItem={eliminarItem} cart={cart}/>

      <main className="container-xl mt-5">
        <h2 className="text-center">Automóviles disponibles</h2>
        <div className="row mt-5"></div>

        {
          data.map((auto)=>(
            <Automovil key={auto.id} auto={auto} handleClickAgregar={handleClickAgregar}/>
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
