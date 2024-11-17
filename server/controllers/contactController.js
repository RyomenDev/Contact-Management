const Contact = require("../models/Contact");

// Create a new contact
exports.createContact = async (req, res) => {
  //   console.log("createContact", req.body);
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json(contact);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all contacts
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({});
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a contact
exports.updateContact = async (req, res) => {
  //   console.log("update", req.body);
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(contact);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a contact
exports.deleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Contact deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
