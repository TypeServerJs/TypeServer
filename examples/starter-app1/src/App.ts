import {AppBase} from 'typeserver';

export default class App extends AppBase {

    configurePipeline(app: IServerPipeline) {

        app.cors();
        
        app.staticFiles();

        app.controllers(config => {
            config.controllersPattern = 'controllers/*Controller.ts';
        });

    }

}