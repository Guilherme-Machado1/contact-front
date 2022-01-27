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
        background-color: white;
        color: black;
        font-size: 18px;
        border: 2px solid #4CAF50; 
        transition-duration: 0.4s;
    }

    .delete{
        background-color: white;
        color: black;
        font-size: 18px;
        border: 2px solid #d22e2e;
    }
    .delete:hover{
        background-color: #d22e2e; /* Green */
        color: white;
    } 
    .edit:hover{
        background-color: #4CAF50; /* Green */
        color: white;
    }
    @media (max-width: 1366px){
        display: grid;
        grid-template-columns: 1fr;
    }
`;

export const ProfilePicture = styled.div`
    margin: 15px 0 0 15px;
    width: 69px;
    height: 69px;
    
`


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
    width: 600px;
`

export const Gif = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`