import styled from "styled-components";

export const Main = styled.main`
    margin: 0 auto;
    max-width:100%;
    width: 1200px;
`;

export const CardContainer = styled.div`
    background: rgba(255, 255, 255, .5);
    max-width:100%;
    width: 1000px;
    margin: 0 auto;
    padding-top: 60px;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
`;

export const Cards = styled.div`
    display:flex;
    flex-direction: column;
    border-radius: 5px;
    background: white;
    max-width:100%;
    width: 600px;
    margin: 10px;
`;

export const Header = styled.header`
    font-size: 26px;
    font-weight: 600;
    margin: 30px 0 0;
`;

export const SubHeader = styled.h2`
    font-size: 20px;
    font-weight: 500;
`;

export const Description = styled.div`
    display:flex;
    font-size:18px;
    margin: 0 auto;
    padding: 10px;
    width: 400px;
`;

export const Left = styled.div`
    font-weight:700px;
    width:50%;
`;

export const Right = styled.div`
    width:50%;
`;