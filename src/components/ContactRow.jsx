export default function ContactRow({contact}) {

    const renderDetails = () => {
        return (
            <tr>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                // update with other fields <td>{contact.phone}</td>

            </tr>
        )
    }

    return (
        <tr>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
            <td><button onClick={renderDetails} id={contact.id}>More Details</button></td>
        </tr>
    )
}