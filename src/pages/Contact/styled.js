import styled from "styled-components";

export const Container = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 10px;
`;

export const Div = styled.div`
    border: solid 1px gray;
    padding-left: 10px;
    border-left: none;
    border-bottom: none; 
    border-right: none; 
    .padding{
        padding-top: 45px;
    }
`;

export const InformationDiv = styled.div`
    border: solid 1px gray;
    padding-left: 10px;
    border-left: none;
    border-bottom: none; 
    border-right: none; 
`;