import { HttpEndpoint } from './HttpEndpoint';


export type HttpHeadParams = {

};

export function HttpHead(params: HttpHeadParams) : MethodDecorator {

    return HttpEndpoint({
        methods: 'HEAD'
    });
};