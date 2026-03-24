import AuthLayout from "../components/AuthLayout";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useState } from "react";

function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const MAX_WORDS = 300;

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "message") {
      const trimmed = value.trim();

      const words = trimmed ? trimmed.split(/\s+/) : [];

      if (words.length > MAX_WORDS) return;

      setForm({
        ...form,
        [name]: value,
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const wordCount = form.message.trim()
  ? form.message.trim().split(/\s+/).length
  : 0;

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
        <h2 className="text-4xl">Get In Touch</h2>
        <h3>We would love to hear from you!</h3>

        <Box>
          <Typography
            fontFamily={"Poppins, sans-serif"}
            fontSize={14}
            fontWeight={600}
            mb={0.5}
          >
            Name
          </Typography>
          <TextField
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            fullWidth
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
              },
              fontFamily: "Poppins, sans-serif",
              fontSize: "14px",
            }}
          />
        </Box>

        <Box>
          <Typography
            fontFamily={"Poppins, sans-serif"}
            fontSize={14}
            fontWeight={600}
            mb={0.5}
          >
            Email
          </Typography>
          <TextField
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            fullWidth
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
              },
              fontFamily: "Poppins, sans-serif",
              fontSize: "14px",
            }}
          />
        </Box>

        <Box>
          <Typography
            fontFamily={"Poppins, sans-serif"}
            fontSize={14}
            fontWeight={600}
            mb={0.5}
          >
            Message
          </Typography>
          <TextField
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message..."
            multiline
            rows={4}
            fullWidth
            required
            helperText={`${wordCount}/${MAX_WORDS} words`}
            error={wordCount===MAX_WORDS}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
              },
              fontFamily: "Poppins, sans-serif",
              fontSize: "14px",
            }}
          />
        </Box>

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
            borderRadius: "12px",
          }}
        >
          Send Message
        </Button>
      </Box>
    </AuthLayout>
  );
}

export default ContactUs;
