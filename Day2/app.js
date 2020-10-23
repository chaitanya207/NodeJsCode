const fs = require('fs');
const validator = require('validator')
const yargs = require('yargs')
const chalk = require('chalk')
// const add = require('./utils.js');
const notes = require('./notes.js');

// const sum = add(4,-2);
// const notes = getNotes();

const databuffer = fs.readFileSync('sample.json');
const dataStr = databuffer.toString();
const data = JSON.parse(dataStr);
// console.log(data.name);

data.name = "Chaitanya1";

const user = JSON.stringify(data);
 
const createUser = fs.writeFileSync('sample.json',user);

const email = "chaitanyabgmail.com";



// const command = process.argv[2];

// if(command === 'add'){
//     console.log('Note is added!')
// }else if(command === 'remove'){
//     console.log('Note is Removed!')
// }

yargs.command({
    command:'add',
    describe:'add Note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Body Title',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        notes.createNotes(argv.title,argv.body);
        // console.log('Title:'+argv.title);
        // console.log('Title:'+argv.body);
    }
})

yargs.command({
    command:'remove',
    describe:'remove note!',
    builder:{
        title:{
            describe:'Note remove',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv) =>{
        notes.removeNote(argv.title);
        console.log('Remove Note');
    }
})

yargs.command({
    command:'list',
    describe:'list down all Notes',
    // builder:{
    //     title:{
    //         describe:'Read title',
    //         demandOption:true,
    //         type:'string'
    //     }
    // },
    handler:(argv) =>{
        notes.ReadList();
    }
})

yargs.command({
    command:'read',
    describe:'reding the Note!',
    builder:{
        title:{
            describe:'find Note',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv) =>{
        notes.FindNotes(argv.title)
    }
})

yargs.parse()

// console.log(yargs.argv);
// console.log(command);

// console.log(chalk.underline.bgRed("Error!!!"));
// console.log(validator.isEmail(email));
// console.log(sum);
// console.log(notes);
