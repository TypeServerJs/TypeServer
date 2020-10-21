import {IResult} from '../infrastructure/IResult';


export class ControllerBase {

    async ok() : Promise<IResult> {
        
        return null as unknown as IResult;
        //return OkResult;
    }

}