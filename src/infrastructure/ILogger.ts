
export type LoggerSeverity =
    "log" |
    "success" |
    "error" |
    "warning" |
    "fatal"
    ;



export type LoggerOptions = LoggerSeverity;

export type LoggerPayload = Error | string | number;

export interface ILogger {

    log(
        options: LoggerOptions,
        payload: LoggerPayload,
        ...params: []
    ): void;

}