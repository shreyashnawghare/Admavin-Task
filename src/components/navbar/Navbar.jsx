import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            ADMAVIN
          </IconButton>
          <Link to="/" className="link">
            <Button color="inherit">Element Transfer</Button>
          </Link>
          <Link to="/nestedlist" className="link">
            <Button color="inherit">Nested List component</Button>
          </Link>
          <Link to="/Infinitescroll" className="link">
            <Button color="inherit">Infinite Scroll</Button>
          </Link>
          <Link to="/game" className="link">
            <Button color="inherit">Game</Button>
          </Link>
          <Link to="/boxsplit" className="link">
            <Button color="inherit">Box Split</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
