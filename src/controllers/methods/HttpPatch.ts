import { HttpEndpoint } from './HttpEndpoint';


export type HttpPatchParams = {

};

export function HttpPatch(params: HttpPatchParams) : MethodDecorator {

    return HttpEndpoint({
        methods: 'PATCH'
    });
};