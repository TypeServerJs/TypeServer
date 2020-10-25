
export type ConfigurationEntry =
    Configuration | string | any;

/**
 * Provides access to application confiration from multiple sources.
 */
export class Configuration {

    private config: Record<string, ConfigurationEntry>;

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


    get(path: string): string {
        return '';
    }

    getInt(path: string): number {
        return 0;
    }

    getString(path: string): string {
        return '';
    }

    getDateTime(path: string): Date {
        return new Date();
    }


    sync(value: Configuration) {
        
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

            const child = Configuration.fromObject(value);

            this.config[key] = child;

        } else {
            this.config[key] = value.toString();
        }
    }

}