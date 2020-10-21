import { IAppBuilder, AppListeningEndpoint } from './IAppBuilder';
import { AppConstructor } from '../AppBase';

export class AppBuilder implements IAppBuilder {

    constructor(protected appType: AppConstructor) {

    }

    listen(endpoint: AppListeningEndpoint): IAppBuilder {
        
        return this;
    }


    async start(): Promise<void> {
        

    }

}