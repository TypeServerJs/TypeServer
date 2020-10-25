import { HttpEndpoint } from './HttpEndpoint';


export type HttpDeleteParams = {

};

export function HttpDelete(params: HttpDeleteParams) : MethodDecorator {

    return HttpEndpoint({
        methods: 'DELETE'
    });
};