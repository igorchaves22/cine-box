import path from "node:path";
import { BrowserWindow } from "electron";
import { calculateWindowSize } from "./utils";

export const createMainWindow = () => {
    const mainWindow = new BrowserWindow({
        ...calculateWindowSize(),
        show: false,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: false,
            sandbox: true
        }
    });

    mainWindow.once("ready-to-show", () => mainWindow.show());

    const htmlPath = path.join(__dirname, "../index.html");
    mainWindow.loadFile(htmlPath);

    return mainWindow;
};
