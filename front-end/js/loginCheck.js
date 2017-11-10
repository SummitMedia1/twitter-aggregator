$(function() {

	if (localStorage.logged === 'true') {
		$("#logNavBtn").hide();
		$("#signNavBtn").text("Log out " + localStorage.user).attr("id","logOut");
		$("#signNavBtn").attr("href","/");

		$("#logBtn").hide();
		$("#signBtn").text("Log out " + localStorage.user).attr("id","logOut");
		$("#signBtn").attr("href","/");

	}

	$("#logOut").on("click", function(event) {
			localStorage.setItem('logged', false);
			$("#logOut").attr("href","/");
	});
});
