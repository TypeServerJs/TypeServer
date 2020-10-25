import { Configuration } from './Configuration';


export interface IConfigBuilder {

    addEnvironmentVariables(
        filter?: string
    ): IConfigBuilder;

    addVariable(
        key: string,
        value: string
    ): IConfigBuilder;

    addJsonFile(
        path: string,
        reload?: boolean
    ): IConfigBuilder;

    addDotEnvFile(
        path: string,
        reload?: boolean
    ): IConfigBuilder;

    build(): Configuration;

}