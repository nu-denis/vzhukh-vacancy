type Request = {
    workerDescription: string;
    aboutCompany: string;
}

export type ShortVacancy = {
    request: Request;
    response: string;
}

export enum ShortVacancyTypes {
    SET_SHORT_VACANCY = 'SET_SHORT_VACANCY',
}

interface SetShortVacancyAction {
    type: ShortVacancyTypes.SET_SHORT_VACANCY;
    payload: ShortVacancy;
}

export type ShortVacancyAction = SetShortVacancyAction;

const initState: ShortVacancy = {
    request: {
        workerDescription: '',
        aboutCompany: '',
    },
    response: '',
};

export const shortVacancyReducer = (state = initState, action: ShortVacancyAction): ShortVacancy => {
    switch(action.type) {
        case ShortVacancyTypes.SET_SHORT_VACANCY:
            return action.payload;
    }
};
