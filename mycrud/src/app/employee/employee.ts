export class Employee {
  id: number;
  name: string;
  salary: number;
  dob: Date = new Date();
  // qualifications: Qualification[];
}

export class Qualification {
  degree: string;
  isDoctorate: boolean;
}
