import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

type TextFormattingPropTypes = {
  text: string;
};

const Code = ({ text }: TextFormattingPropTypes) => {
  return <code style={{ color: "#7af5be" }}>{text}</code>;
};

const Bold = ({ text }: TextFormattingPropTypes) => {
  return <strong style={{ color: "#FFF069" }}>{text}</strong>;
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
              <Code text={".tfstate"} /> to <Code text={".tf"} /> files. No tool
              can 100% streamline the task of importing existing cloud
              infastructure to valid terraform code.
              <br /> This tool assists by producing the correct formatting. Thus
              it is <Bold text={`"terraformish"`} />
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <br />
    </>
  );
}
