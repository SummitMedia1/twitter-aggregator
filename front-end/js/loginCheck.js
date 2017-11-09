$(function() {

	if (localStorage.logged === 'true') {
		console.log("If statement");
		$("#logNavBtn").hide();
		$("#signNavBtn").text("Log out").attr("id","logOut");
		$("#signNavBtn").attr("href","/");

		$("#logBtn").hide();
		$("#signBtn").text("Log out").attr("id","logOut");
		$("#signBtn").attr("href","/");

	}
	console.log('This works');

	$("#logOut").on("click", function(event) {
			localStorage.setItem('logged', false);
			$("#logOut").attr("href","/");
	});
});
