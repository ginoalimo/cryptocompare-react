import styled from "@emotion/styled";

const Contenedor = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`;
const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;

const Imagen = styled.img`
  display: block;
  width: 120px;
`

const Precio = styled.p`
  font-size: 24px;
  span {
    font-weight: 700;
  }
`;

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;
  return (
    <Contenedor>
      <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="Image crypto" />
      <div>
        <Precio>
          Price: <span>{PRICE}</span>
        </Precio>
        <Texto>
          High 24h: <span>{HIGHDAY}</span>
        </Texto>
        <Texto>
          Low 24h: <span>{LOWDAY}</span>
        </Texto>
        <Texto>
          Variation 24h: <span>{CHANGEPCT24HOUR}</span>
        </Texto>
        <Texto>
          Last update: <span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </Contenedor>
  );
};

export default Resultado;
