import { ipcMain } from "electron";
import { mediaService } from "../database/services";

export const registerMediaHandlers = () => {
    ipcMain.handle("media:find-all", () => mediaService.findAll());
};
