import { db } from "../core";
import { media } from "../schemas";

export const mediaRepository = {
    findAll: () => db.select().from(media)
};
