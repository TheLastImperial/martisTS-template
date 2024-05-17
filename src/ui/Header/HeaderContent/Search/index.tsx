import {
  Box,
  FormControl,
  InputAdornment,
  OutlinedInput,
} from '@mui/material';

import { SearchOutlined } from '@ant-design/icons';
import { MouseEvent, useEffect, useState, } from 'react';
import { SearchDialog } from './SearchDialog';

const Search = () => {
  const [ open, setOpen ] = useState(false);

  const keyDownHandler = (event: KeyboardEvent) => {
    if (event.key === "/") {
        setOpen(true);
        event.preventDefault();
    }
  };

  const handleOnMouseDown = (event: MouseEvent) => {
    setOpen(true);
    event.preventDefault();
  };

  useEffect(() => {
    window.addEventListener("keydown", keyDownHandler);
    return () => {
      window.removeEventListener("keydown", keyDownHandler);
    };
  });

  return (
    <>
      <Box sx={{ width: '100%', ml: { xs: 0, md: 1 } }}>
        <FormControl sx={{ width: { xs: '100%', md: 224 } }}>
          <OutlinedInput
            size="small"
            id="header-search"
            startAdornment={
              <InputAdornment position="start" sx={{ mr: -0.5 }}>
                <SearchOutlined />
              </InputAdornment>
            }
            aria-describedby="header-search-text"
            inputProps={{
              'aria-label': 'weight'
            }}
            placeholder="Type / to search"
            onMouseDown={ handleOnMouseDown }
          />
        </FormControl>
      </Box>
      <SearchDialog open={ open } setOpen={ setOpen } />
    </>
  );
};

export default Search;
