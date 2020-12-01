import ErrorHandler from "../models/ErrorHandler";

export class ThemeAController {
    defaultMethod() {
        return {
          text: `You've reached the ${this.constructor.name} default method`
        };
    }

    someErrorMethod() {
        throw new ErrorHandler(501, 'Not implemented method');
    }
}