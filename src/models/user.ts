export class User {

   firstName: string;
   lastName: string;
   email: string;
  password: string;
  id: string;
  phoneNumber: string;
  imageLink: string;
  birthday: Date;
  constructor(firstName: string,
              LastName: string, email: string, password: string, id: string, phoneNumber: string, imageLink: string, birthday: Date) {
    this.firstName = firstName;
    this.lastName = LastName;
    this.email = email;
    this.password = password;
    this.id = id;
    this.phoneNumber = phoneNumber;
    this.imageLink = imageLink;
    this.birthday = birthday;
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
