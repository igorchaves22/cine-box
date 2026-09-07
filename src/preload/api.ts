import { ipcRenderer } from "electron";
import type { media } from "../main/database/schemas";

type Media = typeof media.$inferSelect;

export const api = {
    media: {
        findAll: (): Promise<Media[]> => ipcRenderer.invoke("media:find-all")
    }
};
