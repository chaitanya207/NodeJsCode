const fs = require('fs');


//Create Note


const createNotes = (title,body) => {
    const notes = loadNotes();
    //check for duplicates
    const duplicates = notes.filter(note => note.title === title);
    if(duplicates.length === 0){
        notes.push({
            title:title,
            body:body
        });
        console.log('New note is added!')
    }else{
        console.log('title is alredy present please try check!!!');
    }

    saveNote(notes);
};

//Remove Note

const removeNote = (title) =>{
    const notes = loadNotes();
    const NotesToKeep = notes.filter(note => note.title !== title);
    saveNote(NotesToKeep);
}

const saveNote = (notes) =>{
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJson);
}

const loadNotes = () =>{
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    }catch(err){
        return [];
    }
}

const ReadList = () =>{
    const notes = loadNotes();
    notes.map(element => console.log(element.title));
}

const FindNotes = (title) =>{
    const notes = loadNotes();
    const isAvilable = notes.find(note => note.title === title);
    if(!isAvilable){
        console.log(isAvilable);
    }else{
        console.log('Note not found!!!');
    }
}


module.exports = {
    createNotes:createNotes,
    removeNote:removeNote,
    ReadList:ReadList,
    FindNotes:FindNotes
};