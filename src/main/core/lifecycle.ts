import { app } from "electron";

export const registerAppLifecycle = () => {
    app.on("window-all-closed", () => app.quit());
    process.on("uncaughtException", (error) => console.error(error));
};
