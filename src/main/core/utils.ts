import { screen, session } from "electron";
import { WINDOW_ASPECT_RATIO, WINDOW_WIDTH_RATIO } from "./constants";

export const calculateWindowSize = () => {
    const {
        workArea: { width: screenWidth }
    } = screen.getPrimaryDisplay();

    const width = Math.round(screenWidth * WINDOW_WIDTH_RATIO);
    const height = Math.round(width * WINDOW_ASPECT_RATIO);

    return { width, height };
};

export const setupContentSecurityPolicy = (rendererUrl: string | undefined, isDevMode: boolean) => {
    const connectSrc = isDevMode ? `'self' ${rendererUrl} ws://${new URL(rendererUrl!).host}` : "'none'";
    const scriptSrc = isDevMode ? "'self' 'unsafe-inline'" : "'self'";

    session.defaultSession.webRequest.onHeadersReceived((details, callback) =>
        callback({
            responseHeaders: {
                ...details.responseHeaders,
                "Content-Security-Policy": [
                    `default-src 'self'; script-src ${scriptSrc}; connect-src ${connectSrc}; object-src 'none';`
                ]
            }
        })
    );
};
