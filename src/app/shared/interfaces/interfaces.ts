export default interface Report {
    id: number,
    animal_type: string,
    gender: string,
    localisation: string,
    time: string,
    comment: string
}

export default interface Animal {
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