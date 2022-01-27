import styled from 'styled-components';

export const Form = styled.form`
  display: grid;
  grid: auto / auto auto;
  .AsideRight, .AsideRightDown{
    display: flex;
    flex-direction: column;
     align-items: flex-end;
    justify-content: space-evenly; 
    margin: 0 auto 0 auto;
  }

  .AsideLeft, .AsideLeftDown{
    display: flex;
    flex-direction: column;
    align-items: flex-end; 
    justify-content: space-evenly;
    margin-right: auto;
    padding:  25px 0 0 15px;
  }

  .AsideLeftDown{
    padding-top: 125px;
    .btnSave {
    margin: 20px 0 20px 0;
    background-color: #00c36b;
    border-radius: 5px;
    color: #FFFFFF;
    cursor: pointer;
    display: block;
    font-family: Inter,-apple-system,system-ui,Roboto,"Helvetica Neue",Arial,sans-serif;
    height: 44px;
    outline: 0;
    overflow: hidden;
    padding: 0 20px;
    text-align: center; 
    width: 100%;
    border: none;
    }
    .btnSave:hover {
    background: #00bd68;
    }

    .btnCancel{
      margin: 20px 0 20px 0;
    background-color: gray;
    border-radius: 5px;
    color: #FFFFFF;
    cursor: pointer;
    display: block;
    font-family: Inter,-apple-system,system-ui,Roboto,"Helvetica Neue",Arial,sans-serif;
    height: 44px;
    outline: 0;
    overflow: hidden;
    padding: 0 20px;
    text-align: center; 
    width: 100%;
    border: none;
    }

    .btn:hover {
    background: #FFFF00;
    }
  }


  label {
    display: block;
  }  
  

  input {
    height: 40px;
    font-size: 18px;
    border: 1px solid #ddd;
    padding: 0 10px;
    border-radius: 4px;
    margin-top: 5px;
    margin-left: 15px;

    &:focus {
      border: 1px solid #000;
    }
  }
  
`;

export const H1 = styled.h1`
  text-align: center;
`





