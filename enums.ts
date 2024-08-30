enum Roles {
    user = 'user',
    admin = 'admin'
}
type LoginDetails = {
    name?: string;
    email: string;
    password: string;
    role: Roles
}

const user1: LoginDetails = {
    name: "Sandhya",
    email: "sandhya@gmail.com",
    password: "hello",
    role: Roles.admin
}

const user2: LoginDetails = {
    name: "Ritu",
    email: "ritu@gmail.com",
    password: "hello",
    role: Roles.user
}

const isAdmin = (user: LoginDetails): string => {
    const {name, role} = user;
    return role === "admin" ? `${name} is allowed to edit the website.` : `${name} is not allowed to edit the website.`
}

console.log(isAdmin(user2))