

require('source-map-support').install();

import { bootstrap } from '@sustain/core';
import UserController from './controllers/user.controller';
import { UserService } from './services/user.service';

const app = {
    controllers: [
        UserController
    ],
    providers: [
        UserService
    ],
    port: 5004,
    staticFolder: [
        'swagger-ui',
        ''
    ]
}
/**
 * Bootstrap the application
 */
bootstrap(app);



