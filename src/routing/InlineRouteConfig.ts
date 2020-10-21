import { HttpMethod } from '../utilities/HttpMethod';


export interface InlineRouteConfigEx {

    method: HttpMethod;

    name: string;

}


export type InlineRouteConfig = HttpMethod | InlineRouteConfigEx;