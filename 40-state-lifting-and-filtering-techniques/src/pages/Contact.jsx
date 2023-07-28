import { useState } from "react";
import ContactForm from "../component/ContactForm";
import Table from "../component/Table";

const Contact = () => {
  const [contacts, setContacts] = useState([]);

  const getContact = (contact) => {
    setContacts([].concat(contacts, contact));
  };

  return (
    <>
      <ContactForm getContact={getContact} />
      <Table contacts={contacts} />
    </>
  );
};

export default Contact;
