import type { Request, Response } from "express";
declare const createdogdata: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
declare const getdogdata: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
declare const updatedogdata: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
declare const deletedogdata: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export { createdogdata, getdogdata, updatedogdata, deletedogdata };
//# sourceMappingURL=dogcontroller.d.ts.map