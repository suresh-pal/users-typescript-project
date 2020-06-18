import * as request from "request";
import {User} from './User';


const OPTIONS: any = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
}
export class UserApiService{

    getUsers(cb: (userArray: User[]) => any) {

        request.get('http://localhost:8080/api/users', OPTIONS, (error: any, response: any, body: any) => {
            let users = body.map((user: any) => new User(user));
            cb(users);
        });

    }

    getSpecificUser(userId: string, cb: (user: User) => any) {

        request.get('http://localhost:8080/api/users/' + userId, OPTIONS, (error: any, response: any, body: any) => {
            let user = new User(body);
            cb(user);
        });

    }
}