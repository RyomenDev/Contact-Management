import React, { useState, useEffect } from "react";
import { Modal, Box, TextField, Button } from "@mui/material";
import { updateContact } from "../api/api";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
};

function EditContactModal({ open, handleClose, contact, onEditSuccess }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
  });

  useEffect(() => {
    if (contact) {
      setFormData({
        firstName: contact.firstName || "",
        lastName: contact.lastName || "",
        email: contact.email || "",
        phone: contact.phone || "",
        company: contact.company || "",
        jobTitle: contact.jobTitle || "",
      });
    }
  }, [contact]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateContact(contact._id, formData);
      onEditSuccess();
      handleClose();
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle}>
        <h2>Edit Contact</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Job Title"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Save Changes
          </Button>
        </form>
      </Box>
    </Modal>
  );
}

export default EditContactModal;
