export class User {
    userid: string;
    firstname: string;
    lastname: string;
    email: string;

    constructor(userResponse:any) {
        this.userid = userResponse.userid;
        this.firstname = userResponse.firstname;
        this.lastname = userResponse.lastname;
        this.email = userResponse.email;
    }
} 