const fs = require('fs')

class UsersRepository {
    constructor(filename) {
        if(!filename) {
            throw new Error('Creating a repository requires a filename');
        }

        this.filename = filename;
        try {
            fs.access(this.filename)
        } catch (error) {
            fs.writeFileSync(this.filename, '[]');
        }
    }
}

new UsersRepository('users.json');