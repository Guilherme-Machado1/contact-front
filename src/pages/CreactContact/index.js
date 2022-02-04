import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Header from '../../Header';
import { Form, H1 } from '../Edit/styled';
function CreateContact() {
    const [newContact, setNewContact] = useState([]);
    const navigate = useNavigate();

    //get the previous values and observe the changes, all values are passed to setNewContact
    function handleChange(event) {
        setNewContact((prevValues) => ({
          ...prevValues,
          [event.target.name]: event.target.value,
        }));
    }

    //Sends form to backend and redirects to Contact view page
    async function handleSubmit (event) {
      event.preventDefault();
      try {
        const response = await axios.post(`http://localhost:3001/contact/create`, newContact);
        const id = response.data.details.id;
        navigate(`/contact/${id}`, { replace: true });
      } catch (error) {
        throw new Error(error)
      }  
    }

    //goes back to main page
    function handleCancel(e) {
        e.preventDefault();
        navigate(-1);
      }
    return ( 
        <>
          <Header />
          <H1>Criar contato</H1>
          <Form>
            <div className='AsideRight'>
              <label htmlFor="First_Name">
                Primeiro Nome:
                <input
                  type="text"
                  name="First_Name"
                  defaultValue={''}
                  onChange={handleChange}
                  />
              </label>

              <label htmlFor="Email">
                E-mail:
                <input
                  type="email" 
                  name="Email"
                  defaultValue={''}
                  onChange={handleChange} 
                  />
              </label>

              <label htmlFor="Phone">
                Telefone:
                <input
                  type="text" 
                  name="Phone"
                  defaultValue={''} 
                  onChange={handleChange}
                  />
              </label>

              <label htmlFor="Other_Phone">
                Outro Telefone:
                <input
                  type="text" 
                  name="Other_Phone"
                  defaultValue={''}
                  onChange={handleChange}
                  />
              </label>

              <label htmlFor="Mobile">
                Celular:
                <input
                  type="text" 
                  name="Mobile"
                  defaultValue={''}
                  onChange={handleChange}
                  />
              </label>

              <label htmlFor="Assistant">
                Assistente:
                <input
                  type="text"
                  name="Assistant"
                  defaultValue={''}
                  onChange={handleChange}
                  />
              </label>
            </div>
            <div className='AsideLeft'>
              <label htmlFor="Last_Name">
                Sobrenome:
                <input
                  type="text" 
                  name="Last_Name"
                  defaultValue={''}
                  onChange={handleChange}
                  required={true}
                  />
              </label>

              <label htmlFor="Title">
                Título:
                <input
                  type="text" 
                  name="Title"
                  defaultValue={''}
                  onChange={handleChange}
                  />
              </label>

              <label htmlFor="Department">
                Departamento:
                <input
                  type="text" 
                  name="Department"
                  defaultValue={''}
                  onChange={handleChange}
                  />
              </label>

              <label htmlFor="Home_Phone">
                Telefone Residencial:
                <input
                  type="text" 
                  name="Home_Phone"
                  defaultValue={''}
                  onChange={handleChange}
                  />
              </label>

              <label htmlFor="Fax">
                Fax:
                <input
                  type="text" 
                  name="Fax"
                  defaultValue={''}
                  onChange={handleChange}
                  />
              </label>

              <label htmlFor="Date_of_Birth">
                Data de Nascimento:
                <input
                  type="date" 
                  name="Date_of_Birth"
                  defaultValue={''} 
                  onChange={handleChange}
                  />
              </label>

              <label htmlFor="Asst_Phone">
                Telefone do Assist.:
                <input
                  type="text" 
                  name="Asst_Phone"
                  defaultValue={''}
                  onChange={handleChange}
                  />
              </label>

              <label htmlFor="Skype_ID">
                ID do Skype:
                <input
                  type="text" 
                  name="Skype_ID"
                  defaultValue={''}
                  onChange={handleChange}
                  />
              </label>
              <label htmlFor="Secondary_Email">
                E-mail secundário:
                <input
                  type="text" 
                  name="Secondary_Email"
                  defaultValue={''}

                  />
              </label>

              <label htmlFor="Twitter">
                Twitter:
                <input
                  type="text" 
                  name="Twitter"
                  defaultValue={''}
                  onChange={handleChange}
                  />
              </label>
            </div>
            <div className='AsideRightDown'>
              <h3>Informações de Endereço</h3>
              <label htmlFor="nome">
                Rua de Correspondência:
                <input
                  type="text"
                  name="Mailing_Street" 
                  defaultValue={''}
                  onChange={handleChange}
                  />
              </label>

              <label htmlFor="nome">
                Cidade de Correspondência:
                <input
                  type="text" 
                  name="Mailing_City"
                  defaultValue={''}
                  onChange={handleChange}
                  />
              </label>

              <label htmlFor="nome">
                Estado de Correspondência:
                <input
                  type="text" 
                  name="Mailing_State"
                  defaultValue={''}
                  onChange={handleChange}
                  />
              </label>

              <label htmlFor="nome">
                CEP de Correspondência:
                <input
                  type="text" 
                  name="Mailing_Zip"
                  defaultValue={''}
                  onChange={handleChange}
                  />
              </label>

              <label htmlFor="nome">
                País de Correspondência:
                <input
                  type="text" 
                  name="Mailing_Country"
                  defaultValue={''}
                  onChange={handleChange}
                  />
              </label>
            </div>
            <div className='AsideLeftDown'>
              <label htmlFor="nome">
                Outra rua:
                <input
                  type="text" 
                  name="Other_Street"
                  defaultValue={''}
                  onChange={handleChange}
                  />
              </label>

              <label htmlFor="nome">
                Outra Cidade:
                <input
                  type="text"
                  name="Other_City" 
                  defaultValue={''}
                  onChange={handleChange}
                  />
              </label>

              <label htmlFor="nome">
                Outro Estado:
                <input
                  type="text"
                  name="Other_State"  
                  defaultValue={''}
                  onChange={handleChange}
                  />
              </label>

              <label htmlFor="nome">
                Outro Cep:
                <input
                  type="text"
                  name="Other_Zip" 
                  defaultValue={''}
                  onChange={handleChange}
                  />
              </label>

              <label htmlFor="nome">
                Outro País:
                <input
                  type="text" 
                  name="Other_Country" 
                  defaultValue={''}
                  onChange={handleChange}
                  />
              </label>
              <a href='/'  className='btnSave' onClick={(e) => handleSubmit(e)} type="submit">Salvar</a>
              <a href='/' className='btnCancel' onClick={(e) => handleCancel(e)} type="submit">Cancelar</a>
            </div>
          </Form>
        </>
    );
}

export default CreateContact;
