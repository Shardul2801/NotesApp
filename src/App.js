import React,{ useEffect, useState} from "react"
import {nanoid} from "nanoid"
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

const App =() => {

  const [notes, setNotes] = useState([
  {
    id: nanoid(),
    title: "This is my first note!",
    date: "04/04/2022"
  },

  {
    id: nanoid(),
    title: "This is my second note!",
    date: "05/04/2022"
  },

  {
    id: nanoid(),
    title: "This is my third note!",
    date: "06/04/2022"
  }
]);

  const [searchTitle, setSearchTitle] = useState(" ");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))

    if(savedNotes){
      setNotes(savedNotes);
    }
  }, [])
  

  useEffect(() => {
     localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
  }, [notes])
  






const addNote =(title) => {
  // console.log("Its Working!");
  console.log(title);
  const date = new Date();
  const newNote = {
    id : nanoid(),
    title: title,
    date: date.toLocaleDateString(),
  }
  const newNotes = [...notes, newNote];
  setNotes(newNotes);
}
  

  const deleteNote =(id) => {
   const updatedNotes =  notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  }

  

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container"> 

      <Header handleToggleDarkMode={setDarkMode}/>

      <Search handleSearchNote = {setSearchTitle}/>

      <NotesList 
        notes={notes.filter((note) => note.title.toLowerCase().includes(searchTitle))} 
        handleAddNote={addNote} 
        handleDeleteNote={deleteNote}
      />

    </div>
    </div>
    
  )
}

export default App;