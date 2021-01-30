import bcrypt from 'bcryptjs'

const users = [
	{
		name: 'Admin User', 
		email: 'admin@example.com',
		password: bcrypt.hashSync('123456',10),
		isAdmin: true,
	},
	{
		name: 'Avinash', 
		email: 'avinash@example.com',
		password: bcrypt.hashSync('123456',10),
	},

	{
		name: 'Avi', 
		email: 'avi@example.com',
		password: bcrypt.hashSync('123456',10),
	},

]

export default users