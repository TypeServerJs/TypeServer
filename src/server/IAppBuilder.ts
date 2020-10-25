import { Configuration } from '../config/Configuration';
import { IConfigBuilder } from '../config/IConfigBuilder';
import { IAppEnvironment } from '../config/IAppEnvironment';

export type AppListeningEndpoint = number | string;

export type AfterConfigAvailableCallback = (app: IAppBuilder, config: Configuration, env: IAppEnvironment) => any;
export type ConfigCallback = (builder: IConfigBuilder, env: IAppEnvironment) => any;


export interface IAppBuilder {

    setApplicationProfile(profile: string): IAppBuilder;

    config(config: ConfigCallback): IAppBuilder;

    afterConfigAvailable(config: AfterConfigAvailableCallback): IAppBuilder;

    listen(
        endpoint: AppListeningEndpoint
    ): IAppBuilder;

    start(): Promise<void>;

}