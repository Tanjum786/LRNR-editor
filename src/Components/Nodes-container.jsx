import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemSecondaryAction,
  ListItemText,
  Tooltip,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import { makeStyles } from "@mui/styles";

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
export const NodesComponent = () => {
  const classes = useStyles();
  const navItems = ["Home", "About", "Contact", "Home", "About", "Contact"];

  return (
    <Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding className={classes.listItem}>
            <ListItemButton sx={{ paddingLeft: "1.5rem" }}>
              <IconButton>
                <ExpandMoreIcon style={{ fontSize: "1.5rem" }} />
              </IconButton>
              <ListItemText primary={item} />
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
                <IconButton>
                  <LibraryAddIcon style={{ fontSize: "1rem" }} />
                </IconButton>
                </Tooltip>
                <IconButton>
                  <MoreVertIcon style={{ fontSize: "1rem" }} />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
