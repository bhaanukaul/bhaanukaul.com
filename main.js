

var darkTheme = "#263248";
var lightTheme = "#FFFFFF";
var currentTheme = lightTheme;

function switchTheme2() {
	if (currentTheme == lightTheme) {
		console.log("switching to darkTheme");

		$('body').css("backgroundColor", darkTheme);
		$('body').css("color", lightTheme);

		$(".card").css("backgroundColor",darkTheme);
		$(".btn").css("backgroundColor",lightTheme);
		$(".btn").css("color",darkTheme);
		$(".card").css("border-color",darkTheme);

		$(".collapsible-header").css("backgroundColor",darkTheme);
		$(".fa").css("color", lightTheme);


		currentTheme = darkTheme;
	} else {
		$('body').css("backgroundColor",lightTheme);
		$('body').css("color", darkTheme);
		$(".card").css("border-color",lightTheme);

		$(".card").css("backgroundColor", lightTheme);
		$(".btn").css("backgroundColor" , darkTheme);
		$(".btn").css("color", lightTheme);
		$(".collapsible-header").css("backgroundColor",lightTheme);
		$(".fa").css("color", darkTheme);

		currentTheme = lightTheme;
	}
}