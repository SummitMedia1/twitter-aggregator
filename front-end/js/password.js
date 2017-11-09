$(function() {

		$("#submitLogin").on("click", function(event) {
			event.preventDefault();

			var username = $("#username").val();
			var password = $("#password").val();

			if (username === '' || password === '') {
				alert("Please fill in both username and password.");
				return;
			}

			$.ajax({
				type: "GET",
				url: "/login/" + username,
				data: {value: password}
			}).done(
			function(response) {
				if (response.login === 'success') {
					alert("You have logged in as " + username + ".");
					console.log("You have logged in as " + username + ".");
					window.location = "/";
				} else {
					alert("Invalid username or password.");
					console.log("Invalid username or password.");
				}
			}).fail(function(xhr, status, error) {
				alert("There is no user named " + username + ".");
				console.log("There is no user named " + username + ".");
			});
		});

		//-------------------------------------------------

		$("#submitSignup").on("click", function(event) {
			event.preventDefault();

			var username = $("#username2").val();
			var password = $("#password2").val();
			var sub = $('#sub').prop('checked');
			var admin = $('#admin1').prop('checked');

			if (username === '' || password === '') {
				alert("Please fill in both username and password.");
				return;
			}

			$.ajax({
				type: "POST",
				url: "/login/new",
				data: {
					password: password,
					username: username,
					sub: sub,
					admin: admin
				}
			}).done(function(response) {
				if (response.created === 'success') {
					alert("You have created account " + username + ".");
					window.location = "/";
				}
				 if (response.created === 'failed') {
					alert("There is already a user with that name.");
				}
			}).fail(function(xhr, status, error) {
				alert("Failed.");
			});
		});

	});