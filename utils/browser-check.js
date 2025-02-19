export const isBrowser = () => typeof window !== "undefined";
export const getDocument = () => isBrowser() ? document : null; 