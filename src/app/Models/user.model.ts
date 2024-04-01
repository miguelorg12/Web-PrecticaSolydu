export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    role_id: number;
    created_at: string;
    updated_at: string;
}

export interface UserUpdate {
    name: string;
    role_id: number;
}

export interface UserLogin {
    email: string;
    password: string;
}

export interface UserRegister {
    name: string;
    email: string;
    password: string;
}