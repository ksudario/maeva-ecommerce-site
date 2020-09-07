const baseURL = '/api/users';

function getReviews() {
    return fetch(baseURL).then(response => response.json());
}

function createReview(data, id) {
    return fetch(baseURL + `/${id}` + "/reviews", {
        method: 'POST',
        headers: {
            'Content-type': 'Application/json'
        }, 
        body: JSON.stringify(data)
    }).then(response => response.json());
}

function updateDoneReview(id) {
    return fetch(baseURL + "/" + id, {
        method: 'PUT'
    }).then(response => response.json());
}

function removeReview(id) {
    return fetch(baseURL + "/" + id + "/reviews", {
        method: 'DELETE'
    }).then(response => response.json());
}

function updateReview(id, data) {
    console.log(data)
    return fetch(baseURL + "/" + id + "/reviews/edit", {
        method: 'PUT',
        headers: {
            'Content-type': 'Application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json());
}

export default { getReviews, createReview, removeReview, updateDoneReview, updateReview }