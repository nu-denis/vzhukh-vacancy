export const getFastVacancy = async (contentText: string) => {

    const requestData = JSON.stringify({
        content_text: contentText,
    });
    
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

export const getVacancyName = async (description: string) => {
    
    const requestURL = `http://localhost:8000/vacancy_name?description=${description}`;
    const request = new Request(requestURL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Method': 'GET',
            'Access-Control-Request-Headers': 'Content-Type',
        },
        redirect: 'follow',
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

export const getVacancyText = async (vacancyName: string, description: string) => {
    
    const requestURL = `http://localhost:8000/vacancy_text?vacancy_name=${vacancyName}&description=${description}`;
    const request = new Request(requestURL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Method': 'GET',
            'Access-Control-Request-Headers': 'Content-Type',
        },
        redirect: 'follow',
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

export const getRewriteVacancy = async (vacancyId: string) => {

    const requestData = JSON.stringify({
        vacancy_id: vacancyId,
    });
    
    const requestURL = `http://localhost:8000/vacancy_text`;
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
