import { ContactForm } from '../Form/Form';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { Container } from './App.styled';
import { useSelector } from 'react-redux';

export function App() {
  const contacts = useSelector(state => state.contacts.contacts);
  // useEffect(() => {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);
  //   setContacts(parsedContacts);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <Container>
      <h3>Phonebook</h3>
      <ContactForm />
      <h3>Contacts</h3>
      {contacts.length !== 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <p>"Your phonebook is empty"</p>
      )}
    </Container>
  );
}

