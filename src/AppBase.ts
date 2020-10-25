import { IAppEnvironment } from './config/IAppEnvironment';
import { IServerPipeline } from './infrastructure/IServerPipeline';
import { IDependencyContainer } from './infrastructure/IDependencyContainer';
import { Configuration } from './config/Configuration';

export type AppConstructor = ({
    new(
        appEnv: IAppEnvironment,
        config: Configuration
    ): {}
});

export abstract class AppBase {

    constructor(
        protected appEnv: IAppEnvironment,
        protected config: Configuration
    ) {

    }

    configureServices(services: IDependencyContainer): any {

    }

    abstract configurePipeline(
        app: IServerPipeline
    ): any;

}