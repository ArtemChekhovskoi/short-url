import React from "react"
import {Routes, Route, Navigate} from "react-router-dom"
import {AuthPage} from "./pages/AuthPage"
import {AllLinks} from "./pages/AllLinks"
import {CreateLink} from "./pages/CreateLink"
import {DetailsPage} from "./pages/DetailsPage"
import MainPage from "./pages/MainPage"

export function useRouter(isAutorized) {
    if(isAutorized) {
        return(
            <Routes>
                <Route exact path="/links" element={<AllLinks/>} />
                <Route path="/create" element={<CreateLink/>} />
                <Route path="/detail/:id" element={<DetailsPage/>} />
                <Route
                    path="*"
                    element={<Navigate to="/create" replace />} />
            </Routes>
        )
    }
        return(
            <Routes>
                <Route path="/" element={<MainPage/>} />
                <Route path="/signup" element={<AuthPage />} />
                <Route path="/signin" element={<AuthPage />} />
                <Route
                    path="*"
                    element={<Navigate to="/" replace />} />
            </Routes>
    )        
            
}