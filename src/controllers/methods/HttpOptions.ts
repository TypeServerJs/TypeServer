import { HttpEndpoint } from './HttpEndpoint';


export type HttpOptionsParams = {

};

export function HttpOptions(params: HttpOptionsParams) : MethodDecorator {

    return HttpEndpoint({
        methods: 'OPTIONS'
    });
};