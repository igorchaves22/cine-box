import path from "node:path";
import { app, BrowserWindow } from "electron";
import { calculateWindowSize, setupContentSecurityPolicy } from "./utils";

export const createMainWindow = () => {
    const preloadPath = path.join(__dirname, "../preload/index.js");
    const mainWindow = new BrowserWindow({
        ...calculateWindowSize(),
        show: false,
        webPreferences: {
            preload: preloadPath,
            contextIsolation: true,
            nodeIntegration: false,
            sandbox: true
        }
    });

    mainWindow.once("ready-to-show", () => mainWindow.show());

    const rendererUrl = process.env.ELECTRON_RENDERER_URL;
    const isDevMode = !app.isPackaged && !!rendererUrl;

    setupContentSecurityPolicy(rendererUrl, isDevMode);

    if (isDevMode) {
        mainWindow.loadURL(rendererUrl);
    } else {
        const htmlPath = path.join(__dirname, "../renderer/index.html");
        mainWindow.loadFile(htmlPath);
    }

    return mainWindow;
};
