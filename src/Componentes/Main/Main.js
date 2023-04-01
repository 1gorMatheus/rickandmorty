import { Api } from "../Api";
import { useEffect, useState } from "react";

import Personagens from "./Personagens";
import { MainStyled, Butao } from "../Styles/MainStyled";

function Main() {
  const [infos, setInfos] = useState([]);
  const [page, setPages] = useState(1);
  const [countpage, setCountpage] = useState();

  const getPost = async () => {
    await Api.get(`/character?page=${page}`).then((response) => {
      setInfos(response.data.results);
      setCountpage(response.data.info.pages);
    });
  };

  useEffect(() => {
    getPost();
  }, [page]);

  return (
    <>
      <MainStyled>
        {infos &&
          infos.map((item) => (
            <Personagens
              key={item.id}
              name={item.name}
              image={item.image}
              status={item.status}
              specie={item.species}
              gender={item.gender}
            />
          ))}
      </MainStyled>
      <Butao>
        {page > 1 && (
          <button onClick={() => setPages(page > 1 ? page - 1 : 1)}>
            Anterior
          </button>
        )}

        <button
          onClick={() => setPages(page >= 1 && page < 42 ? page + 1 : 42)}
        >
          Próximo
        </button>
      </Butao>
      <p style={{ color: "rgb(135, 245, 78)", textAlign: "center" }}>
        Página {page} de {countpage}
      </p>
    </>
  );
}

export default Main;
