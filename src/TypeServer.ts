import { AppBase, AppConstructor } from './AppBase';
import { AppBuilder } from './server/AppBuilder';
import { IAppBuilder } from './server/IAppBuilder';

export class TypeServer {

    static app<TApp extends AppConstructor>(type: TApp): IAppBuilder {
        return new AppBuilder(type);
    }

    static run(app: AppBase): void {
        console.log('test');
    }

}