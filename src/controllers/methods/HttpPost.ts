import { HttpEndpoint } from './HttpEndpoint';


export type HttpPostParams = {

};

export function HttpPost(params: HttpPostParams) : MethodDecorator {

    return HttpEndpoint({
        methods: 'POST'
    });
};