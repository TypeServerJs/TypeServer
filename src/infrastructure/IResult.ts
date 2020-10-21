
export interface IResult {

    execute(
        req: Request,
        res: Response
    ): Promise<any> | any;

}