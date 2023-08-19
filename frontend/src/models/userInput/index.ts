export type UserInput = {
    workerDescription: string;
    aboutCompany: string;
}

export enum UserInputTypes {
    SET_WORKER_DESCRIPTION = 'SET_WORKER_DESCRIPTION',
    SET_ABOUT_COMPANY = 'SET_ABOUT_COMPANY',
}

interface SetUserInputWorkerDescriptionAction {
    type: UserInputTypes.SET_WORKER_DESCRIPTION;
    payload: string;
}

interface SetUserInputAboutCompanyAction {
    type: UserInputTypes.SET_ABOUT_COMPANY;
    payload: string;
}

export type UserInputAction = SetUserInputWorkerDescriptionAction | SetUserInputAboutCompanyAction;

const initState: UserInput = {
    workerDescription: '',
    aboutCompany: '',
};

export const userInputReducer = (state = initState, action: UserInputAction): UserInput => {
    switch(action.type) {
        case UserInputTypes.SET_WORKER_DESCRIPTION:
            console.log(state);
            return {
                ...state,
                workerDescription: action.payload,
            }
        case UserInputTypes.SET_ABOUT_COMPANY:
            return {
                ...state,
                aboutCompany: action.payload,
            }
        default:
            return state;
    }
};
