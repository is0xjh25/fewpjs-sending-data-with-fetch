function submitData(user, address) {

	const form = {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			name: user,
			email: address,
		})
	}

	fetch("http://localhost:3000/users", form)
	.then(function(response) {
		return response.json();
	})
	.then((object) => {
		document.body.innerHTML = object.id;
	})
	.catch((error) => {
		document.body.innerHTML = error.message;
	});  
}
  
