import styled from "styled-components";

export const AboutUsWrapper = styled.div`
    /* margin-top: 0em; */
    margin-left: 20rem;
`

export const AboutUsHeading = styled.h2`
    margin-top: 6rem;
    text-align: center;
`

export const TeamWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    margin-top: 2rem;
`

export const DevWrapper = styled.div`
    grid-column: span 4;
    display: grid;
    grid-template-rows: repeat(8, 1fr);
    justify-content: center;
    /* border: 1px solid var(--color-light); */
    margin: 1rem;
    padding: 1rem;
    border-radius: .5rem;
    background: var(--color-bg-variant);
    /* height: 20rem; */
    transition: var(--transition);

    &:hover {
        background: var(--color-bg);
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.6);
    }
`

export const DevName = styled.h3`
    margin-bottom: 1rem;
    grid-row: span 1;
    text-align: center;
`

export const DevPicture = styled.div`
    background-image: url(${props => props.image});
    background-size: cover;
    grid-row: span 5;
    /* background-position: center; */
    border: 1px solid var(--color-white);
    border-radius: 50%;
    width: 250px;
    height: 250px;
    /* align-items: center; */
    /* margin-top: 2rem; */
    margin-bottom: 3rem;
    margin-left: 1.5rem;
    /* text-align: center; */
`

export const DevInfo = styled.div`
    text-align: left;
    color: var(--color-light);
`
