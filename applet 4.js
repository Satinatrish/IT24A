class StudentList {
    constructor(dataFile) {
        this.students = []; 
        this.loadStudents(dataFile);
    }

    loadStudents(dataFile) {
        
    }

    renderStudentList(students, container) {
        container.innerHTML = students.map(student => 
            `<button class="btn btn-primary" style="margin-top:15px; width:25rem">
                ${student.student_name} | ${student.student_program}
            </button><br>`
        ).join('');
    } 

    bindSearchEvent() {
        const studentSearchBar = document.getElementById('studentSearchBar');
        const studentSearchListContainer = document.getElementById('studentSearchList');

        studentSearchBar.addEventListener('input', () => {
            this.filterStudents(studentSearchBar.value, studentSearchListContainer);
        });

        this.renderStudentList(this.students, studentSearchListContainer);
    }

    filterStudents(query, searchListContainer) {
        const filteredStudents = this.students.filter(student => {
            const fullName = `${student.student_name} ${student.student_program}`;
            return fullName.toLowerCase().includes(query.toLowerCase());
        });

        searchListContainer.innerHTML = ''; // Clear previous results
        this.renderStudentList(filteredStudents, searchListContainer);
    }
}


const studentList = new StudentList('applet 4.json');
