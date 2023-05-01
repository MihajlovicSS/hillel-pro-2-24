export class FormStudent{
    static FORM_ID = '#form'

    constructor(root, options){
        this.createForm(root)
        this.form = document.querySelector(FormStudent.FORM_ID)
        this.options = options
        this.form.addEventListener('submit', this.onFormSubmit.bind(this))
    }

    createForm(root) {        
        root.insertAdjacentHTML('beforeend', `
            <form id="form" class="main-form" action="" method="post">
                <input id="inputName" class="main-form__input-name" type="text" placeholder="Enter name"/>
                <button class="main-form__submit" id="submitButton">Save</button>
            </form>
        `)
    }

    onFormSubmit(e){
        e.preventDefault()  
          
        const studentName = this.getData()
        this.clearForm()
    
        if(!this.isValidName(studentName)){
            Controller.showError(new Error('Введенные данные не валидны!'))
            return
        }

        this.options.onSubmit(studentName)    
    }

    getData(){
        return {
            id: this.form.id.value,
            name: this.form.inputName.value
        }
    }

    findForm(){
        return document.querySelector(FormStudent.FORM_ID)
    }

    clearForm(){
        this.form.reset()
    }

    isValidName(value){
        return this.isNotEmpty(value.name) && !this.isNumber(value.name)
    }

    isNotEmpty(value){
        return value.trim()
    }

    isNumber(value){
        return !isNaN(value) && this.isNotEmpty(value)
    }
}