import { createSlice } from "@reduxjs/toolkit";
import { createTheme } from "@mui/material/styles";
import { ThemesObjectType } from 'src/types'

interface themeSliceTypes {
  themes: ThemesObjectType;
  selectedTheme: string;
}

const initialState: themeSliceTypes = {
  themes: {
    dark: createTheme({
      palette: {
        mode: "dark",
      },
    }),
    light: createTheme({
      palette: {
        mode: "light",
      },
    }),
  },
  selectedTheme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.selectedTheme = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
