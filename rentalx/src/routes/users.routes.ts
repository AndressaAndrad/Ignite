import { Router } from 'express';
import { AuthenticateUserController } from '../modules/accounts/UseCases/authenticateUser/AuthenticateUserController';

const usersRoutes = Router();

const authenticateUserController = new AuthenticateUserController();
usersRoutes.post('/sessions', authenticateUserController.handle);

export { usersRoutes };
