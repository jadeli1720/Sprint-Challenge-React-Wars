import styled from "styled-components";

export const Main = styled.main`
    margin: 0 auto;
    border:1px solid red;
    max-width:100%;
    width: 1200px;
    display:flex;
    flex-direction: column;
    flex: wrap;
    justify-content:center;
`;

export const CardContainer = styled.div`
    margin: 0 auto;
    border: 1px solid green;
    max-width:100%;
    width: 1000px;
    /* display:flex;
    flex: wrap;
    justify-content:flex-start; */
`;

export const Cards = styled.div`
    display:flex;
    flex-direction: column;
    border: 1px solid blue;
    background: white;
    max-width:100%;
    width: 300px;
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
    /* justify-content: space-around; */
    padding: 10px;
`;

export const Left = styled.div`
    width:50%;
    border: 1px solid purple;
`;

export const Right = styled.div`
    width:50%;
    border: 1px solid hotpink;
`;