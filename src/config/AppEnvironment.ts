import { IAppEnvironment } from './IAppEnvironment';


export class AppEnvironment implements IAppEnvironment {

    static ProductionProfileName = 'production';
    static DevelopmentProfileName = 'development';

    private _env: string;

    constructor(envProfile: string) {
        this._env = envProfile;
    }

    env(): string {
        return this._env;
    }

    setEnv(envProfile: string) {
        this._env = envProfile;
    }

    isProduction(): boolean {
        return this.env() == AppEnvironment.ProductionProfileName;
    }

    isDevelopment(): boolean {
        return this.env() == AppEnvironment.DevelopmentProfileName;
    }

}