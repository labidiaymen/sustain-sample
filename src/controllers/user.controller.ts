import { Get, Controller, Request, Session } from "@sustain/core";
import { UserService } from "../services/user.service";


@Controller()
export default class UserController {
    constructor( private userService : UserService) { }

    @Get('/users')
    users(@Session() session : any) {
        return "list of users";
    }
    
    @Get('/user/:id')
    user(@Request() request: any) {
        const { id } = request.params
        return this.userService.get(id);
    }
}