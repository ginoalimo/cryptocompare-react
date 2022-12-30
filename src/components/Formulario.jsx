import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Error from "./Error";
import useSelectMonedas from "../hooks/useSelectMonedas";
import { monedas } from "../data/monedas";

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 25px;
  margin-top: 30px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;

const Formulario = ({ setMonedas }) => {
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);

  const [moneda, SelectMonedas] = useSelectMonedas("Select Coin", monedas);
  const [crypto, SelectCrypto] = useSelectMonedas(
    "Select Cryptocurrency",
    criptos
  );

  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      const arrayCriptos = resultado.Data.map((crypto) => {
        const objeto = {
          id: crypto.CoinInfo.Name,
          nombre: crypto.CoinInfo.FullName,
        };

        return objeto;
      });

      setCriptos(arrayCriptos);
    };

    consultarAPI();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([moneda, crypto].includes("")) {
      setError(true);

      return;
    }
    setError(false);
    setMonedas({
      moneda,
      crypto
    })
  };

  return (
    <>
      {error && <Error>All fields are required.</Error>}
      <form onSubmit={handleSubmit}>
        <SelectMonedas />
        <SelectCrypto />
        <InputSubmit type="submit" value="search" />
      </form>
    </>
  );
};

export default Formulario;
