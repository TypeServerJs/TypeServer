import { HttpMethod } from '../../utilities/HttpMethod';


export type HttpEndpointParams = {
    methods: HttpMethod | HttpMethod[];
};

export function HttpEndpoint(params?: HttpEndpointParams) : MethodDecorator {

    return (target, propertyKey, descriptor) => {

    };
};