import { useContext, useEffect } from "react";
import { stateStore } from "../context/ContextAPI";
import styled from "styled-components";
import "./spinner.css";
import './total.css';

const Total = () => {
  const { item } = useContext(stateStore);
  const totalAPagar = item.reduce((acc, elem) => acc + elem.price, 0);

  useEffect(() => {}, [item, totalAPagar]);

  return (
    <>
      {item.length > 0 ? (
        <>
          <h2 className="text-center">Total</h2>
          <div>
            <hr />
            <div className="container">
              {item.length > 0
                ? item.map((element, i) => {
                    return (
                      <div className="row" key={i}>
                        <div className="col">
                          <input
                            className="form-control mt-2"
                            disabled
                            placeholder={`${element.brand} ${element.item}`}
                          />
                        </div>
                        <div className="col">
                          <input
                            className="form-control mt-2"
                            disabled
                            placeholder={`$ ${element.price}`}
                          />
                        </div>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
          <hr />
          <b>
            <SubTotal className="">{`$ ${totalAPagar} MXN`}</SubTotal>
          </b>
          <br />
          <div className="">
              <input type="checkbox" id="toggle" />
              <label htmlFor="toggle" className="button" />
            </div>
          <button id="" className="btn btn-primary btn-block">Pagar</button>
          <div className="container-sp">
          </div>
        </>
      ) : (
        <>
        <div className="alert alert-primary text-center" role="alert">
          Sin artículos
        </div>
        <Imagen src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-store-seo-flaticons-flat-flat-icons.png" className="" alt="Store"/>
        </>
      )}
    </>
  );
};

const SubTotal = styled.span`
  width: 85%;
  font-size: 25px;
  display: flex;
  align-items: right;
  justify-content: right;
`;

const Imagen = styled.img`
  width: 15%;
  display: flex;
  justify-content: center;
  align-item: center;

`;

export default Total;
