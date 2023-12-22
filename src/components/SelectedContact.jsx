import { useState } from "react"

export default function SelectedContact( {selectedContactId, contacts} ){
    
    const selectedContact = contacts.find((contact) => contact.id === selectedContactId)

    if (!selectedContact) {
        return (
            <div>No selected contact</div>
        )
    }

    const {id, name, username, phone} = selectedContact;

    return (

        <div>
            <p>id: {id} </p>
            <p>name: {name} </p>
            <p>username: {username} </p>
            <p>phone: {phone} </p>
        </div>
    )

}