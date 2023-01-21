import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import AddCommentIcon from '@mui/icons-material/AddComment';
import Zoom from '@mui/material/Zoom';

function EnterNewText(props) {
  const [isExpanded,setExpanded]=useState(false)
  const [note, setnote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setnote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function submitNote(event){
    props.onAdd(note);
    setnote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function expand(){
    setExpanded(true);
  }


  return (
    <div>
      <form className="create-note">
       {isExpanded &&  <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />}
        <textarea
          onChange={handleChange}
          onClick={expand}
          name="content"
          placeholder="Take a note..."
          value={note.content}
          rows={isExpanded?3:1}
        />
        <Zoom in={isExpanded}>
        <Fab
          onClick={submitNote}
        >
          <AddCommentIcon/>
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default EnterNewText;
