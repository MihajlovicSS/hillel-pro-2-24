import { MarksAPI } from "./MarksAPI"

export class StudentList{
    #studentList = []

    fetchList() {
        return MarksAPI.getList()
        .then((data) => {
            this.#studentList = data
        })
    }

    getStudentList(){
        return this.#studentList
    }

    createListItem(student) {
        return MarksAPI.create(student)
        .then((student) => {
            this.addStudent(student)
            return student
        })
    }

    deleteListItem(id) {
        return MarksAPI.delete(id)
        .then(() => {
            this.deleteStudent(id)
        })
    }

    updateListItem(id, newStudent) {
        return MarksAPI.update(id, newStudent)
        .then((newStudent) => {
            this.editStudent(id, newStudent)
            return newStudent
        })
    }

    addStudent(student) {
        this.#studentList.push(student)
    }

    deleteStudent(id) {
        const idInList = this.#studentList.indexOf(this.findListItemByID(id))

        this.#studentList.splice(idInList, 1)
    }

    createEditStudent(id, idInput, newMark){
        const newStudent = Object.assign(this.findListItemByID(id))

        newStudent.marks.splice(idInput-1, 1, Number(newMark))
        return newStudent
    }

    editStudent(id, newStudent) {
        const number = this.#studentList.indexOf(this.findListItemByID(id))
        
        this.#studentList.splice(number, 1, newStudent)

    }

    findListItemByID(id) {
        return this.#studentList.find(student => student.id === id)
    }
}