/* Promise */
const myPromise = new Promise( (resolve, reject) => {
	let connection = true;

	if ( connection ) {
		resolve('Connection established');
	} else {
		reject('Connection rejected');
	}
});

myPromise.then( (message) => {
	console.log(message);
}.catch( (message) => {
	console.log(message);
});
/* ******* */

/* Ajax request */
form = document.querySelector("#form");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const request = new XMLHttpRequest();

    request.onload = () => {
        let responseObj = null;
        try {
            responseObj = JSON.parse(request.responseText);
        } catch (e) {
            console.error('Could not parse JSON !');
        }
        if (responseObj) {
            handlerResponse(responseObj);
        }
    };

    const formData = new FormData();
    formData.append("pseudo", document.querySelector("#pseudo").value);
    formData.append("password", document.querySelector("#password").value);

    request.open('post', 'http://127.0.0.1/bhent_prods/vsit/login/checkLogin');
    request.setRequestHeader('Content', 'application/x-www-form-urlencoded');
    request.send(formData);
});
/* ************ */
