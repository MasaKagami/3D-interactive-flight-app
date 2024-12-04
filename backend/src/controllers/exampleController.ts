import { Request, Response } from "express";

export const getBackendStatus = (req: Request, res: Response) => {
    res.json({ message: "Backend is running!" });
};

export const getExampleData = (req: Request, res: Response) => {
    res.json({ data: "Example data from the backend" });
};