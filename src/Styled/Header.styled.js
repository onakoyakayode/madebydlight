import styled from "styled-components";




export const HeaderStyled = styled.header`
    display: flex;
    align-items: flex-start;
    height: 100vh;
    width: 100%;
    margin: 0 auto;
    
          
    @media only screen and (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        margin: 0;
        height: 100vh;
        width: 100%;

        .reverse {
            flex-direction: column-reverse;
        }
    }

    @media only screen and (min-width: 600px) and (max-width: 900px) {
        flex-direction: column;
        align-items: center;
        margin: 0;
        height: 100vh;
        width: 100%;

        .reverse {
            flex-direction: column-reverse;
        }
    }

    @media only screen and (min-width: 900px) and (max-width: 1200px) {
        height: 60vh;
    }

    @media only screen and (min-width: 1200px) {
        height: 95vh;

    }

    .social-item {
        gap: 25px;

        @media only screen and (max-width: 600px) {
            gap: auto;
        }

        @media only screen and (min-width: 600px) and (max-width: 900px) {
            gap: auto;
        }

        li a {
            border-radius: 100%;
            width: 3.5em;
            height: 3.5em;
            display: flex;
            align-items: center;
            justify-content: center; 
            transition: all 0.4s ease-in-out; 

            @media only screen and (max-width: 600px)  {
                width: 3rem;
                height: 3rem;
            }

            @media only screen and (min-width: 600px) and (max-width: 900px) {
                width: 3.3rem;
                height: 3.3rem;
            }

            

            &:hover {
                color: #fff;
                background: #000;
                transform: translateY(-10px);
            }
        }

        a {
            background: #fff;
        }

        .social-icon {
            width: 2.5em;
            height: 2.5em;

            @media only screen and (max-width: 600px) {
                width: 1.8rem;
                height: 1.8rem;
            }
            

            @media only screen and (min-width: 600px) and (max-width: 900px) {
                width: 2.2rem;
                height: 2.2rem
            }
        }
    }


    .header-1 {
        max-width: 50%;
        width: 100%;
        overflow: hidden;
        height: 100%;

        @media only screen and (max-width: 600px) {
            max-width: 100%;
            width: 100%;
            height: 50vh;
        }

        @media only screen and (min-width: 600px) and (max-width: 900px) {
            max-width: 100%;
            width: 100%;
        }

        @media only screen and (min-width: 900px) and (max-width: 1200px) {
            height: 60vh;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            animation: animatename 1s linear;

            @keyframes animatename{
                0%{
                  transform: scale(1.05);
                }
                100%{
                  transform: scale(1);
                }
            }

            @media only screen and (max-width: 600px)  {
                width: 100%;
                height: 50vh;
                object-fit: cover;
            }
        }
    }


    .header-2 {
        background: var(--MainBgColor);
        max-width: 50%;
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 0 100px;

        @media only screen and (max-width: 600px) {
            max-width: 100%;
            align-items: flex-start;
            padding: 20px;
            height: 50vh;
        }

        @media only screen and (min-width: 600px) and (max-width: 900px) {
            max-width: 100%;
            width: 100%;
            align-items: flex-start;
            padding: 0 50px;
            height: 95vh;
        }

        @media only screen and (min-width: 900px) and (max-width: 1200px) {
            height: 60vh;
            padding: 0 50px;
        }

        @media only screen and (min-width: 1200px) {
            padding: 0 60px;
            max-width: 50%;
        }

        .header-2-title {
            font-size: var(--BigFontSize);
            font-weight: 700;
            text-transform: capitalize;

            @media only screen and (max-width: 600px) {
                font-size: 1.9rem;
            }

            @media only screen and (min-width: 900px) and (max-width: 1200px) {
                font-size: 2.5rem;
            }
        }

        p {
            font-size: var(--SmallestFontSize);
            font-weight: 300;
            line-height: 1.4em;
            margin: 3rem 0 4rem;

            @media only screen and (max-width: 600px) {
                line-height: 1.4;
                margin: 2rem 0 3rem;
                font-size: 1rem;
            }

            @media only screen and (min-width: 900px) and (max-width: 1200px) {
                font-size: 1.1rem;
                margin: 3rem 0 5rem 0;
            }
        }
    }

    .female {
        background: #fff;

        .female-btn {
            background: var(--MainBgColor);

            &:hover {
                color: var(--MainBgColor);
                background: var(--TextColor);
            }
        }
    }

    .contact {
        background: var(--MainBgColor);


        @media only screen and (max-width: 600px) {
            height: 70vh;
        }

        @media only sreen and (min-width: 900px) and (max-width: 1200px) {
            height: 40vh;
        }

        @media only screen and (min-width: 1200px) {
            height: 95vh;
        }
    }

`