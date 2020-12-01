import { NextFunction, Request, Response, Router } from 'express';
import { ThemeAController } from '../controllers/ThemeAController';

export class ThemeARouter {
    private _router = Router();
    private _controller = new ThemeAController();

    get router() {
        return this._router;
    }

    constructor() {
        this._configure();
    }

    private _configure() {
        this._router.get('/', (req: Request, res: Response, next: NextFunction) => {
            res.status(200).json(this._controller.defaultMethod());
        });

        this._router.get('/error', (req: Request, res: Response, next: NextFunction) => {
            try {
                const result = this._controller.someErrorMethod();
                res.status(200).json(result);
            }
            catch (error) {
                next(error);
            }
        });
    }
}