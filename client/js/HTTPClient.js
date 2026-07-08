function processJSONResponse(res) {
    if (!res.ok) {
        const error = new Error(`This request was not successful: ${res.statusText} (${res.status})`);
        error.status = res.status;
        throw error;
    }
    return res.json();
}

function handleError(err) {
    console.error('Error in fetch', err);
    throw err;
};

const BASE_URL_PATH = '';
export default {
    get: (url) => {
        return fetch(BASE_URL_PATH + url)
            .then(processJSONResponse)
            .catch(handleError);
    },

    post: (url, data) => {
        const isFormData = data instanceof FormData;

        return fetch(BASE_URL_PATH + url, {
            method: 'POST',
            body: isFormData ? data : JSON.stringify(data),
            headers:
                isFormData ? undefined : {'Content-Type': 'application/json'},
        })
        .then(processJSONResponse)
        .catch(handleError);
    },

    put: (url, data) => {
        return fetch(BASE_URL_PATH + url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(processJSONResponse)
        .catch(handleError);
    },

    delete: (url) => {
        return fetch(BASE_URL_PATH + url, {
            method: 'DELETE',
            headers: {
            }
        })
        .then(processJSONResponse)
        .catch(handleError);
    },
};