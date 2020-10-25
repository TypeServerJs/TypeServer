import { HttpEndpoint } from './HttpEndpoint';


export type HttpPutParams = {

};

export function HttpPut(params: HttpPutParams) : MethodDecorator {

    return HttpEndpoint({
        methods: 'PUT'
    });
};