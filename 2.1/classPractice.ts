class Employee {
    id: number;
    name: string;
    phone: any;
    email: string;

    constructor(id: number, name: string, phone: any, email: string){
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
    }

    toString(): string {
        let output =
        `Employee Record ID ${this.id}\n` +
        `Name: ${this.name}\n` +
        `Contact info\n` +
        `Phone: ${this.phone}` +
        `Email: ${this.email}`;
        return output
    }
}

let firstEmployee = new Employee(
    1,
    "Name",
    9873453455,
    "string@string"
)
console.log(firstEmployee.toString());