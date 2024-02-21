import { Table } from "../components/Table.js";

const todo = new Table(
    'Homepage design',
    'Panašu, jog dar neturi jokių užduočių'
);

const todo2 = new Table(
    'Web development tasks',
    'Nėra sukurta jokių užduočių. Susikurk!'
);



 /* pavidzu2
 console.log(todo.labas());
console.log(todo2.labas('Latvija'));*/
//pavidzu3
todo.addColumn()
todo.addColumn(256)
todo.addColumn(true)
todo.addColumn('     ')
todo.addColumn('     Title')
todo.addColumn('Title     ')
todo.addColumn('    Title    ')
todo.addColumn('Backlog')
todo.addColumn('In progress')
todo.addColumn('Review')
todo.addColumn('Done')

console.log(todo);