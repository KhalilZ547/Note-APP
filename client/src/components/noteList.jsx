import React, { useEffect,useState } from 'react';
import axios from 'axios';
// import searchBar from './components/searchBar.jsx'

const NotesList = (props) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/notes/'+props.id)
      .then((response) => {
        // console.log(props); 
        console.log(response.data);
        setNotes(response.data);
      })
      .catch((error) => {
        console.error( error);
      });
  }, []);

  const handleDeleteNote = (noteId) => {
    axios.delete(`http://localhost:3000/api/notes/${noteId}`)
    .then((response) => {
      const updatedNotes = [];
      for (const note of notes) {
        if (note.id !== noteId) {
          updatedNotes.push(note);
        }
      }
      setNotes(updatedNotes);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  return (
    <div style={{background:"url('https://img.freepik.com/free-vector/realistic-style-technology-particle-background_23-2148426704.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709596800&semt=ais')", border:" 2px solid gray",display:"flex",width: "100%",color:"white",padding:" 10px",cursor: "pointer",justifyContent:"space-around",boxShadow: "10px 5px 5px gray"}}>
      <h2>My Notes</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            {note.title} {note.content} 
          <button onClick={() => handleDeleteNote(note.id)} >Delete</button></li>
        ))}
        
      </ul>
      <button>Add Note</button>
      
    </div>
  );
};

export default NotesList;