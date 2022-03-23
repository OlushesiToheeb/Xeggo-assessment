import history from '../../utils/history';

export const loginUser = ({ user, isAuthenticated }) => {
    return {
        type: 'START_LOGIN_USER',
        payload: {
            isAuthenticated,
            user,
        },
    };
};

export const logoutUser = () => {
    return {
        type: 'START_LOGOUT_USER',
    };
};

export const startLogout = () => (dispatch) => {
    sessionStorage.clear('user');
    history.push('/');
    dispatch(logoutUser());
};
