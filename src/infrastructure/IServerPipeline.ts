

export interface IServerPipeline {

    useMiddleware<TMiddleware>(): void;

    useRouting(): void;

}