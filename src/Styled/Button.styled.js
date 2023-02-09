import styled from "styled-components";



export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    padding: 25px 40px;
    color: var(--TextColor);
    background-color: var(--bgColor);
    transition: 0.5s ease;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 1.2rem;
    gap: ${({gap}) => gap};

    @media only screen and (max-width: 600px) {
        border-radius: 5px;
        font-size: 1rem;
        padding: 10px 20px;
    }

    @media only screen and (min-width: 600px) and (max-width: 900px) {
        padding: 15px 20px;
        border-radius: 10px;
    }

    @media only screen and (min-width: 900px) and (max-width: 1200px) {
        border-radius: 20px;
        padding: 20px 30px
    }


    &:hover {
        color: var(--bgColor);
        background: var(--TextColor);
    }
`