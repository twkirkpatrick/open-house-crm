//* Dependencies
import React, { useContext, useEffect, useState } from "react";

//Accordion junk
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

//* Material UI components, hooks, and icons
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

//* State context
import AuthContext from "../../context/auth/authContext";

import NavPanel from "../layout/NavPanel";
import Revenue from "../charts/Revenue";
import PieChart from "../charts/PieChart";
import LineChart from "../charts/LineChart";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    marginBottom: "1rem"
  },
  header: {
    textAlign: "center",
    marginTop: "5rem",
    marginBottom: "1rem",
    fontFamily: "Big Shoulders Display",
    fontWeight: "700"
  }
}));

const ChartsPage = () => {
  //* Initializes styling classes
  const classes = useStyles();

  //* Initializes state
  const authContext = useContext(AuthContext);

  //* Authenticates user token
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container>
      <Grid container spacing={3} alignItems="center" justify="center">
        <Grid
          item
          xs={12}
          sm={12}
          md={8}
          style={{ marginTop: "5rem" }}
          align="center"
        >
          <NavPanel />

					<Accordion
						expanded={expanded === "panel1"}
						onChange={handleChange("panel1")}>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
							align="center">
							{" "}
							<Typography variant="h5" className={classes.title}>
								Revenue and Costs
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Grid
								container
								xs={12}
								sm={12}
								md={12}
								alignItems="center"
								justify="center">
								<Revenue />
							</Grid>
						</AccordionDetails>
					</Accordion>
					<Accordion
						expanded={expanded === "panel2"}
						onChange={handleChange("panel2")}>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
							align="center">
							{" "}
							<Typography variant="h5" className={classes.title}>
								Profit
							</Typography>
						</AccordionSummary>
						<Grid
							container
							xs={12}
							sm={12}
							md={12}
							alignItems="center"
							justify="center">
							<LineChart />
						</Grid>
					</Accordion>
					<Accordion
						expanded={expanded === "panel3"}
						onChange={handleChange("panel3")}>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
							align="center"
							width="500"
							height="500">
							{" "}
							<Typography variant="h5" className={classes.title}>
								Cost Distribution
							</Typography>
						</AccordionSummary>
            <PieChart />
          </Accordion>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ChartsPage;
