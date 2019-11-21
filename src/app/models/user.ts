export class User {
    id: number;
    email: string;
    password: string
    role: string;
    status: string;

    constructor(id: number, email: string, password: string, role: string, status: string) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.role = role;
        this.status = status;
    }
}