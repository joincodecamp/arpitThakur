class Student{
  constructor(name, Class, section){
    this.name = name;
    this.class = Class;
    this.section = section;

  }
}
class UI {
  static displayStudent() {
    const students = Store.getStudents();

    students.forEach((student) => UI.addStudentToList(student));
  }

  static addStudentToList(student) {
    const list = document.querySelector('#student-list');

    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.class}</td>
      <td>${student.section}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;

    list.appendChild(row);
  }

  static deleteStudent(el) {
    if(el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector('#student-form');
    container.insertBefore(div, form);

    
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
  }

  static clearFields() {
    document.querySelector('#name').value = '';
    document.querySelector('#class').value = '';
    document.querySelector('#section').value = '';
  }
}
class Store {
  static getStudents() {
    let students;
    if(localStorage.getItem('students') === null) {
      students = [];
    } else {
      students = JSON.parse(localStorage.getItem('students'));
    }

    return students;
  }

  static addStudent(student) {
    const students = Store.getStudents();
    students.push(student);
    localStorage.setItem('students', JSON.stringify(students));
  }

  static removeStudent(section) {
    const students = Store.getStudents();

    students.forEach((student, index) => {
      if(student.section === section) {
        students.splice(index, 1);
      }
    });

    localStorage.setItem('students', JSON.stringify(students));
  }
}


document.addEventListener('DOMContentLoaded', UI.displayStudent);


document.querySelector('#student-form').addEventListener('submit', (e) => {
 
  e.preventDefault();

  const name = document.querySelector('#name').value;
  const Class = document.querySelector('#class').value;
  const section = document.querySelector('#section').value;
  
 

  
  if(name === '' || Class === '' || section === '') {
    UI.showAlert('Please fill in all fields', 'danger');
  } else {
    
    const student = new Student(name, Class, section);
    

    UI.addStudentToList(student);

    Store.addStudent(student);

   
    UI.showAlert('Student Added', 'success');

   
    UI.clearFields();
  }
});

document.querySelector('#student-list').addEventListener('click', (e) => {
  
  UI.deleteStudent(e.target);

  
  Store.removeStudent(e.target.parentElement.previousElementSibling.textContent);

  UI.showAlert('Student Removed', 'success');
});

