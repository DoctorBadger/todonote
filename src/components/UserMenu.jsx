import { Avatar, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";

function UserMenu({ user, onLogout }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Avatar
        onClick={handleOpen}
        sx={{
          bgcolor: "white",
          color: "black",
          cursor: "pointer",
          width: 40,
          height: 40,
          fontWeight: 600,
          border: "1px solid #e5e5e5",
          "&:hover": {
            backgroundColor: "#f5f5f5",
          },
        }}
      >
        {user?.name?.charAt(0).toUpperCase()}
      </Avatar>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        slotProps={{
          paper: {
            sx: {
              mt: 1,
              borderRadius: "14px",
              p: 1,
              minWidth: 170,
            },
          },
        }}
      >
        <MenuItem
          disabled
          sx={{
            borderRadius: "10px",
            mb: 0.5,
            justifyContent: "center",
            "&.Mui-disabled": {
              opacity: 1,
            },
          }}
        >
          <Typography fontSize={16} fontWeight={600}>
            {user?.name}
          </Typography>
        </MenuItem>

        <MenuItem
          onClick={() => {
            onLogout();
            handleClose();
          }}
          sx={{
            borderRadius: "10px",
            justifyContent: "center",
            fontWeight: 600,
            color: "#ef4444",
            borderTop: "1px solid #eee",
            mt: 0.5,
            transition: "all 0.2s ease",

            "&:hover": {
              backgroundColor: "#ef4444",
              color: "white",
            },
          }}
        >
          <Typography fontSize={16} fontWeight={600}>
            {" "}
            Logout
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
}

export default UserMenu;
