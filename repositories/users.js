const fs = require('fs');
const crypto = require('crypto');

class UsersRepository {
	constructor(filename) {
		if (!filename) {
			throw new Error('Creating a repository requires a filename');
		}

		this.filename = filename;
		try {
			fs.accessSync(this.filename);
		} catch (error) {
			fs.writeFileSync(this.filename, '[]');
		}
	}

	async getAll() {
		return JSON.parse(
			await fs.promises.readFile(this.filename, { encoding: 'utf8' })
		);
	}

	async create(attrs) {
		attrs.id = this.randomId();

		const records = await this.getAll();
		records.push(attrs);

		await this.writeAll(records);

		return attrs;
	}

	async writeAll(records) {
		await fs.promises.writeFile(
			this.filename,
			JSON.stringify(records, null, 2)
		);
	}

	randomId = () => crypto.randomBytes(4).toString('hex');

	async getOne(id) {
		const records = await this.getAll();
		return records.find(record => record.id === id);
	}

	async delete(id) {
		const allUsers = await this.getAll();

		const user = allUsers.find(user => user.id === id);
		const index = allUsers.indexOf(user);
		allUsers.splice(index, 1);

		await this.writeAll(allUsers);
	}

	async update(id, attrs) {
		const records = await this.getAll();
		const record = records.find(user => user.id === id);

		if (!record) throw new Error(`Record with id ${id} not found`);

		Object.assign(record, attrs);
		await this.writeAll(records);
	}

	async getOneBy(filters) {
		const records = await this.getAll();

		for (let record of records) {
			let found = true;

			for (let key in filters) {
				if (record[key] !== filters[key]) {
					found = false;
				}
			}

			return found ? record : console.log('User not found');
		}
	}
}

module.exports = new UsersRepository('users.json');