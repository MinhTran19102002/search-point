'use client'

import { createContext, useContext, useState } from "react";

interface IUserContext {
    collapseMenu: boolean;
    setCollapseMenu: (v: boolean) => void;
    showSider: boolean;
    setShowSider: (v: boolean) => void;
}

export const UserContext = createContext<IUserContext | null>(null);

export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [collapseMenu, setCollapseMenu] = useState(false);
    const [showSider, setShowSider] = useState(false);

    return (
        <UserContext.Provider value={{ collapseMenu, setCollapseMenu, showSider, setShowSider }}>
            {children}
        </UserContext.Provider>
    )
};

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) throw new Error("useUserContext must be used within a UserContextProvider");
    return context;
};
