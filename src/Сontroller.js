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
            })
    }

    createStudent(student){
        this.studentList.createListItem(student)
            .then((student) => {
                this.tableMarks.renderListItem(student)
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
            })
            .catch((error) => {
                Controller.showError(error)
            })
    }

    updateMark(idStudent, idInput, newMark){
        const newStudent = this.studentList.createEditStudent(idStudent, idInput, newMark)

        this.studentList.updateListItem(idStudent, newStudent)
            .catch((error) => {
                Controller.showError(error)
            })
    }

    static showError(error){
        alert(error.message)
    }
}