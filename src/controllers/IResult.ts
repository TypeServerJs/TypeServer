import { RequestAbstract } from '../messaging/RequestAbstract';
import { ResponseAbstract } from '../messaging/ResponseAbstract';

export type AnyResult = IResult | any;

export interface IResult {

    execute(
        req: RequestAbstract,
        res: ResponseAbstract
    ): Promise<any> | any;

}