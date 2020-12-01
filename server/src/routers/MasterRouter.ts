import { Router } from 'express';
import { ThemeARouter } from './ThemeARouter';
import { ThemeBRouter } from './ThemeBRouter';

class MasterRouter {
    private _router = Router();
    private _subrouterA = new ThemeARouter().router;
    private _subrouterB = new ThemeBRouter().router;
    
    get router() {
        return this._router;
    }
  
    constructor() {
        this._configure();
    }
  
    private _configure() {
      this._router.use('/themeA', this._subrouterA);
      this._router.use('/themeB', this._subrouterB);
    }
}

export = new MasterRouter().router;