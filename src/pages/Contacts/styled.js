import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const H1 = styled.h1`
    display: flex;
    justify-content: center;
`

export const NavLink = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  margin-left: 10px;

  
`;
export const ContactContainer = styled.div`
    display: grid;
    grid-template-columns:  1fr 1fr;
    margin-left: 15px;
    overflow-x: hidden;
    .edit{
    margin: 20px 0 20px 0;
    background-color: #FFF;
    border-radius: 5px;
    color: #4CAF50;
    cursor: pointer;
    display: block;
    font-family: Inter,-apple-system,system-ui,Roboto,"Helvetica Neue",Arial,sans-serif;
    height: 44px;
    outline: 0;
    overflow: hidden;
    padding: 0 20px;
    text-align: center;
    border-color: #4CAF50;
    }

    .delete{
    margin: 20px 0 20px 0;
    background-color: #FFF;
    border-radius: 5px;
    color: #d22e2e;
    cursor: pointer;
    display: block;
    font-family: Inter,-apple-system,system-ui,Roboto,"Helvetica Neue",Arial,sans-serif;
    height: 44px;
    outline: 0;
    overflow: hidden;
    padding: 0 20px;
    text-align: center;
    border-color: #d22e2e;
    }
    .delete:hover{
        background-color: #d22e2e;
        color: white;
    } 
    .edit:hover{
        background-color: #4CAF50; 
        color: white;
    }
    @media (max-width: 1366px){
        display: grid;
        grid-template-columns: 1fr;
    }
`;



export const InformationContainer = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   margin: 10px 10px 10px 10px;
   padding: 10px 10px 10px 10px;
   border: solid 1px gray;
   
   

   .containerInfo{
       display: grid;
       grid-template-columns: 1fr 1fr;
       margin-left: 10px;
   }

   .options{
        padding-top: 20px;
        display: flex;
        justify-content: space-around;
   }
`

export const OwnerData = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-left: 10px;
    width: 600px;
`

export const Gif = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`