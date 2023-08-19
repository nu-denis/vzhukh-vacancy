import { UserInput } from "../models/userInput"

export const getFastVacancy = async (data: UserInput) => {

    const requestData = JSON.stringify({
        role: data.workerDescription,
        content: data.aboutCompany
    });

    console.log(requestData);

    const requestURL = `http://localhost:8000/open_format`;
    const request = new Request(requestURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Method': 'POST',
            'Access-Control-Request-Headers': 'Content-Type',
        },
        redirect: 'follow',
        body: requestData
    });

    const response = await fetch(request)

    if (response.ok) {
        return response.json();
    }

    const error = {
        status: response.status,
        customError: 'Wtf',
    }
};