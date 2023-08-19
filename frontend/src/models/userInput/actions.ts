import { UserInputAction, UserInputTypes } from '.';
import { Dispatch } from 'redux';

export const changeUserInputWorkerDescriptionEvent = (event: string) => {
    return (dispatch: Dispatch<UserInputAction>) => {
        dispatch({ type: UserInputTypes.SET_WORKER_DESCRIPTION, payload: event });
    };
};

export const changeUserInputAboutCompanyEvent = (event: string) => {
    return (dispatch: Dispatch<UserInputAction>) => {
        dispatch({ type: UserInputTypes.SET_ABOUT_COMPANY, payload: event });
    };
};