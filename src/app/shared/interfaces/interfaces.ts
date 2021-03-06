export interface Report {
    id: number,
    user_id: number,
    animal_type: string,
    gender: string,
    localisation: string,
    time: string,
    comment: string
}

export interface Animal {
    id: number,
    name: string,
    fr_fr: string,
    order: string,
    familly: string,
    male: string,
    female: string,
    height: string,
    description: string,
    localisation: string,
    spec: string,
    image: string
}

export interface Place {
    features: Array<any>
}

export interface User {
    id: number;
    email: string;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    token: string;
    isAdmin: boolean;
}