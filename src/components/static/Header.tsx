import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

type CodePropTypes = {
  code: string;
};

const Code = ({ code }: CodePropTypes) => {
  return <code style={{ backgroundColor: "#f7f0ff" }}>{code}</code>;
};

export default function Header() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Terraformish
            </Typography>
            <Button
              color="inherit"
              onClick={() =>
                window.open("https://github.com/tjm165/terraformish")
              }
            >
              Github
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        The goal is to automate the tedious task of converting{" "}
        <Code code={".tfstate"} /> to
        <Code code={".tf"} /> files. While only{" "}
        <Code code={"terraform apply"} /> can determine if a
        <Code code={".tf"} /> file is truly valid, this automatition assists by
        producing the correct formatting. Thus it is{" "}
        <strong>"terraformish"</strong>.
      </Box>
    </>
  );
}
