import bcrypt from 'bcryptjs';

const users = [
    {
        firstName: 'Admin',
        lastName: 'User',
        email: 'admin@example.com',
        password: '123456',
        role: 'admin'
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane@example.com',
        password: '123456'
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        password: '123456'
    }
]

export default users;