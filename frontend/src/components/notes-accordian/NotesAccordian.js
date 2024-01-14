import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { Chip } from "@mui/material";
export default function NotesAccordian(props) {
  const deleteHandler = (id) => {
    console.log("Delete?");
  };
  return (
    <div>
      <br />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          style={{ width: "100%" }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h3>{props.title}</h3>
            <AccordionActions
              style={{
                display: "flex",
                justifyContent: "flex-end", // Align actions at the end
              }}
            >
              <Button color="primary" href={`/notes/${props.id}`}>
                Edit
              </Button>
              <Button color="secondary" onClick={() => deleteHandler(props.id)}>
                Delete
              </Button>
            </AccordionActions>
          </div>
        </AccordionSummary>
        <AccordionDetails style={{display: "flex", flexDirection: "column"}}>
          <Chip label={props.category} variant="filled" color="success" style={{width: "fit-content", marginBottom: "0.5rem"}}/>
          {props.body}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
