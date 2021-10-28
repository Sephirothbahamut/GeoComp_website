
document.write('<title>Golfzier</title>');

// Setup latex stuff
document.write('<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>');

MathJax = {
	tex: { inlineMath: [['$', '$'], ['\\(', '\\)']] },
	svg: { fontCache: 'global' }
};

document.write('<script id="MathJax-script" src="scripts/MathJax3-svg.min.js"></script>')

// Imports colors for our theme, and different highlightjs themes
const dark_theme = window.location.search.indexOf('?dark') === 0;

if (dark_theme)
{
	document.write('<link rel="stylesheet" href="./styles/highlight/vs2015.min.css" type="text/css" />');
	document.write('<link rel="stylesheet" href="./styles/dark.css" type="text/css" />');
}
else
{
	document.write('<link rel="stylesheet" href="./styles/highlight/vs.min.css" type="text/css" />');
	document.write('<link rel="stylesheet" href="./styles/light.css" type="text/css" />');
};

// Base stylesheet
document.write('<link rel="stylesheet" href="./styles/base.css" type="text/css" />');

// Setup highlightjs
document.write('<script src="scripts/highlight/highlight.min.js"></script>');
document.write('<script>hljs.highlightAll();</script>');

const theme_str = dark_theme ? "?dark" : "";

function spawn_tab(label, address)
{
	let tmp = document.createElement("a");
	let destination = address + ".html" + theme_str;
	tmp.setAttribute("href", destination);
	tmp.innerHTML = label;
	tmp.classList.add("tablink");
	tmp.style.width = "25%";
	//TODO if destination == current location, add "current" too
	return tmp;
}

window.onload = () =>
{
	let tabs = document.getElementById("tabs");
	tabs.appendChild(spawn_tab("Home",    "index"));
	tabs.appendChild(spawn_tab("Applet",  "index"));
	tabs.appendChild(spawn_tab("Teoria",  "Theory"));
	tabs.appendChild(spawn_tab("Manuale", "Manual"));

	let theme_tab = document.createElement("a");
	theme_tab.setAttribute("href", dark_theme ? "?" : "?dark");
	theme_tab.innerHTML = "Cambia Tema";
	theme_tab.classList.add("tablink");

	tabs.appendChild(theme_tab);
};