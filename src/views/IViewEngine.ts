import { RequestAbstract } from '../messaging/RequestAbstract';
import { ResponseAbstract } from '../messaging/ResponseAbstract';
import { IRequestContext } from '../infrastructure/IRequestContext';
import { ViewEngineParams } from './ViewEngineParams';
import { ControllerResult } from '../controllers/Result';

export const ViewEngineServiceToken = 'ViewEngine';

export interface IViewEngine {

    render(
        req: RequestAbstract,
        res: ResponseAbstract,
        ctx: IRequestContext,
        params: ViewEngineParams
    ): ControllerResult;

}