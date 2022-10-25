export interface User {
    id: number;
    username: string;
    role: UserRole;
    password: string;
}

export enum UserRole {
    ADMIN = 'ADMIN',
    FORESTER = 'FORESTER'
}
