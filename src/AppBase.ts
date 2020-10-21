import { IAppInitEnvironment } from './config/IAppInitEnvironment';
import { IServerPipeline } from './infrastructure/IServerPipeline';

export type AppConstructor = ({
    new(
        appInitEnv: IAppInitEnvironment
    ): {}
});

export abstract class AppBase {

    constructor(protected appInitEnv: IAppInitEnvironment) {

    }

    configureServices(): any {

    }

    abstract configurePipeline(
        app: IServerPipeline
    ): any;

}