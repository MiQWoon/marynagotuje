import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";

export const Searchbar = ({ setRecipes }) => {
  const [query, setQuery] = useState("chicken");
  console.log(query);

  const appId = '20e3b357';
  const appKey = '877f95e644e1ceb2bfaac0d15dc676bc';

  async function fetchRecipes() {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?q=${query}&type=public&app_id=${appId}&app_key=${appKey}`,
    );
    const data = await response.json();
    setRecipes(data.hits);
  }

  function handleChange(event) {
    setQuery(event.target.value);
  }

  useEffect(() => {
    fetchRecipes();
  }, [query]);

  return (
    <TextField
      label="Wyszukaj swój przepis..."
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={fetchRecipes}>
              <SearchIcon sx={{ color: 'primary.main' }} />
            </IconButton>
          </InputAdornment>
        ),
      }}
      fullWidth
      variant="outlined"
      size="medium"
      sx={{
        '&.MuiOutlinedInput-root': {
          borderRadius: '10px',
          fontSize: '18px',
          fontFamily: 'Open Sans',
          boxShadow: '0px 0px 10px rgba(0,0,0,0.2)',
        },
      }}
    />
  );
};