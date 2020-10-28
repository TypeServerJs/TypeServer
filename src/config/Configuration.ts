
export type ConfigurationEntry =
    Configuration | string | any;

/**
 * Provides access to application confiration from multiple sources.
 */
export class Configuration {

    private config: Record<string, ConfigurationEntry>;
    private _levelSeparator: string = ':';

    constructor() {

        this.config = {};
    }

    /**
     * Creates a Configuration from an object.
     * @param obj The source object.
     */
    static fromObject(obj: any): Configuration {

        const result = new Configuration();

        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                result.syncKey(key, obj[key] as any);
            }
        }

        return result;
    }


    get(path: string, defaultValue: any = undefined): ConfigurationEntry | undefined {

        const pathTokens = path.split(this._levelSeparator);

        let target: ConfigurationEntry = this.config;

        for (const key of pathTokens) {

            if (typeof target === 'object') {
                if (target instanceof Configuration) {
                    target = target.get(key);

                    if (typeof target === 'undefined') {
                        return defaultValue;
                    }
                } else if (target.hasOwnProperty(key)) {
                    target = target[key];

                    if (typeof target === 'undefined') {
                        return defaultValue;
                    }
                } else {
                    return defaultValue;
                }
            } else {
                break;
            }

        }

        return target;
    }

    getInt(path: string, defaultValue: number = 0): number {

        const value = this.get(path, defaultValue);

        return parseInt(value);
    }

    getString(path: string, defaultValue: string = ''): string {

        const value = this.get(path, defaultValue);

        return value;
    }

    getDateTime(path: string, defaultValue: Date = new Date()): Date {

        const value = this.get(path, defaultValue);

        return value;
    }


    sync(value: Configuration) {

        for (const key in value.config) {
            if (value.config.hasOwnProperty(key)) {
                const element = value.config[key];

                this.syncKey(key, element);
            }
        }

    }

    syncKey(
        key: string,
        value: ConfigurationEntry
    ) {
        if (typeof value === 'undefined') {
            delete this.config[key];
            return;
        }

        if (typeof value === 'string') {
            this.config[key] = value;
        }
        else if (typeof value === 'object') {

            if (value instanceof Configuration) {

                if (
                    this.config.hasOwnProperty(key) &&
                    this.config[key] instanceof Configuration
                ) {
                    this.config[key].sync(value);
                } else {
                    this.config[key] = value;
                }

            } else {

                const child = Configuration.fromObject(value);

                this.config[key] = child;

            }

        } else {
            this.config[key] = value.toString();
        }
    }

}