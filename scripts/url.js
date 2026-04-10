/* Script file for URL keyword and parameter */

// URL keyword and parameter
const urlParams = new URLSearchParams(window.location.search);
const test = urlParams.get("test");
console.log(test);