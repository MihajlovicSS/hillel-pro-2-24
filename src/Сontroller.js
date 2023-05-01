import { StudentList } from "./model/StudentList"
import { FormStudent } from "./view/FormStudentView"
import { TableMarks } from "./view/TableMarksView"

export class Controller{
    static root = document.querySelector('#root')

    constructor(){
        this.studentList = new StudentList()
        this.tableMarks = new TableMarks(root, {
            onDelete: this.deleteContact.bind(this),
            onEdit: this.updateMark.bind(this)
        })
        this.formStudent = new FormStudent(root, { onSubmit: this.createStudent.bind(this)})
        this.studentList.fetchList()
            .then(() => {
                this.tableMarks.renderList(this.studentList.getStudentList())
                console.log(this.studentList.getStudentList())
            })
    }

    createStudent(student){
        this.studentList.createListItem(student)
            .then((student) => {
                this.tableMarks.renderListItem(student)
                console.log(this.studentList.getStudentList())
                console.log('Удача')
            })
            .catch((error) => {
                Controller.showError(error)
            })
    }

    deleteContact(id, studentRow){
        console.log(id)
        this.studentList.deleteListItem(id)
            .then(() => {
                this.tableMarks.deleteRow(studentRow)
                console.log(this.studentList.getStudentList())
            })
            .catch((error) => {
                Controller.showError(error)
            })
    }

    updateMark(idStudent, idInput, newMark){
        // console.log('Зашли')
        // console.log(idInput)
        // console.log(newMark)
        // console.log(idStudent)
        const newStudent = this.studentList.createEditStudent(idStudent, idInput, newMark)

        this.studentList.updateListItem(idStudent, newStudent)
            .then(() => {
                console.log(this.studentList.getStudentList())
            })
            .catch((error) => {
                Controller.showError(error)
            })
    }

    static showError(error){
        alert(error.message)
    }
}