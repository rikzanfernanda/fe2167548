module.exports = class TextEditor {
    constructor() {
        this.undoStack = []
        this.redoStack = []
    }

    write(c) {
        this.undoStack.push(c)
    }

    read() {
        return this.undoStack.join('')
    }

    undo() {
        if (this.undoStack.length > 0) {
            let pop = this.undoStack.pop()
            this.redoStack.push(pop)
        }
    }
    
    redo() {
        if (this.redoStack.length > 0) {
            let pop = this.redoStack.pop()
            this.undoStack.push(pop)
        }
    }
}