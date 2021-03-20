import styled from "styled-components";

export const Container = styled.div`

    position: relative;
    img{
        filter: brightness(0.4);
    }

    div {
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        position: absolute;
        text-align: center;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        h1{
            font-size: 3.8rem;
            color: white;
            letter-spacing: 0.1rem;
            line-height: 6rem;
        }
        h3{
            font-size: 1.5rem;
            color: rgba(256,256,256, 0.8);
            letter-spacing: 0.1rem;
        }
    }

`;
