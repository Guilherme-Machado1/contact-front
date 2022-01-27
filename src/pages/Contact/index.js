import Header from "../../Header"
import {Container, Div, InformationDiv} from './styled'
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function Contact() {
    const [contact, setContact] = useState([]);
    const {id} = useParams();
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

    return (
        <>
            <Header />
                    <h1>Visão geral</h1>
                    {contact.map((contactId) => (
                <Container key={contactId.id} >
                        
                        <Div>
                            <p>Proprietário do Contato: {contactId.Owner.name || '-'}</p>
                            <p>E-mail: {contactId.Email || '-' }</p>
                            <p>Telefone {contactId.Phone || '-'}</p>
                            <p>Outro Telefone {contactId.Other_Phone || '-'}</p>
                            <p>Celular: {contactId.Mobile || '-'}</p>
                            <p>Assistente: {contactId.Assistant || '-'}</p>
                            <p>Criado Por: {contactId.Created_By.name}</p>
                            <p>Modificado Por: {contactId.Modified_By.name}</p>
                        </Div>
                        <Div>
                            <p>Nome Contato: {contactId.Full_Name || '-'}</p>
                            <p>Título: {contactId.Title || '-'}</p>
                            <p>Departamento: {contactId.Department || '-'}</p>
                            <p>Telefone Residencial: {contactId.Home_Phone || '-'}</p>
                            <p>Fax: {contactId.Fax || '-'} </p>
                            <p>Data de Nascimento: {contactId.Date_of_Birth || '-'}</p>
                            <p>Telefone do Assist. : {contactId.Asst_Phone || '-'}</p>
                            <p>Opção de Sair do E-mail</p>
                            <p>ID do Skype: {contactId.Skype_ID || '-'}</p>
                            <p>E-mail secundário: {contactId.Secondary_Email || '-'}</p>
                            <p>Reportando-se a: {contactId.Reporting_To || '-'}</p>
                        </Div>
                        <Div>
                            <h3>Informações De endereço</h3>
                            <div>
                                <p>Rua de Correspondência: {contactId.Mailing_Street || '-'}</p>
                                <p>Cidade de Correspondência: {contactId.Mailing_City || '-'}</p>
                                <p>Estado de Correspondência: {contactId.Mailing_State || '-'}</p>
                                <p>CEP de Correspondência: {contactId.Mailing_Zip || '-'} </p>
                                <p>País de Correspondência: {contactId.Mailing_Country || '-'}</p>
                                <div>
                                    <h3>Descrição Informações</h3>
                                    <p>Descrição: {contactId.Description || '-'} </p>
                                </div>
                            </div>
                        </Div>
                        <Div>
                            <p className="padding">Outra rua: {contactId.Other_Street || '-'}</p>
                            <p>Outra Cidade: {contactId.Other_City || '-'}</p>
                            <p>Outro Estado: {contactId.Other_State || '-'}</p>
                            <p>Outro Cep: {contactId.Other_Zip || '-'}</p>
                            <p>Outro País: {contactId.Other_Country || '-'}</p>
                        </Div>
                    
                </Container>
                ))}
            </>
        
    )
}