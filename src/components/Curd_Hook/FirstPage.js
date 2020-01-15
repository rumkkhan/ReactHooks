import React from 'react';
import MainPage from './MainPage'

export const UserContext = React.createContext();
const username = "Muhammad Ramzan kHan"
export default function FirstPage() {
    return(       
            <UserContext.Provider value={username}>
                      <MainPage />
            </UserContext.Provider>       
    )
}