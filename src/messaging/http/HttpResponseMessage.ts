import { Message } from '../Message';
import { HttpStatusCodes } from '../../utilities/HttpStatusCodes';


export class HttpResponseMessage extends Message {
    
    public statusCode: HttpStatusCodes;

    constructor(statusCode?: HttpStatusCodes) {
        super();

        this.statusCode = statusCode || 200;
    }

}