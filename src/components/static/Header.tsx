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
  return <code style={{ color: "#7af5be" }}>{code}</code>;
};

export default function Header() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className="Primary-header">
          <Toolbar>
            <Typography variant="h4" sx={{ flexGrow: 1 }}>
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
          <Toolbar>
            <Typography variant="body2">
              The goal is to automate the tedious task of converting{" "}
              <Code code={".tfstate"} /> to
              <Code code={".tf"} /> files. While only{" "}
              <Code code={"terraform apply"} /> can determine if a
              <Code code={".tf"} /> file is truly valid, this automatition
              assists by producing the correct formatting. Thus it is{" "}
              <strong style={{ color: "#FFF069" }}>"terraformish"</strong>.
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <br />
    </>
  );
}
