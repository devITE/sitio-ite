import React, { Component } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import warning from "../../../assets/img/icons/10.png";

export default class Acuerdos2010 extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={warning} className="img-fluid" alt="Warning" />
        <h4 className="mt-4">
          Si requiere la información contenida de este acuerdo, favor de
          solicitarla a través del área de “Transparencia” o para mayor
          información comunicate con nosotros
        </h4>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            MUI
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
            Core
          </Link>
          <Typography color="text.primary">Breadcrumbs</Typography>
        </Breadcrumbs>
      </div>
    );
  }
}
