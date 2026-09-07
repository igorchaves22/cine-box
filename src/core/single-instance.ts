import { app, BrowserWindow } from "electron";

export const ensureSingleInstance = () => {
    const gotTheLock = app.requestSingleInstanceLock();

    if (!gotTheLock) {
        app.quit();

        return false;
    }

    app.on("second-instance", () => {
        const mainWindow = BrowserWindow.getAllWindows()[0];

        if (!mainWindow) return;
        if (mainWindow.isMinimized()) mainWindow.restore();

        mainWindow.focus();
    });

    return true;
};
