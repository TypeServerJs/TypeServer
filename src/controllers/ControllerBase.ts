import {IResult} from './IResult';
import { HttpStatusCodes } from '../utilities/HttpStatusCodes';
import { HttpResponseMessage } from '../messaging/http/HttpResponseMessage';


export class ControllerBase {

    ok() : Promise<IResult> {
        return this.status(200);
    }

    status(statusCode: HttpStatusCodes) : Promise<IResult> {
        return Promise.resolve({
            execute: (req, res) => {
                res.emit(new HttpResponseMessage(200))
            }
        });
    }

    view(viewName: string): Promise<IResult> {

        return Promise.resolve({
            execute: async (req, res) => {
                
            }
        });
    }

}