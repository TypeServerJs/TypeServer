import { EndpointInfo } from './EndpointInfo';


export interface IServerInfrastructure {

    name(): string;

    listen(endpoint: EndpointInfo): void;

    start(): Promise<void>;

    stop(): Promise<void>;

}