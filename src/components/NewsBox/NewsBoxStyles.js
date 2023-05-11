import styled from "styled-components";

export const NewsBoxContainer = styled.div`
    margin-left: 2rem;
    margin-right: 2rem;
    background: var(--color-bg-variant);
    border-radius: 2rem;
    padding: 2rem;
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    transition: var(--transition);
    cursor: default;
    height: 17.5rem;

    &:hover {
        cursor: pointer;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.6);
    background-color: var(--color-bg);
    }
`

export const NewsBoxHeader = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
`

export const NewsTitleDescHeader = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    margin-bottom: .5rem;
    color: var(--color-white);
    padding-right: 1rem;
    width: 70%;
`

export const NewsBoxTitle = styled.h2`
`

export const NewsBoxImage = styled.div`
  background: var(--color-bg);
  margin-bottom: 1rem;
  width: 25%;
    height: 8rem;
    border: 1px solid black;
    margin-left: 2rem;
    border-radius: 1rem;

    img {
        border-radius: 1rem;
        height: 8rem;
    }
`

export const NewsBoxContent = styled.div`
    font-size: medium;
`


export const NewsBoxFooter = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
`

export const NewsDate = styled.p`
    font-size: 1rem;
` 

export const NewsLikeIcon = styled.div`
    margin-left: auto;
`