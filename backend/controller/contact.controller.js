// controllers/contact.controller.js

import Contact from "../models/contact.model.js"; // Assuming you have a Contact model

export const ContactFormSubmission = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: "Contact form submitted successfully" });
  } catch (error) {
    console.error("Error submitting contact form:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
