import { useState, useEffect } from 'react'
import ContactList from './components/ContactList'
import './App.css'
import SelectedContact from './components/SelectedContact'
const API_URL = 'https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users'


function App() {
  
  const [contacts, setContacts] = useState([]);
  const [selectedContactId, setSelectedContactId] = useState(null);
  
  console.log('select contact id:', selectedContactId)

  // happens after component has mounted
  // once state updates, renders again
  useEffect(() => {
    const fetchContacts = async () => {
        try {
            let response = await fetch(API_URL);
            let contacts = await response.json();
            console.log('contacts:', contacts)
            setContacts(contacts);

        } catch (error) {
            console.log('error!');
        }
    }
    fetchContacts();
},[])
  
  // ContactList and SelectedContact are children
  return (
    <div>
      <ContactList contacts={contacts} setSelectedContactId={setSelectedContactId}/>
      <SelectedContact 
        contacts={contacts} 
        setSelectedContactId={setSelectedContactId} 
        selectedContactId={selectedContactId}
      />
    </div>
  )
}

export default App

// setSelectedContactId={setSelectedContactId}