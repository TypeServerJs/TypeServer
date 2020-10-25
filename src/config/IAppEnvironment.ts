

export interface IAppEnvironment {

    /**
     * 
     */
    env(): string;

    isProduction(): boolean;

    isDevelopment(): boolean;

}