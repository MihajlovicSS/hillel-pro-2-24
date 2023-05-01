export class TableMarks{
    static ID_TABLE = '#table-marks'
    static NUMBER_OF_MARKS = 10
    static CLASS_STUDENT_ROW = '.main-table__tr'
    static CLASS_DELETE_BTN = 'deleteBtn'
    static CLASS_INPUT = 'main-form__input-mark'

    constructor(root, options){
        this.createTable(root)
        this.table = this.findTable()
        this.options = options
        this.table.addEventListener('click', this.onDltButtonClick.bind(this))
        this.table.addEventListener('focusout', this.onInputClick.bind(this))
    }

    onDltButtonClick(e){
        const target = e.target
        const studentRow = this.findStudentRow(target)
        const id = studentRow.dataset.id

        if(this.isDeleteButton(target)) {
            this.options.onDelete(id, studentRow)
        }
    }

    onInputClick(e){
        const target = e.target
        const id = this.findStudentRow(target).dataset.id

        if(this.isInput(target)){
            const idInput = target.dataset.id
            const newMark = target.value

            this.options.onEdit(id, idInput, newMark)
        }
    }

    createTable(root) {
        root.insertAdjacentHTML('afterbegin', `
            <table id='table-marks' class="main-table">
                <tr>
                    <th class="main-table__th">Name</th>
                    <th class="main-table__th" colspan=10>Marks</th>
                    <th class="main-table__th">Actions</th>
                </tr>            
            </table>
        `)
    }

    findTable(){
        return document.querySelector(TableMarks.ID_TABLE)
    }

    renderList(list){
        const html = list.map(this.createNewTableRow).join('')

        this.table.insertAdjacentHTML('beforeend', html)
    }

    renderListItem(student){
        const html = this.createNewTableRow(student)

        this.table.insertAdjacentHTML('beforeend', html)
    }

    createNewTableRow(data){
        let html = `
        <tr class='main-table__tr' data-id=${data.id}>
            <td class="main-table__td main-table__td-name">
                <span>${data.name}</span>
            </td>
        `

        for(let i = 0; i < data.marks.length; i++){
            html += `<td class="main-table__td">
                     <input id="inputMark" class="main-form__input-mark" type="text" data-id="${[i+1]}" value="${data.marks[i]}"/>
                 </td>`
        }  

        html += `
            <td>
               <button type="button" class="deleteBtn">Delete</button>
            </td></tr>`
        return html    
    }

    isDeleteButton(target){
        return target.classList.contains(TableMarks.CLASS_DELETE_BTN)
    }

    isInput(target){
        return target.classList.contains(TableMarks.CLASS_INPUT)
    }

    findIdInput(target){
        return target.dataset.id
    }

    findStudentRow(element){
        return element.closest(TableMarks.CLASS_STUDENT_ROW)
    }

    deleteRow(row){
        row.remove()
    }
}