import { Form, H1 } from './styled';
import Header from '../../Header';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Edit() {
  const [contact, setContact] = useState([]);
  const [newContact, setNewContact] = useState([]);

    const {id} = useParams();
    let navigate = useNavigate();
    useEffect(() => {
    async function getData(id) {
      try {
        const response = await axios.get(`http://localhost:3001/contact/${id}`);
        const data = response.data.data;
        setContact(data);

      } catch (error) {
        console.log(error)
      }
      
    }
    
    getData(id);
  }, [id]);


  async function handleEdit(e){
    e.preventDefault()
    try {
     const response = await axios.put(`http://localhost:3001/contact/edit/${id}`, newContact);
     response ? navigate("/", {}) : console.log("Não foi possível atualizar o contato")

    } catch (error) {
      console.log(error);
    }

  }
    function inputChangedHandler(event) {
    setNewContact((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));
  };
  
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
            <label htmlFor="nome">
              Primeiro Nome:
              <input
                type="text"
                name="First_Name"
                defaultValue={contact.First_Name || ''} 
                onChange={inputChangedHandler}/>
            </label>

            <label htmlFor="nome">
              E-mail:
              <input
                type="email" 
                name="Email"
                defaultValue={contact.Email || ''} 
                onChange={inputChangedHandler}/>
            </label>

            <label htmlFor="nome">
              Telefone:
              <input
                type="text" 
                name="Phone"
                defaultValue={contact.Phone || ''} 
                onChange={inputChangedHandler}/>
            </label>

            <label htmlFor="nome">
              Outro Telefone:
              <input
                type="text" 
                name="Other_Phone"
                defaultValue={contact.Other_Phone || ''}
                onChange={inputChangedHandler}/>
            </label>

            <label htmlFor="nome">
              Celular:
              <input
                type="text" 
                name="Mobile"
                defaultValue={contact.Mobile || ''}
                onChange={inputChangedHandler}/>
            </label>

            <label htmlFor="nome">
              Assistente:
              <input
                type="text"
                name="Assistant"
                defaultValue={contact.Assistant || ''}
                onChange={inputChangedHandler}/>
            </label>
          </div>
          <div className='AsideLeft'>
              <label htmlFor="nome">
                Fonte de Cliente potencial:
                <input
                  type="text" 
                  onChange={inputChangedHandler}/>
              </label>

              <label htmlFor="nome">
                Sobrenome:
                <input
                  type="text" 
                  name="Last_Name"
                  defaultValue={contact.Last_Name || ''}
                  onChange={inputChangedHandler}/>
              </label>

              <label htmlFor="nome">
                Título:
                <input
                  type="text" 
                  name="Title"
                  defaultValue={contact.Title || ''}
                  onChange={inputChangedHandler}/>
              </label>

              <label htmlFor="nome">
                Departamento:
                <input
                  type="text" 
                  name="Department"
                  defaultValue={contact.Department || ''}
                  onChange={inputChangedHandler}/>
              </label>

              <label htmlFor="nome">
                Telefone Residencial:
                <input
                  type="text" 
                  name="Home_Phone"
                  defaultValue={contact.Home_Phone || ''}
                  onChange={inputChangedHandler}/>
              </label>

              <label htmlFor="nome">
                Fax:
                <input
                  type="text" 
                  name="Fax"
                  defaultValue={contact.Fax || ''}
                  onChange={inputChangedHandler}/>
              </label>

              <label htmlFor="nome">
                Data de Nascimento:
                <input
                  type="date" 
                  name="Date_of_Birth"
                  defaultValue={contact.Date_of_Birth} 
                  onChange={inputChangedHandler}/>
              </label>

              <label htmlFor="nome">
                Telefone do Assist.:
                <input
                  type="text" 
                  name="Asst_Phone"
                  defaultValue={contact.Asst_Phone || ''}
                  onChange={inputChangedHandler}/>
              </label>

              <label htmlFor="nome">
                ID do Skype:
                <input
                  type="text" 
                  name="Skype_ID"
                  defaultValue={contact.Skype_ID || ''}
                  onChange={inputChangedHandler}/>
              </label>
              <label htmlFor="nome">
                E-mail secundário:
                <input
                  type="text" 
                  name="Secondary_Email"
                  defaultValue={contact.Secondary_Email || ''}
                  onChange={inputChangedHandler}/>
              </label>

              <label htmlFor="nome">
                Twitter:
                <input
                  type="text" 
                  name="Twitter"
                  defaultValue={contact.Twitter || ''}
                  onChange={inputChangedHandler}/>
              </label>
            </div>
            <div className='AsideRightDown'>
              <h3>Informações de Indereço</h3>
              <label htmlFor="nome">
                Rua de Correspondência:
                <input
                  type="text"
                  name="Mailing_Street" 
                  defaultValue={contact.Mailing_Street || ''}
                  onChange={inputChangedHandler}/>
              </label>

              <label htmlFor="nome">
                Cidade de Correspondência:
                <input
                  type="text" 
                  name="Mailing_City"
                  defaultValue={contact.Mailing_City || ''}
                  onChange={inputChangedHandler}/>
              </label>

              <label htmlFor="nome">
                Estado de Correspondência:
                <input
                  type="text" 
                  name="Mailing_State"
                  defaultValue={contact.Mailing_State || ''}
                  onChange={inputChangedHandler}/>
              </label>

              <label htmlFor="nome">
                CEP de Correspondência:
                <input
                  type="text" 
                  name="Mailing_Zip"
                  value={contact.Mailing_Zip || ''}
                  onChange={inputChangedHandler}/>
              </label>

              <label htmlFor="nome">
                País de Correspondência:
                <input
                  type="text" 
                  name="Mailing_Country"
                  value={contact.Mailing_Country || ''}
                  onChange={inputChangedHandler}/>
              </label>
            </div><div className='AsideLeftDown'>
              <label htmlFor="nome">
                Outra rua:
                <input
                  type="text" 
                  name="Other_Street"
                  value={contact.Other_Street || ''}
                  onChange={inputChangedHandler}/>
              </label>

              <label htmlFor="nome">
                Outra Cidade:
                <input
                  type="text"
                  name="Other_City" 
                  value={contact.Other_City || ''}
                  onChange={inputChangedHandler}/>
              </label>

              <label htmlFor="nome">
                Outro Estado:
                <input
                  type="text"
                  name="Other_State"  
                  value={contact.Other_State || ''}
                  onChange={inputChangedHandler}/>
              </label>

              <label htmlFor="nome">
                Outro Cep:
                <input
                  type="text"
                  name="Other_Zip" 
                  value={contact.Other_Zip || ''}
                  onChange={inputChangedHandler}/>
              </label>

              <label htmlFor="nome">
                Outro País:
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
    </ >
  );
}
