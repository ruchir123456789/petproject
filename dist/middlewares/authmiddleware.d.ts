import type { NextFunction, Request, Response } from "express";
declare const authenticateuser: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
declare const isadmin: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export { authenticateuser, isadmin };
//# sourceMappingURL=authmiddleware.d.ts.map