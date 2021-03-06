import { IAppBuilder, ConfigCallback, AfterConfigAvailableCallback } from './IAppBuilder';
import { AppConstructor, AppBase } from '../AppBase';
import { EndpointInfo } from './EndpointInfo';
import { IServerInfrastructure } from './IServerInfrastructure';
import { IAppEnvironment } from '../config/IAppEnvironment';
import { IServerPipeline } from '../infrastructure/IServerPipeline';
import { IDependencyContainer } from '../infrastructure/IDependencyContainer';
import { IConfigBuilder } from '../config/IConfigBuilder';
import { ConfigBuilder } from '../config/ConfigBuilder';
import { Configuration } from '../config/Configuration';
import { AppEnvironment } from '../config/AppEnvironment';

export class AppBuilder implements IAppBuilder {

    private appEnv: AppEnvironment;
    private endpoint?: EndpointInfo;
    private pipeline: IServerPipeline;
    private dependencyContainer: IDependencyContainer;
    private configBuilder: IConfigBuilder;
    private _isConfigBuilt: boolean;
    private afterConfigAvailableCallbacks: AfterConfigAvailableCallback[];


    constructor(
        protected server: IServerInfrastructure,
        protected appType: AppConstructor
    ) {
        this.appEnv = new AppEnvironment(AppEnvironment.DevelopmentProfileName);
        this.pipeline = null!;
        this.dependencyContainer = null!;
        this.configBuilder = new ConfigBuilder();
        this.afterConfigAvailableCallbacks = [];
        this._isConfigBuilt = false;
    }


    setEnvironment(environmentName: string): IAppBuilder {
        
        if (this._isConfigBuilt) {
            throw new Error('Config has been made.');
        }

        this.appEnv.setEnv(environmentName);

        return this;
    }

    config(config: ConfigCallback): IAppBuilder {

        if (this._isConfigBuilt) {
            throw new Error('Config has been made.');
        }

        if (config) {

            const env = this.getEnvironment();

            config(this.configBuilder, env);
        }
        
        return this;
    }

    afterConfigAvailable(config: AfterConfigAvailableCallback): IAppBuilder {
        
        if (this._isConfigBuilt) {
            throw new Error('Config has been made.');
        }

        this.afterConfigAvailableCallbacks.push(config);

        return this;
    }

    listen(endpoint: EndpointInfo): IAppBuilder {

        if (endpoint) {
            this.endpoint = { ...endpoint };
        } else {
            this.endpoint = undefined;
        }

        return this;
    }


    getEnvironment(): IAppEnvironment {
        let appEnv: IAppEnvironment;

        if (this.appEnv) {
            appEnv = this.appEnv;
        } else {

        }

        return appEnv!;
    }


    buildConfig(): Configuration {

        this._isConfigBuilt = true;

        return undefined!;
    }


    configureApplication(): AppBase {

        const appEnv = this.getEnvironment();

        const config = this.buildConfig();

        for (const callback of this.afterConfigAvailableCallbacks) {
            callback(this, config, appEnv);
        }

        const AppBaseType = this.appType;

        const app = new AppBaseType(appEnv, config) as AppBase;

        app.configureServices(this.dependencyContainer);

        app.configurePipeline(this.pipeline);
        
        return app;

    }


    async start(): Promise<void> {

        if (this.endpoint) {
            this.server.listen(this.endpoint);
        }

        const app = this.configureApplication();
        
        await this.server.start(app);

    }

}