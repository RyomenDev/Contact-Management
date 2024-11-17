import axios from "axios";

const API_URL = "http://localhost:5000/api";

// Add a new contact
export const addContact = async (data) => {
  try {
    await axios.post(`${API_URL}/contacts`, data);
    // console.log("Contact created successfully");
  } catch (error) {
    console.error(
      "Error creating contact:",
      error.response?.data || error.message || error
    );
    const errorMessage =
      error.response?.data?.message || "Failed to create contact";
    alert(errorMessage);
  }
};

// Get all contacts
export const getContacts = async () => {
  try {
    const response = await axios.get(`${API_URL}/contacts`);
    // console.log("Contacts retrieved successfully");
    return response;
  } catch (error) {
    console.error(
      "Error retrieving contacts:",
      error.response?.data || error.message || error
    );
    const errorMessage =
      error.response?.data?.message || "Failed to retrieve contacts";
    alert(errorMessage);
  }
};

// Update an existing contact
export const updateContact = async (id, data) => {
  try {
    await axios.put(`${API_URL}/contacts/${id}`, data);
    // console.log("Contact updated successfully");
  } catch (error) {
    console.error(
      "Error updating contact:",
      error.response?.data || error.message || error
    );
    const errorMessage =
      error.response?.data?.message || "Failed to update contact";
    alert(errorMessage);
  }
};

// Delete a contact
export const deleteContact = async (id) => {
  try {
    await axios.delete(`${API_URL}/contacts/${id}`);
    // console.log("Contact deleted successfully");
  } catch (error) {
    console.error(
      "Error deleting contact:",
      error.response?.data || error.message || error
    );
    const errorMessage =
      error.response?.data?.message || "Failed to delete contact";
    alert(errorMessage);
  }
};
