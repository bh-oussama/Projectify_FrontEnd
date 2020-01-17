export class User {
  FirstName: string;
  LastName: string;
  Email: string;
  Password: string;
  Id: number;
  PhoneNumber: string;
  // imageLink: string;
  DateOfBirth: string;
  constructor(
    firstName: string,
    lastName: string,
    email: string,
    password: string,

    phoneNumber: string,
    //imageLink: string,
    dateOfBirth: string
  ) {
    this.FirstName = firstName;
    this.LastName = lastName;
    this.Email = email;
    this.Password = password;

    this.PhoneNumber = phoneNumber;
    // this.imageLink = imageLink;
    this.DateOfBirth = dateOfBirth;
  }

  /* get firstName(): string {
     return this.firstName;
   }

   set firstName(value: string) {
     this.firstName = value;
   }

   get LastName(): string {
     return this.LastName;
   }

   set LastName(value: string) {
     this.LastName = value;
   }

   get email(): string {
     return this.email;
   }

   set email(value: string) {
     this.email = value;
   }

   get password(): string {
     return this.password;
   }

   set password(value: string) {
     this.password = value;
   }

   get id(): string {
     return this.id;
   }

   set id(value: string) {
     this.id = value;
   }

   get phoneNumber(): string {
     return this.phoneNumber;
   }

   set phoneNumber(value: string) {
     this.phoneNumber = value;
   }

   get imageLink(): string {
     return this.imageLink;
   }

   set imageLink(value: string) {
     this.imageLink = value;
   }

   get birthday(): Date {
     return this.birthday;
   }

   set birthday(value: Date) {
     this.birthday = value;
   }

 */
}
