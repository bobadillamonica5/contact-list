import React from "react";
import { useState } from 'react';
import ContactRow from "./ContactRow";
import { useEffect } from "react";

const dummyContacts = [
    { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
    { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
    { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
  ];

// 1. COMPONENT - creates area for contacts
// ContactList (parent) -> ContactRow (child)
// Where is props created?
export default function ContactList() {

    // properties ('props') = contacts
    // right now, contacts is set as the default
    const [contacts, setContacts] = useState(dummyContacts);
    // setContacts is a function to pass something in

    useEffect(() => {
        async function fetchContacts() {
            try {
                let response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
                let data = await response.json();

                // update state of contacts to be data fetched from API
                setContacts(data);
            } catch (error) {
                console.log('error!');
            }
        }
        fetchContacts();
    },[])
console.log('state', contacts);
    // console.log('dummy contacts: ', dummyContacts);

    return (
            <table>
                <thead>
                    <tr>
                        <th colSpan="2">Contact List</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                    </tr>
                    {
                       contacts.map((contact) => {
                        return <ContactRow key={contact.id} contact={contact} />;
                       }) 
                    }
                </tbody>
            </table> 
    )
}