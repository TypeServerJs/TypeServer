import IAppInitEnvironment from '@core/config/IAppInitEnvironment';


export default abstract class AppBase {

    constructor(protected appInitEnv: IAppInitEnvironment) {
        
    }

    configureServices(): any {
        
    }

    abstract configurePipeline(): any;

}