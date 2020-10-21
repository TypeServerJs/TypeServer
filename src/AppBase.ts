import { IAppInitEnvironment } from './config/IAppInitEnvironment';
import { IServerPipeline } from './infrastructure/IServerPipeline';
import { IDependencyContainer } from './infrastructure/IDependencyContainer';

export type AppConstructor = ({
    new(
        appInitEnv: IAppInitEnvironment
    ): {}
});

export abstract class AppBase {

    constructor(protected appInitEnv: IAppInitEnvironment) {

    }

    configureServices(services: IDependencyContainer): any {
        
    }

    abstract configurePipeline(
        app: IServerPipeline
    ): any;

}