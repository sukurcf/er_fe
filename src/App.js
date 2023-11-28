import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, ThemeProvider } from "@mui/material";
import HomeLayout from "./components/HomeLayout";
import { Provider } from "react-redux";
import { store } from "./reduxtoolkit/store";
import { theme } from "./theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <Box>
          <Routes>
            <Route exact path="/" element={<HomeLayout />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
);

export default App;
