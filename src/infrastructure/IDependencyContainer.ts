
export type ConstructorType = (new (...params: any[]) => {});

export type DependencyLookup = string;

export interface IDependencyContainer {

    register(
        lookup: DependencyLookup,
        constructor: ConstructorType
    ): void;

}