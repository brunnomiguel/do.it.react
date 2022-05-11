import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 250px;
    height: 250px;
    padding: 16px;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
    border: 1px solid var(--black);
    border-radius: 8px;

    background-color: var(--white);
    color: var(--black);

    hr{
        width: 80%;
        border: 1px solid var(--black);
        margin: 16px 0px;
    }
    button {
        margin-top: 80px;
    }
    svg {
        font-size: 1.1rem;
        color: var(--orange);
        margin-right: 4px;
        transform: translateY(3px);
    }
`