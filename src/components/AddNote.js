import React,{useState} from "react"

const AddNote =({handleAddNote})=> {

    const[noteTitle, setNoteTitle] = useState("");
    const CharacterSize = 350;

    const handleChange=(event) => {
        if(CharacterSize - event.target.value.length >= 0){

        setNoteTitle(event.target.value);

        }

    }

    const handleSaveClick = () => {
        if(noteTitle.trim().length > 0){
           
            handleAddNote(noteTitle);
            setNoteTitle("");
        }   
        else{
            alert("Add Something to note!");
        }
    }

    return(
        <div className="note new">
            <textArea
            rows="8"
            column="10"
            placeholder="Type to add a note..."
            value={noteTitle}
            onChange={handleChange}
            >   

            </textArea>
            <div className="note-footer">
                <small>{CharacterSize - noteTitle.length} remaining</small>
                <button className="save" onClick={handleSaveClick}>Click to Save</button>
            </div>
        </div>
    )
}

export default AddNote