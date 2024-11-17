import { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { addContact } from "../api/api";

function ContactForm({ onAdd }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addContact(formData);
    onAdd();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "16px",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          p: 4,
          m: 3,
          maxWidth: 600,
          backgroundColor: "#f9f9f9",
          borderRadius: 2,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          width: "100%",
          "@media (max-width: 600px)": {
            maxWidth: "100%",
          },
        }}
      >
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{
            fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
          }}
        >
          Add New Contact
        </Typography>
        <Box
          sx={{
            display: "grid",
            gap: 2,
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            "@media (max-width: 600px)": {
              gridTemplateColumns: "1fr",
            },
          }}
        >
          <TextField
            label="First Name"
            name="firstName"
            onChange={handleChange}
            required
            fullWidth
            sx={{
              "& .MuiInputBase-root": {
                fontSize: { xs: "0.9rem", sm: "1rem" },
              },
            }}
          />
          <TextField
            label="Last Name"
            name="lastName"
            onChange={handleChange}
            required
            fullWidth
            sx={{
              "& .MuiInputBase-root": {
                fontSize: { xs: "0.9rem", sm: "1rem" },
              },
            }}
          />
          <TextField
            label="Email"
            name="email"
            onChange={handleChange}
            required
            fullWidth
            sx={{
              "& .MuiInputBase-root": {
                fontSize: { xs: "0.9rem", sm: "1rem" },
              },
            }}
          />
          <TextField
            label="Phone"
            name="phone"
            onChange={handleChange}
            fullWidth
            sx={{
              "& .MuiInputBase-root": {
                fontSize: { xs: "0.9rem", sm: "1rem" },
              },
            }}
          />
          <TextField
            label="Company"
            name="company"
            onChange={handleChange}
            fullWidth
            sx={{
              "& .MuiInputBase-root": {
                fontSize: { xs: "0.9rem", sm: "1rem" },
              },
            }}
          />
          <TextField
            label="Job Title"
            name="jobTitle"
            onChange={handleChange}
            fullWidth
            sx={{
              "& .MuiInputBase-root": {
                fontSize: { xs: "0.9rem", sm: "1rem" },
              },
            }}
          />
        </Box>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            mt: 3,
            py: 1.5,
            fontSize: { xs: "0.9rem", sm: "1rem" },
            backgroundColor: "#1976d2",
            "&:hover": {
              backgroundColor: "#1565c0",
            },
          }}
        >
          Add Contact
        </Button>
      </Box>
    </div>
  );
}

export default ContactForm;
