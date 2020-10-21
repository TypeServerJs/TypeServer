import { AppBase, AppConstructor } from './AppBase';
import { AppBuilder } from './server/AppBuilder';
import { IAppBuilder } from './server/IAppBuilder';
import { IServerInfrastructure } from './server/IServerInfrastructure';

export class TypeServer {

    static app<TApp extends AppConstructor>(
        server: IServerInfrastructure,
        type: TApp
    ): IAppBuilder {
        return new AppBuilder(server, type);
    }

}