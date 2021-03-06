import { Form, H1 } from './styled';
import Header from '../../Header';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Gif } from '../Contacts/styled';
import gif from '../Contacts/257.gif'

export default function Edit() {
  const [contact, setContact] = useState([]);
  const [newContact, setNewContact] = useState([]);

    //get the id from the parameters
    const {id} = useParams();
    let navigate = useNavigate();

    //get data from the endpoint
    useEffect(() => {
    async function getData(id) {
      try {
        const response = await axios.get(`http://localhost:3001/contact/${id}`);
        const data = response.data.data;
        setContact(data);
      } catch (error) {
        throw new Error(error)
      }
    }
    
    getData(id);
  }, [id]);

  //Send the newContact to the endPoint to update
  async function handleEdit(e){
    e.preventDefault()
    try {
     const response = await axios.put(`http://localhost:3001/contact/edit/${id}`, newContact);
     response ? navigate("/") : navigate(-1)
    } catch (error) {
      throw new Error(error)
    }
  }

  //get the previous values and observe the changes, all values are passed to setNewContact
  function inputChangedHandler(event) {
    setNewContact((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));
  };
  
  //goes back to the last page 
  function handleCancel(e) {
    e.preventDefault();
    navigate("/", {});
  }

  return (
    <>  
      <Header />
      <H1>Editar Contato</H1>
      {contact.map((contact) => (
      <Form key={contact.id}>
        <div className='AsideRight'>
            <label htmlFor="First_Name">
              Primeiro Nome:
              <input
                type="text"
                name="First_Name"
                defaultValue={contact.First_Name || ''} 
                onChange={inputChangedHandler}/>
            </label>

            <label htmlFor="Email">
              E-mail:
              <input
                type="email" 
                name="Email"
                defaultValue={contact.Email || ''} 
                onChange={inputChangedHandler}/>
            </label>

            <label htmlFor="Phone">
              Telefone:
              <input
                type="text" 
                name="Phone"
                defaultValue={contact.Phone || ''} 
                onChange={inputChangedHandler}/>
            </label>

            <label htmlFor="Other_Phone">
              Outro Telefone:
              <input
                type="text" 
                name="Other_Phone"
                defaultValue={contact.Other_Phone || ''}
                onChange={inputChangedHandler}/>
            </label>

            <label htmlFor="Mobile">
              Celular:
              <input
                type="text" 
                name="Mobile"
                defaultValue={contact.Mobile || ''}
                onChange={inputChangedHandler}/>
            </label>

            <label htmlFor="Assistant">
              Assistente:
              <input
                type="text"
                name="Assistant"
                defaultValue={contact.Assistant || ''}
                onChange={inputChangedHandler}/>
            </label>
          </div>
          <div className='AsideLeft'>
              <label htmlFor="Last_Name">
                Sobrenome:
                <input
                  type="text" 
                  name="Last_Name"
                  defaultValue={contact.Last_Name || ''}
                  onChange={inputChangedHandler}/>
              </label>

              <label htmlFor="Title">
                T??tulo:
                <input
                  type="text" 
                  name="Title"
                  defaultValue={contact.Title || ''}
                  onChange={inputChangedHandler}/>
              </label>

              <label htmlFor="Department">
                Departamento:
                <input
                  type="text" 
                  name="Department"
                  defaultValue={contact.Department || ''}
                  onChange={inputChangedHandler}/>
              </label>

              <label htmlFor="Home_Phone">
                Telefone Residencial:
                <input
                  type="text" 
                  name="Home_Phone"
                  defaultValue={contact.Home_Phone || ''}
                  onChange={inputChangedHandler}/>
              </label>

              <label htmlFor="Fax">
                Fax:
                <input
                  type="text" 
                  name="Fax"
                  defaultValue={contact.Fax || ''}
                  onChange={inputChangedHandler}/>
              </label>

              <label htmlFor="Date_of_Birth">
                Data de Nascimento:
                <input
                  type="date" 
                  name="Date_of_Birth"
                  defaultValue={contact.Date_of_Birth} 
                  onChange={inputChangedHandler}/>
              </label>

              <label htmlFor="Asst_Phone">
                Telefone do Assist.:
                <input
                  type="text" 
                  name="Asst_Phone"
                  defaultValue={contact.Asst_Phone || ''}
                  onChange={inputChangedHandler}/>
              </label>

              <label htmlFor="Skype_ID">
                ID do Skype:
                <input
                  type="text" 
                  name="Skype_ID"
                  defaultValue={contact.Skype_ID || ''}
                  onChange={inputChangedHandler}/>
              </label>
              <label htmlFor="Secondary_Email">
                E-mail secund??rio:
                <input
                  type="text" 
                  name="Secondary_Email"
                  defaultValue={contact.Secondary_Email || ''}
                  onChange={inputChangedHandler}/>
              </label>

              <label htmlFor="Twitter">
                Twitter:
                <input
                  type="text" 
                  name="Twitter"
                  defaultValue={contact.Twitter || ''}
                  onChange={inputChangedHandler}/>
              </label>
            </div>
            <div className='AsideRightDown'>
              <h3>Informa????es de Indere??o</h3>
              <label htmlFor="Mailing_Street">
                Rua de Correspond??ncia:
                <input
                  type="text"
                  name="Mailing_Street" 
                  defaultValue={contact.Mailing_Street || ''}
                  onChange={inputChangedHandler}/>
              </label>

              <label htmlFor="ailing_City">
                Cidade de Correspond??ncia:
                <input
                  type="text" 
                  name="Mailing_City"
                  defaultValue={contact.Mailing_City || ''}
                  onChange={inputChangedHandler}/>
              </label>

              <label htmlFor="Mailing_State">
                Estado de Correspond??ncia:
                <input
                  type="text" 
                  name="Mailing_State"
                  defaultValue={contact.Mailing_State || ''}
                  onChange={inputChangedHandler}/>
              </label>

              <label htmlFor="Mailing_Zip">
                CEP de Correspond??ncia:
                <input
                  type="text" 
                  name="Mailing_Zip"
                  value={contact.Mailing_Zip || ''}
                  onChange={inputChangedHandler}/>
              </label>

              <label htmlFor="Mailing_Country">
                Pa??s de Correspond??ncia:
                <input
                  type="text" 
                  name="Mailing_Country"
                  value={contact.Mailing_Country || ''}
                  onChange={inputChangedHandler}/>
              </label>
            </div><div className='AsideLeftDown'>
              <label htmlFor="ther_Street">
                Outra rua:
                <input
                  type="text" 
                  name="Other_Street"
                  value={contact.Other_Street || ''}
                  onChange={inputChangedHandler}/>
              </label>

              <label htmlFor="Other_City">
                Outra Cidade:
                <input
                  type="text"
                  name="Other_City" 
                  value={contact.Other_City || ''}
                  onChange={inputChangedHandler}/>
              </label>

              <label htmlFor="Other_State">
                Outro Estado:
                <input
                  type="text"
                  name="Other_State"  
                  value={contact.Other_State || ''}
                  onChange={inputChangedHandler}/>
              </label>

              <label htmlFor="Other_Zip">
                Outro Cep:
                <input
                  type="text"
                  name="Other_Zip" 
                  value={contact.Other_Zip || ''}
                  onChange={inputChangedHandler}/>
              </label>

              <label htmlFor="Other_Country">
                Outro Pa??s:
                <input
                  type="text" 
                  name="Other_Country" 
                  value={contact.Other_Country || ''}
                  onChange={inputChangedHandler}/>
              </label>
              <a href='/' onClick={(e) => handleEdit(e)} className='btnSave' type="submit">Salvar</a>
              <a href='/' className='btnCancel' onClick={(e) => handleCancel(e)} type="submit">Cancelar</a>
            </div>
      </Form>
      ))}

      {contact.length <= 0 &&
        <Gif>
          <img src={gif} alt="loading"/>
        </Gif>
      }
    </ >
  );
}
