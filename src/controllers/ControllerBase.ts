import { ControllerResult } from './Result';
import { HttpStatusCodes } from '../utilities/HttpStatusCodes';
import { ViewResult } from '../views/ViewResult';
import { ViewEngineParams } from '../views/ViewEngineParams';


export class ControllerBase {

    ok(): ControllerResult {
        return this.status(200);
    }

    status(statusCode: HttpStatusCodes): ControllerResult {
        return {
            statusCode
        };
    }

    view(params: ViewEngineParams): ControllerResult {

        return new ViewResult(params);
    }

}