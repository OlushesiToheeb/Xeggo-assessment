import React from 'react';

import { Routes, Route } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import LandinPage from '../pages/LandingPage/LandingPage';
import Main from '../pages/Main/Main';

const AppRouter = () => {
    return (
        <Routes>
            <Route
                path='/login'
                element={
                    <PublicRoute>
                        <LandinPage />
                    </PublicRoute>
                }
                exact
            />
            <Route
                path='/'
                element={
                    <PrivateRoute>
                        <Main />
                    </PrivateRoute>
                }
            />
        </Routes>
    );
};

export default AppRouter;
