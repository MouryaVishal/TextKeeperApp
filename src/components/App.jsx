import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note";
import EnterNewText from "./EnterNewText.jsx";

function App() {
  const [arrNotes, setarrNotes] = useState([]);

  function arrNotesAdd(notecome) {
    setarrNotes((prevNotes) => {
      return [...prevNotes, notecome];
    });
    console.log(arrNotes);
  }

  function removeNote(id) {
    console.log("del")
    setarrNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }
 
  return (
    <div>
      <Header />
      <EnterNewText onAdd={arrNotesAdd} />
      {arrNotes.map((note,index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          clickDel={removeNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
