class Student {
    constructor(studentId, name) {
        this.studentId = studentId;
        this.name = name;
        this.courses = [];
    }

    enroll(course) {
        this.courses.push(course);
    }

    getDetails() {
        const courseNames = this.courses.map(course => course.name).join(', ');
        return `ID: ${this.studentId}, Name: ${this.name}, Courses: ${courseNames}`;
    }
}

class Course {
    constructor(courseId, name) {
        this.courseId = courseId;
        this.name = name;
    }

    getDetails() {
        return `ID: ${this.courseId}, Name: ${this.name}`;
    }
}

class ClassManagementSystem {
    constructor() {
        this.students = {};
        this.courses = {};
    }

    addStudent(studentId, name) {
        if (this.students[studentId]) {
            alert("Student ID already exists.");
        } else {
            const student = new Student(studentId, name);
            this.students[studentId] = student;
            this.updateStudentList();
            alert("Student added successfully.");
        }
    }

    addCourse(courseId, name) {
        if (this.courses[courseId]) {
            alert("Course ID already exists.");
        } else {
            const course = new Course(courseId, name);
            this.courses[courseId] = course;
            this.updateCourseList();
            alert("Course added successfully.");
        }
    }

    enrollStudentInCourse(studentId, courseId) {
        const student = this.students[studentId];
        const course = this.courses[courseId];
        if (!student) {
            alert("Student ID not found.");
        } else if (!course) {
            alert("Course ID not found.");
        } else {
            student.enroll(course);
            this.updateStudentList();
            alert("Student enrolled in course successfully.");
        }
    }

    updateStudentList() {
        const studentsList = document.getElementById('studentsList');
        studentsList.innerHTML = '';
        Object.values(this.students).forEach(student => {
            const li = document.createElement('li');
            li.textContent = student.getDetails();
            studentsList.appendChild(li);
        });
    }

    updateCourseList() {
        const coursesList = document.getElementById('coursesList');
        coursesList.innerHTML = '';
        Object.values(this.courses).forEach(course => {
            const li = document.createElement('li');
            li.textContent = course.getDetails();
            coursesList.appendChild(li);
        });
    }
}

const cms = new ClassManagementSystem();

document.getElementById('addStudentForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const studentId = document.getElementById('studentId').value.trim();
    const studentName = document.getElementById('studentName').value.trim();
    cms.addStudent(studentId, studentName);
    event.target.reset();
});

document.getElementById('addCourseForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const courseId = document.getElementById('courseId').value.trim();
    const courseName = document.getElementById('courseName').value.trim();
    cms.addCourse(courseId, courseName);
    event.target.reset();
});

document.getElementById('enrollForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const studentId = document.getElementById('enrollStudentId').value.trim();
    const courseId = document.getElementById('enrollCourseId').value.trim();
    cms.enrollStudentInCourse(studentId, courseId);
    event.target.reset();
});
