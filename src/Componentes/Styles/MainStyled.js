import styled from "styled-components";

export const MainStyled = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  align-items: center;
`;

export const PorsonagensStyled = styled.div`
  border-radius: 10px;
  background: #0d1117;
  color: #0d1117;
  article {
    display: flex;
    flex-direction: column;
    width: 20rem;
    height: 32rem;
    padding: 10px;
    align-items: center;
    img {
      height: 65%;
      border-radius: 10px;
    }
  }
`;
export const Caracteristicas = styled.div`
  background-color: rgb(135, 245, 78);
  width: 90%;
  height: 90%;
  border-radius: 10px;
  margin: 10px 0px 0px;
  padding: 0 10px;
  h2 {
    font-size: 1.1rem;
  }
`;

export const Butao = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
  color:rgb(135, 245, 78);
  button{
    padding: 1.5rem;
    background-color: rgb(135, 245, 78);
    border: none;
    border-radius: 1rem;
    cursor: pointer;
    :hover{
    background-color:rgb(108, 197, 62);
    transition : all 0.3s;
  }
  }
  
`;
