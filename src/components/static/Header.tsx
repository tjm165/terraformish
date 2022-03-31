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
  return <strong style={{ color: "#feff00" }}>{text}</strong>;
};

const Bold2 = ({ text }: TextFormattingPropTypes) => {
  return <strong style={{ color: "#7af5be" }}>{text}</strong>;
};

export default function Header() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className="Primary-header">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <img
                height="50px"
                src={window.origin + "/terraformish/logo.png"}
              />
            </Typography>
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
              <Code text={".tfstate"} /> to <Code text={".tf"} /> files.{" "}
              <Bold2 text={"Not even Terraform itself supports this! "} />
              That shouldn't stop us from a tool with{" "}
              <Bold2 text={" partial "} />
              automation. This is <Bold text={`"Terraformish."`} />
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <br />
    </>
  );
}
