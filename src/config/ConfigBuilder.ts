import { IConfigBuilder } from './IConfigBuilder';
import { Configuration } from './Configuration';


export class ConfigBuilder implements IConfigBuilder {

    addEnvironmentVariables(filter?: string | undefined): IConfigBuilder {
        throw new Error("Method not implemented.");
    }

    addVariable(key: string, value: string): IConfigBuilder {
        throw new Error("Method not implemented.");
    }

    addJsonFile(path: string, reload?: boolean | undefined): IConfigBuilder {
        throw new Error("Method not implemented.");
    }

    addDotEnvFile(path: string, reload?: boolean | undefined): IConfigBuilder {
        throw new Error("Method not implemented.");
    }

    build(): Configuration {
        throw new Error("Method not implemented.");
    }

}