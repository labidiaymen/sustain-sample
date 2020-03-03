import { Get, Controller, Request } from "@sustain/core";
import { UserService } from "../services/user.service";


@Controller()
export default class UserController {
    constructor( private userService : UserService) { }

    @Get('/users')
    users() {
        return "ok";

    }
    
    @Get('/user/:id')
    user(@Request() request: any) {
        const { id } = request.params
        return this.userService.get(id);
    }
}