
export type DependencyToken = string;

export interface IDependencyResolver {

    resolve(
        dependency: DependencyToken
    ): any;

}