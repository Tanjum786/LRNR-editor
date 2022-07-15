import * as React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import { v4 as uuidv4 } from "uuid";

import {
  Box,
  Button,
  Divider,
  Drawer,
  FormGroup,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addNode } from "../Redux/Slice/NodesSlice";
import { NodesComponent } from "./NavBar-componets/Nodes-container";

const drawerWidth = 330;

function DrawerAppBar({ setMobileOpen, mobileOpen }) {
  const [inputOpen, setinputopen] = React.useState(false);
  const [input, setinput] = React.useState("");
  const dispatch = useDispatch();

  console.log(input);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const InputHandler = () => {
    if (input.trim().length > 0) {
      dispatch(
        addNode({ id: uuidv4(), name: input, isContainer: true, items: [] })
      );
      setinputopen(false);
      setinput("");
    }
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
          <MoreVertIcon />
        </IconButton>
      </Box>
      <Divider />
      <Box
        display="flex"
        justifyContent="space-between"
        color="#a1a1aa"
        marginLeft="1rem"
      >
        <Typography marginTop="0.6rem">DFIN</Typography>
        <Box display="flex" gap="1rem">
          <IconButton onClick={() => setinputopen(!inputOpen)}>
            <AddIcon style={{ color: "#dc2626" }} />
          </IconButton>
          <IconButton>
            <UnfoldMoreIcon style={{ transform: "rotate(40deg)" }} />
          </IconButton>
          <IconButton>
            <KeyboardDoubleArrowLeftIcon />
          </IconButton>
        </Box>
      </Box>
      {inputOpen && (
        <FormGroup row>
          <TextField
            id="standard-basic"
            label="Node"
            variant="standard"
            value={input}
            onChange={(e) => setinput(e.target.value)}
          />
          <Button onClick={InputHandler}>Add</Button>
        </FormGroup>
      )}
      <NodesComponent
        setinputopen={setinputopen}
        setinput={setinput}
        input={input}
        inputOpen={inputOpen}
      />
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
