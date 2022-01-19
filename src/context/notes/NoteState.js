import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const notesInitial = [
        {
          "_id": "61d0c7bbed3750d7ec67d616",
          "user": "61cb6164453e5cd9534f18bb",
          "title": "My Title",
          "description": "Do good things always",
          "tag": "Personal",
          "date": "2022-01-01T21:29:31.047Z",
          "__v": 0
        },
        {
          "_id": "61d0c8cced3750d7ec67d619",
          "user": "61cb6164453e5cd9534f18bb",
          "title": "My new Title",
          "description": "Always try to give your 100%",
          "tag": "Goals",
          "date": "2022-01-01T21:34:04.634Z",
          "__v": 0
        },
        {
          "_id": "61d0c7bbed3450d7ec67d616",
          "user": "61cb6164453e5cd9534f18bb",
          "title": "My Title",
          "description": "Do good things always",
          "tag": "Personal",
          "date": "2022-01-01T21:29:31.047Z",
          "__v": 0
        },
        {
          "_id": "61d0c8cced3750d7ec67d519",
          "user": "61cb6164453e5cd9534f18bb",
          "title": "My new Title",
          "description": "Always try to give your 100%",
          "tag": "Goals",
          "date": "2022-01-01T21:34:04.634Z",
          "__v": 0
        },
        {
          "_id": "61d0c7bbed2750d7ec67d616",
          "user": "61cb6164453e5cd9534f18bb",
          "title": "My Title",
          "description": "Do good things always",
          "tag": "Personal",
          "date": "2022-01-01T21:29:31.047Z",
          "__v": 0
        },
        {
          "_id": "61d0c8cced3950d7ec67d619",
          "user": "61cb6164453e5cd9534f18bb",
          "title": "My new Title",
          "description": "Always try to give your 100%",
          "tag": "Goals",
          "date": "2022-01-01T21:34:04.634Z",
          "__v": 0
        },
      ]
    
      const [notes, setNotes] = useState(notesInitial)

    //   Add a Note
    const addNote = (title, description, tag)=>{
        // TODO API Call
    const note = {
            "_id": "61d0c8cced3950d7ec67d619",
            "user": "61cb6164453e5cd9534f18bb",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2022-01-01T21:34:04.634Z",
            "__v": 0
          };
        setNotes(notes.concat(note))
    }
    //   Delete a Note
    const deleteNote = ()=>{

    }
    // Edit a Note
    const editNote = ()=>{

    }

    return(
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;