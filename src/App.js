import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import HomeLayout from "./components/HomeLayout";
import { Provider } from "react-redux";
import { store } from "./reduxtoolkit/store";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Box>
        <Routes>
          <Route exact path="/" element={<HomeLayout />} />
        </Routes>
      </Box>
    </BrowserRouter>
  </Provider>
);

export default App;
