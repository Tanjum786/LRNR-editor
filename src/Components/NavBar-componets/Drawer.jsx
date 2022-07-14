import * as React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import { NodesComponent } from "../Nodes-container";
import { Box, Divider, Drawer, IconButton, Typography } from "@mui/material";

const drawerWidth = 330;

function DrawerAppBar({ setMobileOpen, mobileOpen }) {
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        backgroundColor="white"
        position="sticky"
        top="0"
        zIndex="1"
        color="#737373"
      >
        <Typography
          variant="h6"
          sx={{ my: 1.5 }}
          style={{
            cursor: "pointer",
            borderBottom: "2px solid #dc2626",
            width: "3rem",
            textAlign: "center",
          }}
        >
          All
        </Typography>
        <Typography variant="h6" sx={{ my: 1.5 }} style={{ cursor: "pointer" }}>
          Board
        </Typography>
        <Typography variant="h6" sx={{ my: 1.5 }} style={{ cursor: "pointer" }}>
          Graph
        </Typography>
        <Typography variant="h6" sx={{ my: 1.5 }} style={{ cursor: "pointer" }}>
          Recent
        </Typography>
        <IconButton>
          <MoreVertIcon/>
        </IconButton>
      </Box>
      <Divider />
      <Box
        display="flex"
        justifyContent="space-between"
        color="#a1a1aa"
        marginLeft="1rem"
      >
        <Typography marginTop="0.6rem" >DFIN</Typography>
        <Box display="flex" gap="1rem">
          <IconButton>
            <AddIcon style={{ color: "#dc2626"}} />
          </IconButton>
          <IconButton>
            <UnfoldMoreIcon style={{ transform: "rotate(40deg)" }} />
          </IconButton>
          <IconButton>
            <KeyboardDoubleArrowLeftIcon />
          </IconButton>
        </Box>
      </Box>
      <NodesComponent />
    </>
  );

  return (
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
          margin: "4rem 0rem 0rem 2rem",

          boxShadow: "none",
          backgroundColor: "#fafaf9",
          height: "40rem",
          overflow: "scroll",
        },
        "& .css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop": {
          backgroundColor: "transparent",
        },
      }}
    >
      {drawer}
    </Drawer>
  );
}

export { DrawerAppBar };
