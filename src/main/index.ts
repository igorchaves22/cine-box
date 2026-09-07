import { app } from "electron";
import { createMainWindow, ensureSingleInstance, registerAppLifecycle } from "./core";
import { runMigrations } from "./database/core";
import { registerIpcHandlers } from "./ipc";

if (ensureSingleInstance()) {
    registerAppLifecycle();
    app.whenReady().then(() => {
        runMigrations();
        registerIpcHandlers();
        createMainWindow();
    });
}
