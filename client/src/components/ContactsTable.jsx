import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  TableContainer,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { getContacts, deleteContact } from "../api/api";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function ContactsTable({ refresh, onEdit }) {
  const [contacts, setContacts] = useState([]);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [isHoveredEdit, setIsHoveredEdit] = useState(false);
  const [isHoveredDelete, setIsHoveredDelete] = useState(false);

  const editButtonStyle = {
    background: isHoveredEdit ? "rgb(37, 99, 235)" : "blue",
    color: "white",
    margin:"2px",
    padding: "8px 24px",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s ease",
  };

  const deleteButtonStyle = {
    background: isHoveredDelete ? "rgb(239, 68, 68)" : "red",
    color: "white",
    padding: "8px 24px",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s ease",
  };

  useEffect(() => {
    fetchData();
  }, [refresh]);

  const fetchData = async () => {
    const { data } = await getContacts();
    setContacts(data);
  };

  const handleDelete = async (id) => {
    await deleteContact(id);
    fetchData();
  };

  return (
    <TableContainer component={Paper} sx={{ overflowX: "auto" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            {!isSmallScreen && <TableCell>Phone</TableCell>}{" "}
            {!isSmallScreen && <TableCell>Company</TableCell>}{" "}
            {!isSmallScreen && <TableCell>Job Title</TableCell>}{" "}
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.map((contact) => (
            <TableRow key={contact._id}>
              <TableCell>{contact.firstName}</TableCell>
              <TableCell>{contact.lastName}</TableCell>
              <TableCell>{contact.email}</TableCell>
              {!isSmallScreen && <TableCell>{contact.phone}</TableCell>}{" "}
              {!isSmallScreen && <TableCell>{contact.company}</TableCell>}{" "}
              {!isSmallScreen && <TableCell>{contact.jobTitle}</TableCell>}{" "}
              <TableCell>
                <>
                  <Button
                    style={editButtonStyle}
                    onMouseEnter={() => setIsHoveredEdit(true)}
                    onMouseLeave={() => setIsHoveredEdit(false)}
                    onClick={() => onEdit(contact)}
                  >
                    Edit
                  </Button>
                  <Button
                    style={deleteButtonStyle}
                    onMouseEnter={() => setIsHoveredDelete(true)}
                    onMouseLeave={() => setIsHoveredDelete(false)}
                    onClick={() => handleDelete(contact._id)}
                  >
                    Delete
                  </Button>
                </>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ContactsTable;
