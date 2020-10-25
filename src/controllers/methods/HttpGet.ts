import { HttpEndpoint } from './HttpEndpoint';


export type HttpGetParams = {

};

export function HttpGet(params: HttpGetParams) : MethodDecorator {

    return HttpEndpoint({
        methods: 'GET'
    });
};