import { ListItemButton } from "@mui/material";
import { Link } from "react-router-dom";
import { MenuItem } from "src/ui/interfaces";

interface SearchItemProps {
  item: MenuItem,
  selected: boolean
};

export const SearchItem = ({ item, selected }:SearchItemProps) => {
  return (<>
    <ListItemButton
      component={ Link } to={item.url}
      sx={{
        '&:hover': {
          border: 1,
          borderColor: "primary.main",
          borderRadius: "10px",
        },
        '&:selected': {
          border: 1,
          borderColor: "primary.main",
          borderRadius: "10px",
        }
      }}
      selected = { selected } >
        { item.title }
    </ListItemButton>
  </>);
}
