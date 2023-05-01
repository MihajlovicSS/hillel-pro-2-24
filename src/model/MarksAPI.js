export class MarksAPI{
    static API = 'https://6391adecac688bbe4c4f165a.mockapi.io/api/students/'

    static getList(){
        return MarksAPI.request('GET', '')
    }

    static create(student) {
        return MarksAPI.request('POST', '', student)
    }

    static update (id, changes) {
        return MarksAPI.request('PUT', id, changes)
    }
    
    static delete(id) {
        return MarksAPI.request('DELETE', id)
    }

    static request(method, url, body){
        return fetch(MarksAPI.API + url, {
            method: method,
            body: body ? JSON.stringify(body) : undefined,
            headers: {
              'Content-type': 'application/json',
            }
        })
        .then((response) => {
            if (response.ok) return response.json()
            switch (method) {
                case 'POST':
                    throw new Error("Can't create student on server!")
                case 'PUT':
                    throw new Error("Can't update marks on server!")
                case 'DELETE':
                    throw new Error("Can't delete student from server!")
                case 'GET':
                    throw new Error("Can't load data from server!")
            }
        })
    }
}