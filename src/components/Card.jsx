import { useState } from "react";
import { inventory } from "../data/db";


const Card = () => {

  const [item, setItem] = useState([]);


  return (
    <>
      {inventory.map((element,i) => {
        return (
          <div className="card" key={i}>
            <div className="card-body">
              <b className="text-center">{`${element.brand} ${element.item}`}</b>
              <br />
              <b className="badge badge-success">{`$ ${element.price}`}</b>
              <br />
              <button className="btn btn-outline-dark mt-4" onClick={ () => setItem([...item,element])}>Add</button>
            </div>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default Card;
