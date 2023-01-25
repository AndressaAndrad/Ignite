import { Router } from 'express';
import { AuthenticateUserController } from '../../../../modules/accounts/UseCases/authenticateUser/AuthenticateUserController';

const authenticateRoutes = Router();

const createAuthenticateController = new AuthenticateUserController();
authenticateRoutes.post('/sessions', createAuthenticateController.handle);

export { authenticateRoutes };

