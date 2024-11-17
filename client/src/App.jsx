import { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactsTable from "./components/ContactsTable";
import EditContactModal from "./components/EditContactModal";

function App() {
  const [refresh, setRefresh] = useState(false);
  const [editContact, setEditContact] = useState(null);

  const handleEdit = (contact) => setEditContact(contact);
  const handleCloseModal = () => setEditContact(null);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center shadow-md mt-6 mb-4">
        Contact Management System
      </h1>
      <ContactForm onAdd={() => setRefresh(!refresh)} />
      <ContactsTable refresh={refresh} onEdit={handleEdit} />
      {editContact && (
        <EditContactModal
          open={!!editContact}
          contact={editContact}
          handleClose={handleCloseModal}
          onEditSuccess={() => setRefresh(!refresh)}
        />
      )}
    </div>
  );
}

export default App;
