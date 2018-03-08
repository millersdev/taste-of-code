
function easyFetch() {
    return fetch('https://taste-of-code.firebaseio.com/entries.json', { mode: 'cors' })
        .then(
        function (response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
            }
            return response.json()
        })
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });

}

function easyPost(dataObj) {
    return fetch('https://taste-of-code.firebaseio.com/entries.json', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(dataObj),
        mode: 'cors'
    })
        .then(
        function (response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
            }
            location.reload()
            return response.json()
        })
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });

}