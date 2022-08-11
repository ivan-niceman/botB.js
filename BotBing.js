// ==UserScript==
// @name         Bot-bing
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  bot for bing!
// @author       Snitko Ivan
// @match        https://www.bing.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let keyWords = ['Векторные иконки и стикеры', 'Бесплатные иконки, иллюстрации', 'Бесплатно иконки, 925 000+ в форматах', 'Бесплатные иконки SVG, PNG, ICO или ICNS'];
let keyWord = keyWords[getRandom(0, keyWords.length)];
//let btn = document.getElementById('sb_form_go');
let btn = document.getElementById('search_icon');

let links = document.links;

if(btn !== null){
	document.getElementById('sb_form_q').value = keyWord;
	btn.click();
}
else {
	for(let i = 0; i < links.length; i++){
		if(links[i].href.indexOf('flaticon.com') !== -1){
			let link = links[i];
			console.log('Нашел строку ' + link);
			link.click();
			break;
		}
	}
}
function getRandom(min, max){
	return Math.floor(Math.random() * (max - min) + min);
}
