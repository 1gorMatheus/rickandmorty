import { PorsonagensStyled, Caracteristicas} from "../Styles/MainStyled";

function Personagens({ name, image, specie, status, gender }) {
  return (
    <PorsonagensStyled>
      <article>
        <img src={image} alt={name} />
        <Caracteristicas>
          <h1>Nome : {name}</h1>
          <h2>Espécie : {specie}</h2>
          <h3>Status : {status}</h3>
          <h4>Sexo : {gender}</h4>
        </Caracteristicas>
      </article>
    </PorsonagensStyled>
  );
}

export default Personagens;
