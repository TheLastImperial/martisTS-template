import { SearchOutlined } from "@ant-design/icons";
import {
  Dialog, DialogContent, InputAdornment, List,
  OutlinedInput, Typography,
} from "@mui/material";
import {
  ChangeEvent, KeyboardEvent, useEffect, useState,
} from "react";
import { useUIStore } from "src/ui/hooks";
import { MenuItem } from "src/ui/interfaces";
import { SearchItem } from "./SearchItem";
import { useNavigate } from "react-router-dom";

interface SearchDialogProps {
  open: boolean,
  setOpen: (val: boolean) => void
};

export const SearchDialog = ({ open, setOpen }: SearchDialogProps) => {
  const { menu } = useUIStore();
  const navigate = useNavigate();
  const [ index, setIndex ] = useState<number>(0);
  const [ searchValue, setSearchValue ] = useState<string>("");
  const [ options, setOptions ] = useState<MenuItem[]>([]);

  const menuOpts = (val: string) => {
    let result:MenuItem[] = [];

    for (let index = 0; index < menu.length; index++) {
      const element = menu[index];
      if(element.children) {
        result = [
          ...result,
          ...element.children.filter(f => f.title.toLowerCase().includes(
            val.toLowerCase()
          ))
        ]
      }
    }
    return result;
  }

  const handleOnChange = (event:ChangeEvent<HTMLInputElement>)=>{
    setSearchValue(event.target.value);
  }

  const handleOnKeyDown = (event: KeyboardEvent)=>{
    if (event.key == '/') {
      event.key = '';
    }
    if (event.key == 'ArrowUp') {
      // up arrow
      console.log('UP')
      if(index > 0)
        setIndex(index-1)
    } else if (event.key == 'ArrowDown') {
      // down arrow
      if(index < options.length-1 )
      setIndex(index+1)
    }else if(event.key == 'Enter'){
      setOpen(false);
      navigate(options[index].url);
    }
  }

  useEffect(() => {
    setOptions(menuOpts(searchValue))
  }, [searchValue]);

  return (<>
    <Dialog open={ open }
      onClose={ ()=> setOpen(false) }
      PaperProps={{
        sx: {
          width: "80%",
          height: "80%",
        }
      }}
      >
      <DialogContent>
        <OutlinedInput
          fullWidth
          startAdornment = {
            <InputAdornment position="start" sx={{ mr: -0.5 }}>
              <SearchOutlined />
            </InputAdornment>
          }
          endAdornment = {
            <Typography color="text.secondary`">
              Esc
            </Typography>
          }
          value={ searchValue }
          onChange={ handleOnChange }
          onKeyDown={ handleOnKeyDown }
          autoFocus
          />
          <List>
            {
              options.map((opt, idx) => {
                return <SearchItem
                  key={ opt.id }
                  item={ opt }
                  selected = { idx === index} />
              })
            }
          </List>
      </DialogContent>
    </Dialog>
  </>);
};
