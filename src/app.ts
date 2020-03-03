

require('source-map-support').install();

import { bootstrap } from '@sustain/core'
import UserController from './controllers/user.controller';
import { UserService } from './services/user.service';
console.log('UserService: ', UserService);

const app = {
    controllers: [
        UserController
    ],
    providers: [
        UserService
    ]
}
/**
 * Bootstrap the application
 */
bootstrap(app);



