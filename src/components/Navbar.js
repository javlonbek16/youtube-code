import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Switch from '@mui/material/Switch';
import logo from "../utils/icon.png";
import { SearchBar } from "./";
const label = { inputProps: { 'aria-label': 'Size switch demo' } };

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position: "sticky", background: '#fff', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={30} />
    </Link>
    <SearchBar />
    <Switch {...label} defaultChecked />
  </Stack>
);

export default Navbar;
