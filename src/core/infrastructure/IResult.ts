
export default interface IResult {

    execute(req: Request, res: Response): Promise<any> | any;

}