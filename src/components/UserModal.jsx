import { useState, useEffect } from "react";
import {
  Modal,
  Box,
  TextField,
  Button,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
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
    gender: "male", // default value
    cardNumber: "",
  });

  useEffect(() => {
    if (editUser) {
      setForm({
        firstName: editUser.firstName || "",
        lastName: editUser.lastName || "",
        age: editUser.age || "",
        gender: editUser.gender || "male",
        cardNumber: editUser.bank?.cardNumber || "",
      });
    } else {
      setForm({
        firstName: "",
        lastName: "",
        age: "",
        gender: "male",
        cardNumber: "",
      });
    }
  }, [editUser, handleClose]);

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
      userAgent: navigator.userAgent,
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
            label="Card Number"
            name="cardNumber"
            value={form.cardNumber}
            onChange={handleChange}
            fullWidth
          />

          <FormControl>
            <FormLabel
              sx={{
                fontFamily: '"Poppins", sans-serif',
                fontSize: "14px",
                mb: 1,
              }}
            >
              Gender
            </FormLabel>

            <RadioGroup
              row
              name="gender"
              value={form.gender}
              onChange={handleChange}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>

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
