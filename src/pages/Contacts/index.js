import axios from 'axios';
import {useState, useEffect} from "react";
import { ContactContainer, ProfilePicture, InformationContainer, OwnerData, NavLink , Gif, H1} from "./styled";
import logo from './teste.jpg'
import Header from "../../Header";
import gif from './257.gif';
export default function Contacts() {
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get('http://localhost:3001/contact');
        // console.log(response.data.data)
        setContacts(response.data.data);

      } catch (error) {
        console.log(error)
      }
      
    }

    getData();
  }, []);


  async function handleDeleteContact (e, id, index) {
    e.persist();
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
            <H1>Todos Os Contatos</H1>
               <ContactContainer >
                 {contacts.map((contact, index) => (
                    <InformationContainer key={String(contact.id)}>
                        <div>
                          <OwnerData>
                            <ProfilePicture>
                              <img alt="logo" width={69}  src={logo}/>
                            </ProfilePicture>
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
                                  <button className="delete" onClick={e => handleDeleteContact(e, contact.id, index)}> Excluir </button>
                              </div>
                            </div>
                        </div>
                    </InformationContainer>
                ))}
               </ContactContainer>
               {contacts.length <= 0 &&
                <Gif>
                  <img src={gif} alt="loading"/>
                </Gif>
               }
        </>
    )
}