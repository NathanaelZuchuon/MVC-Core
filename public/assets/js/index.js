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

/*

.reveal {
	opacity: 0;
	transform: translateY(30px);
}

.reveal-visible {
	opacity: 1;
	trasform: translateY(0);
	transition: 1s cubic-bezier(.5, 0, 0, 1);
}

*/

/* Intersection Observer API */
const ratio = .1;
const options = {
	root: null,
	rootMargin: '0px',
	threshold: ratio,
}

const handlerIntersect = (entries, observer) => {
	entries.forEach( (entry) => {
		if ( entry.intersectionRatio > ratio ) {
			entry.target.classList.add('reveal-visible');
			observer.unobserve(entry.target);
		}
	});
};

const observer = new IntersectionObserver(handlerIntersect, options);
document.querySelectorAll('.reveal').forEach( (r) => {
	observer.observe(r);
});
/* ************************* */
