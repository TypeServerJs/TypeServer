import IResult from '@core/infrastructure/IResult';


export default class ControllerBase {

    async ok() : Promise<IResult> {
        
        return OkResult;
    }

}