import type { Request, Response } from "express";
declare const userregister: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
declare const userlogin: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export { userregister, userlogin };
//# sourceMappingURL=authcontroller.d.ts.map