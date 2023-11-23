import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:"sticky",width:'100%',border:'1px solid gray',boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.2)', top:'0px', justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
