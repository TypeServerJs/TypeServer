import { Message } from './Message';


export class ResponseAbstract {

    async emit(
        message: Message
    ): Promise<Message | void> {
        
    }

}