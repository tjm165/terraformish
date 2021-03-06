import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { readCount, counterKey } from "../../functions/count";

type TextFormattingPropTypes = {
  text: string;
  style?: any;
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

const H2 = ({ style, text }: TextFormattingPropTypes) => {
  return <h2 style={{ ...style, color: "#7af5be" }}>{text}</h2>;
};

type PropTypes = {
  shouldRefetch: string;
};

export default function Header({ shouldRefetch }: PropTypes) {
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    async function runFetch() {
      const resp = await readCount(counterKey.SUCCESS_COUNT);
      const json = await resp.json();
      setPageCount(json.value);
    }
    runFetch();
  }, [shouldRefetch]);

  return (
    <>
      <Box sx={{ flexGrow: 1, flexDirection: "row" }}>
        <AppBar position="static" className="Primary-header">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <img height="50px" src={window.origin + "/logo.png"} />
            </Typography>
            <Typography variant="h4" sx={{ flexGrow: 1 }}>
              Terraformish
            </Typography>
            <Typography variant="subtitle2">
              {pageCount > 0 && (
                <>
                  <Bold2 text={`Converted ${pageCount} tfstates`} />
                </>
              )}
            </Typography>
            <Button
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
              color="inherit"
              onClick={() =>
                window.open("https://github.com/tjm165/terraformish")
              }
            >
              Github
            </Button>
          </Toolbar>
          <Toolbar>
            <Typography variant="body2" style={{ marginBottom: "8px" }}>
              <H2
                style={{ marginBottom: "0px" }}
                text={"Not even Terraform itself supports this! "}
              />
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
