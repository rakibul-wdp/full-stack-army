import { useState } from "react";
import ContactForm from "../component/ContactForm";

const Contact = () => {
  const [contacts, setContacts] = useState([]);

  const getContact = (contact) => {
    setContacts([].concat(contacts, contact));
  };
  console.log(contacts);

  return <ContactForm getContact={getContact} />;
};

export default Contact;
