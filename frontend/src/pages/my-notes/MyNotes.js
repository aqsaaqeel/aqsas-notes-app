import { Link } from "react-router-dom";
import { ScreenLayout } from "../../components/ScreenLayout";
import { Button } from "@mui/material";
import NotesAccordian from "../../components/notes-accordian/NotesAccordian";
import { useEffect, useState } from "react";
import axios from "axios";
export const MyNotes = () => {
  const [notes, setNotes] = useState([]);
  const fetchNotes = async () => {
    const { data } = await axios.get("/api/notes");
    setNotes(data);
    console.log(notes);
  };
  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);
  return (
    <div>
      <ScreenLayout title="Hello, this is Aqsa's notes">
        <Link to="/notes-page">
          <Button variant="contained" label="filled">
            Create new note
          </Button>
        </Link>
        <br />
        {notes.map((item) => (
          <NotesAccordian
            key={item._id}
            title={item.title}
            body={item.content}
            id={item._id}
            category={item.category}
          />
        ))}
      </ScreenLayout>
    </div>
  );
};
