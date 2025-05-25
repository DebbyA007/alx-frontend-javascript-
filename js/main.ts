interface Student {
firstName: string;
lastName: string;
age: number;
location: string;
}

const student1: Student = {
firstName: 'Joy',
lastName: 'Michael',
age: 20,
location: 'London'
};
const student2: Student = {
firstName: 'Bright',
lastName: 'Emmanuel',
age: 24,
location: 'Ecuador'
};
const studentsList: Array<Student> = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
const headerRow = table.insertRow();
const firstNameHeader = headerRow.insertCell();
firstNameHeader.innerText = 'First Name';
const locationHeader = headerRow.insertCell();
locationHeader.innerText = 'Location';

studentsList.forEach((student) => {
const row = table.insertRow();
const firstNameCell = row.insertCell();
firstNameCell.innerText = student.firstName;
const locationCell = row.insertCell();
locationCell.innerText = student.location;
});

document.body.appendChild(table); 