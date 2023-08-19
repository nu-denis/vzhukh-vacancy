export type ShortVacancy = {
    request: string;
    response: string;
}

type Step = {
    request: string;
    response: string;
}

export type Vacancy = {
    firstStep: Step;
    secondStep: Step;
    thirdStep: Step;
    fourth: Step;
}