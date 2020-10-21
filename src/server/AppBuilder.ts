import { IAppBuilder } from './IAppBuilder';
import { AppConstructor, AppBase } from '../AppBase';
import { EndpointInfo } from './EndpointInfo';
import { IServerInfrastructure } from './IServerInfrastructure';
import { IAppInitEnvironment } from '../config/IAppInitEnvironment';
import { IServerPipeline } from '../infrastructure/IServerPipeline';
import { IDependencyContainer } from '../infrastructure/IDependencyContainer';

export class AppBuilder implements IAppBuilder {

    private appInitEnv?: IAppInitEnvironment;
    private endpoint?: EndpointInfo;
    private pipeline: IServerPipeline;
    private dependencyContainer: IDependencyContainer;

    constructor(
        protected server: IServerInfrastructure,
        protected appType: AppConstructor
    ) {
        this.pipeline = null!;
        this.dependencyContainer = null!;
    }

    listen(endpoint: EndpointInfo): IAppBuilder {

        if (endpoint) {
            this.endpoint = { ...endpoint };
        } else {
            this.endpoint = undefined;
        }

        return this;
    }


    getInitEnvironment(): IAppInitEnvironment {
        let appInitEnv: IAppInitEnvironment;

        if (this.appInitEnv) {
            appInitEnv = this.appInitEnv;
        } else {

        }

        return appInitEnv!;
    }


    configureApplication(): AppBase {

        const appInitEnv = this.getInitEnvironment();

        const AppBaseType = this.appType;

        const app = new AppBaseType(appInitEnv) as AppBase;

        app.configureServices(this.dependencyContainer);

        app.configurePipeline(this.pipeline);
        
        return app;

    }


    async start(): Promise<void> {

        if (this.endpoint) {
            this.server.listen(this.endpoint);
        }

        const app = this.configureApplication();

        await this.server.start();

    }

}