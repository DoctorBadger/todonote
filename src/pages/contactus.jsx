import AuthLayout from "../components/AuthLayout";
import { TextField, Button, Box } from "@mui/material";
import { useState } from "react";

function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <AuthLayout>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: 500,
          minHeight: "100dvh",
          mx: "auto",
          mt: 6,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 3,
        }}
      >
        <h1 className="text-5xl">Get In Touch</h1>

        <h2>We would love to hear from you!</h2>

        <TextField
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          fullWidth
          required
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          fullWidth
          required
        />

        <TextField
          label="Message"
          name="message"
          value={form.message}
          onChange={handleChange}
          multiline
          rows={4}
          fullWidth
          required
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#485C11",
            fontFamily: "Poppins, sans-serif",
            "&:hover": {
              backgroundColor: "#37480d",
            },
            paddingY: "10px",
            textTransform: "none",
            fontSize: "14px",
          }}
        >
          Send Message
        </Button>
      </Box>
    </AuthLayout>
  );
}

export default ContactUs;
