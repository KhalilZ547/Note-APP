import React, { useEffect } from 'react';
import axios from 'axios';
// import searchBar from './components/searchBar.jsx'

const NotesList = (props) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/notes'+props.id)
      .then((response) => {
        // console.log(response.data); 
        setNotes(response.data);
      })
      .catch((error) => {
        console.error( error);
      });
  }, []);

  return (
    <div>
      {/* <h2>My Notes</h2>
      <searchBar/>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.title} {note.content}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default NotesList;