import {ControllerBase} from './ControllerBase';


export type ControllerAnnotationParameters = string | {

    route: string;

}


export function Controller(params?: ControllerAnnotationParameters) : ClassDecorator {

    return (target) => {
        
    };
}