import { IResult, ControllerResultCallback } from '../controllers/Result';
import { IViewEngine, ViewEngineServiceToken } from './IViewEngine';
import { ViewEngineParams } from './ViewEngineParams';


export class ViewResult implements IResult {

    private _viewEngineParams: ViewEngineParams;

    constructor(
        viewEngineParams: ViewEngineParams
    ) {
        this._viewEngineParams = viewEngineParams;
    }

    execute: ControllerResultCallback = async (req, res, ctx) => {

        const viewEngine = ctx.getRequiredService<IViewEngine>(ViewEngineServiceToken);

        return await viewEngine.render(
            req,
            res,
            ctx,
            this._viewEngineParams
        );

    };

}