import { RequestAbstract } from '../messaging/RequestAbstract';
import { ResponseAbstract } from '../messaging/ResponseAbstract';
import { HttpResponseMessage } from '../messaging/http/HttpResponseMessage';
import { IRequestContext } from '../infrastructure/IRequestContext';


export type ControllerResultCallback = (
    req: RequestAbstract,
    res: ResponseAbstract,
    ctx: IRequestContext
) => ControllerResult;


export interface IResult {

    execute: ControllerResultCallback;

}

type CR =
    IResult |
    ControllerResultCallback |
    void |
    (
        HttpResponseMessage |
        (Pick<HttpResponseMessage, Extract<HttpResponseMessage, 'statusCode'>>)
    );

export type ControllerResult = CR | Promise<CR>;

