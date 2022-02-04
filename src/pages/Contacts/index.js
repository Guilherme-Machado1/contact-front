import axios from 'axios';
import {useState, useEffect} from "react";
import { ContactContainer, InformationContainer, OwnerData, NavLink , H1} from "./styled";
import Header from "../../Header";
export default function Contacts() {
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get('http://localhost:3001/contact');
        setContacts(response.data.data);
      } catch (error) {
        throw new Error(error)
      }
    }

    getData();
  }, []);


  async function handleDeleteContact (id, index) {
    try {
      await axios.delete(`http://localhost:3001/contact/delete/${id}`);
      const newContacts = [...contacts];
      newContacts.splice(index, 1);
      setContacts(newContacts);
    } catch (error) {
      console.log(error)
    }
  }
  
    return (
      <>
        <Header />
          <ContactContainer >
        
         {!contacts &&
            <H1> Não foram achados contatos </H1>
            return
         }
          {contacts.map((contact, index) => (
            <InformationContainer key={String(contact.id)}>
              <div>
                <OwnerData>
                  <p> {contact.Owner.name}</p>
                  <p>{contact.Created_Time}</p>
                </OwnerData>
                  <div>
                    <NavLink to={`/contact/${contact.id}`}>
                      <h2> {contact.Last_Name}</h2>
                    </NavLink>
                  </div>
                  <div className="containerInfo">
                    <label>Nome Completo:</label>
                    <span> {contact.Full_Name}</span>
                    <label>Email:</label>
                    <span> {contact.Email || '-'}</span>
                    <label>Telefone:</label>
                    <span> {contact.Phone || '-'}</span>
                    <label>Title:</label>
                    <span> {contact.Title || '-'}</span>
                    <label>Celular:</label>
                    <span> {contact.Mobile || '-'}</span>
                    <div className="options">
                      <NavLink to={`/contact/edit/${contact.id}`}>
                        <button className="edit"> Editar </button>
                      </NavLink>
                          <button className="delete" onClick={e => handleDeleteContact(contact.id, index)}> Excluir </button>
                    </div>
                  </div>
              </div>
                    </InformationContainer>
                ))}
          </ContactContainer>
      </>
    )
}
