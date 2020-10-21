
export type AppListeningEndpoint = number | string;

export interface IAppBuilder {

    listen(
        endpoint: AppListeningEndpoint
    ): IAppBuilder;

    start(): Promise<void>;

}