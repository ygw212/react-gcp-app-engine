class dataBase {
    constructor() {
        let self = this;
        self.todoTable = [];
    }

    create(todo) {
        let self = this;
        self.todoTable.push(todo);
    }

    getTodo(id) {
        let self = this;
        return self.todoTable.find(t => t.id === id);
    }
    getAll() {
        let self = this;
        return self.todoTable;
    }

    update(id, todo) {
        let self = this;
        let curIndex = self.todoTable.findIndex(t => t.id === id);
        self.todoTable[curIndex] = todo;
        return self.todoTable[curIndex];
    }

    delete(id) {
        let self = this;
        let curIndex = self.todoTable.findIndex(t => t.id === id);
        return self.todoTable.splice(curIndex, 1);
    }

}

exports.dataBase = new dataBase();