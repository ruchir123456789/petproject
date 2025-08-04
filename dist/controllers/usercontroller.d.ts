import type { Request, Response } from "express";
declare const getuserdata: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
declare const updateuserdata: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
declare const deleteuserdata: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export { getuserdata, updateuserdata, deleteuserdata };
//# sourceMappingURL=usercontroller.d.ts.map