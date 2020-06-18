import { UserApiService} from './UserApiService';
import {User} from './User';

let svc = new UserApiService();
if (process.argv.length < 3) {

    svc.getUsers((userArray: User[]) => {
        console.log(userArray);
        console.log("You can enter user ID as the 3rd command line argument to get specific user information..");
        console.log("Example: npm start billingsjj");
    });

}
else {
    var userId: string = process.argv[2];
    svc.getSpecificUser(userId, (user: User) => {
        console.log(user);
    });
}

