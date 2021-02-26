let fetchBtn = document.getElementById('fetchBtn');

fetchBtn.addEventListener('click', buttonclickhandler);

function buttonclickhandler() {
	//intantiate a new XHR object
	const xhr = new XMLHttpRequest();

	// Open an object (GET/POST, PATH, ASYN-TRUE/FALSE)
	xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);

	xhr.onload = function () {
		if (this.status === 200) {
			// changes string into JSON object
			obj = JSON.parse(this.responseText);

			//gets the ul element
			let list = document.getElementById('list');
			str = '';
			for (key in obj.data) {
				str += `<li>${obj.data[key].employee_name}</li>`;
				list.innerHTML = str;
			}
		} else {
			console.log('File not found');
		}
	};
	// at last send the request
	xhr.send();
}
