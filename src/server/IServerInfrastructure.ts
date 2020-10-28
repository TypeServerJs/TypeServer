import { EndpointInfo } from './EndpointInfo';
import { AppBase } from '../AppBase';


export interface IServerInfrastructure {

    name(): string;

    listen(endpoint: EndpointInfo): void;

    start(app: AppBase): Promise<void>;

    stop(): Promise<void>;

}