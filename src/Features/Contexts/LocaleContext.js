import { createContext } from "react";

const LocaleContext = createContext(null);

export const LocaleProvider = LocaleContext.Provider

export default LocaleContext;