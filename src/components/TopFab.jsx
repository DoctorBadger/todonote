import { Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const TopFab = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Fab
      size="medium"
      onClick={handleScroll}
      sx={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 1000,
        bgcolor:"#dfecc6",
        color:"black",
      }}
    >
      <KeyboardArrowUpIcon />
    </Fab>
  );
};

export default TopFab;