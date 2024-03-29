import React, { useEffect,useState } from 'react';
import axios from 'axios';
// import searchBar from './components/searchBar.jsx'

const NotesList = (props) => {
  const [notes, setNotes] = useState([]);
  const [showAddNote, setShowAddNote] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  useEffect(() => {
    fetchNotes()
  }, []);
 const fetchNotes=()=>{
  axios.get('http://localhost:3000/api/notes/'+props.id)
      .then((response) => {
        // console.log(props.id); 
        // console.log(response.data);
        setNotes(response.data);
      })
      .catch((error) => {
        console.error( error);
      });
 }

  const handleDeleteNote = (noteId) => {
    axios.delete(`http://localhost:3000/api/notes/${props.noteId}`)
    .then((response) => {
      fetchNotes()
      setNotes(updatedNotes);
    })
    .catch((error) => {
      console.log(error);
    })
  }
  const handleAddNote = () => {
    axios.post(`http://localhost:3000/api/notes/${props.id}`,{title,content} )
    .then((response) => {
     setNotes([...notes,response.data])
      setShowAddNote(false);
      setTitle('');
      setContent('');
    })
    .catch((error) => {
      console.error(error);
    });
    }
    

    return (
      
      <div style={{ background: "url('https://img.freepik.com/free-vector/realistic-style-technology-particle-background_23-2148426704.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709596800&semt=ais')", border: " 2px solid gray", display: "flex", width: "100%", color: "white", padding: " 10px", cursor: "pointer", justifyContent: "space-around", boxShadow: "10px 5px 5px gray" }}>
        <h2>My Notes</h2>
        
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              {note.title} {note.content}
              <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
            </li>
          ))}
        </ul>
        {showAddNote ? (
          <div>
            <input type="text" placeholder="Ur Note Title"  onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="Ur Content"  onChange={(e) => setContent(e.target.value)} />
            <button onClick={handleAddNote}>Save</button>
          </div>
        ) : (
          <button onClick={() => setShowAddNote(true)}>Add Note</button>
        )}
      </div>
    );
};

export default NotesList;