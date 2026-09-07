import { screen } from "electron";
import { WINDOW_ASPECT_RATIO, WINDOW_WIDTH_RATIO } from "./constants";

export const calculateWindowSize = () => {
    const {
        workArea: { width: screenWidth }
    } = screen.getPrimaryDisplay();

    const width = Math.round(screenWidth * WINDOW_WIDTH_RATIO);
    const height = Math.round(width * WINDOW_ASPECT_RATIO);

    return { width, height };
};
