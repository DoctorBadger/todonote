import { useState, useEffect } from "react";
import {
  Modal,
  Box,
  TextField,
  Button,
  Typography,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  borderRadius: "16px",
  boxShadow: 24,
  p: 4,
};

const UserModal = ({ open, handleClose, onSubmit, editUser }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    cardNumber: "",
  });

  useEffect(() => {
    if (editUser) {
      setForm({
        firstName: editUser.firstName || "",
        lastName: editUser.lastName || "",
        age: editUser.age || "",
        gender: editUser.gender || "",
        cardNumber: editUser.bank?.cardNumber || "",
      });
    } else {
      setForm({
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        cardNumber: "",
      });
    }
  }, [editUser]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const payload = {
      ...form,
      age: Number(form.age),
      bank: {
        cardNumber: form.cardNumber,
      },
    };

    if (editUser) {
      payload.id = editUser.id;
    }

    onSubmit(payload);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography
          sx={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 600,
            mb: 2,
          }}
        >
          {editUser ? "Edit User" : "Add User"}
        </Typography>

        <div className="flex flex-col gap-3">
          <TextField
            label="First Name"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Last Name"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Age"
            name="age"
            type="number"
            value={form.age}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Gender"
            name="gender"
            value={form.gender}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Card Number"
            name="cardNumber"
            value={form.cardNumber}
            onChange={handleChange}
            fullWidth
          />

          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
            backgroundColor: "#dfecc6",
            color: "#000000",
            fontFamily: "Poppins, sans-serif",
            "&:hover": {
              backgroundColor: "#485c11",
              color: "white",
            },
            paddingY: "10px",
            textTransform: "none",
            fontSize: "14px",
            borderRadius: "12px",
          }}
          >
            {editUser ? "Update" : "Add"}
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default UserModal;