import {
  Box,
  FormGroup,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemSecondaryAction,
  ListItemText,
  TextField,
  Tooltip,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import { TreeItem, TreeView } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  listItemSecondaryAction: {
    visibility: "hidden",
  },
  listItem: {
    "&:hover $listItemSecondaryAction": {
      visibility: "inherit",
    },
  },
}));

export const NodesComponent = ({inputOpen,input,setinput,setinputopen}) => {
  const classes = useStyles();
  const { nodeContainer } = useSelector((state) => state.nodes);
  console.log(nodeContainer);

  return (
    <Box>
      <TreeView>
        {nodeContainer.map((item) => (
          <TreeItem
          nodeId={item.id}
            label={
              <ListItem
                key={item.id}
                disablePadding
                className={classes.listItem}
              >
                <ListItemButton>
                  <IconButton>
                    <ExpandMoreIcon style={{ fontSize: "1.5rem" }} />
                  </IconButton>
                  <ListItemText primary={item.name} />
                  <ListItemSecondaryAction
                    className={classes.listItemSecondaryAction}
                  >
                    <Tooltip
                      title="Create item"
                      placement="top"
                      arrow
                      componentsProps={{
                        tooltip: {
                          sx: {
                            bgcolor: "common.black",
                            padding: "0.5rem",
                            "& .MuiTooltip-arrow": {
                              color: "common.black",
                            },
                          },
                        },
                      }}
                    >
                      <IconButton>
                        <AddIcon style={{ fontSize: "1rem" }} />
                      </IconButton>
                    </Tooltip>
                    <Tooltip
                      title="Create container"
                      placement="top"
                      arrow
                      componentsProps={{
                        tooltip: {
                          sx: {
                            bgcolor: "common.black",
                            padding: "0.5rem",
                            "& .MuiTooltip-arrow": {
                              color: "common.black",
                            },
                          },
                        },
                      }}
                    >
                      <IconButton onClick={()=>setinputopen(!inputOpen)}>
                        <LibraryAddIcon style={{ fontSize: "1rem" }} />
                      </IconButton>
                    </Tooltip>
                    {inputOpen && (
                        <FormGroup row>
                          <TextField
                            id="standard-basic"
                            label="Node"
                            variant="standard"
                            value={input}
                            style={{marginTop:"4rem"}}
                            onChange={(e) => setinput(e.target.value)}
                          />
                          {/* <Button onClick={InputHandler}>Add</Button> */}
                        </FormGroup>
                      )}

                      <IconButton></IconButton>
                    <IconButton>
                      <MoreVertIcon style={{ fontSize: "1rem" }} />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItemButton>
              </ListItem>
            }
          ></TreeItem>
        ))}
      </TreeView>
    </Box>
  );
};
