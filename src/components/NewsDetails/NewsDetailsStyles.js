import styled from "styled-components";

export const NewsDetailsContainer = styled.div`
  ${
    "" /* display: flex;
    flex-direction: column; */
  }
  /* grid-template-columns: 1fr 1fr 1fr; */
    /* column-gap: -10rem; */
    margin-left: 20rem;
  column-gap: 2rem;
  row-gap: 2rem;
  margin-right: auto;
  margin-top: 8rem;
  padding: 1.6rem;
  margin-bottom: 2rem;
`;

export const NewsDetailsHeader = styled.div`
  border-bottom: 1px solid var(--color-light);
`;

export const NewsTitle = styled.h1`
  font-size: 1.8rem;
  padding-bottom: 1.8rem;
`;
export const NewsMid = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const NewsSmall = styled.h4`
  display: flex;
  font-size: 1.2rem;
  color: var(--color-light);
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  margin-right: auto;
`;

export const NewsLikeIcon = styled.button`
  margin-top: 0.5rem;
  margin-left: auto;
  cursor: pointer;
  background-color: transparent;
  color: var(--color-light);
`;

export const NewsDetailsContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2.4rem;
`;

export const NewsImage = styled.div`
  width: 100%;

  img {
    border-radius: 1rem;
  }
`;

export const NewsContent = styled.div`
  font-size: 1.1rem;
  color: var(--color-light);
`;

export const NewsDetailsFooter = styled.div`
  margin-top: 2.8rem;
  text-align: center;
  font-size: 1.5rem;
`;
