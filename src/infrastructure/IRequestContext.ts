import { DependencyToken } from './IDependencyResolver';


export interface IRequestContext {

    getService<T>(
        service: DependencyToken
    ): T | null;

    getRequiredService<T>(
        service: DependencyToken
    ): T;

}