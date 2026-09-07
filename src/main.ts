import { app } from "electron";
import {
    createMainWindow,
    ensureSingleInstance,
    registerAppLifecycle,
} from "./core";

if (ensureSingleInstance()) {
    registerAppLifecycle();
    app.whenReady().then(createMainWindow);
}
