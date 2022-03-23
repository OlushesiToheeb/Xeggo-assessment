import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';

export const PublicRouter = ({ children, isAuthenticated }) => {
    return !isAuthenticated ? children : <Navigate to='/' />;
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
    };
};

export default connect(mapStateToProps)(PublicRouter);
