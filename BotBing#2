// ==UserScript==
// @name         Bot-bing#2
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  bot for bing!
// @author       Snitko Ivan
// @match        https://www.bing.com/*
// @match 			 https://icons8.ru/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let keyWords = ['Векторные иконки и стикеры', 'Бесплатные иконки, иллюстрации', 'Векторная графика', 'Бесплатные иконки SVG, PNG, ICO или ICNS'];
let keyWord = keyWords[getRandom(0, keyWords.length)];
let btn = document.getElementById('search_icon');
let bingInput = document.getElementById('sb_form_q');
let links = document.links;
let next = document.querySelector('.sb_pagN');

if(btn !== null){
	let i = 0;

	let timerId = setInterval(() => {
		bingInput.value += keyWord[i];
		i++;
		if (i == keyWord.length) {
			clearInterval(timerId);
			setTimeout(() => {
				btn.click();
			}, getRandom(200, 500));
		}
	}, 300);
}
else if(location.hostname == 'icons8.ru') {
	setInterval(() => {
		let index = getRandom(0, links.length);
		if(getRandom(0, 101) >= 81){
			location.href = 'https://www.bing.com/';
		}
		if (links.length == 0){
			location.href = 'https://www.icons8.ru';
		}
		if(links[index].href.indexOf('icons8.ru') !== -1){
			links[index].click();
		}
	}, getRandom(2900, 4800));
	console.log('Мы на целевом сайте');
}	else {
	let nextBingPage = true;
	for(let i = 0; i < links.length; i++){
		if(links[i].href.indexOf('icons8.ru') !== -1){
			let link = links[i];
			nextBingPage = false;
			console.log('Нашел строку ' + link);
			setTimeout(() => {
				link.click();
			}, getRandom(1400, 3900));
			break;
		}
	}
	
	if (document.querySelector('.sb_pagS').innerText == '5'){
		nextBingPage = false;
		location.href = 'https://www.bing.com/';
	}

	if (nextBingPage){
		setTimeout(()=>{
			next.click();
		}, getRandom(3000, 4000));
	}
}
function getRandom(min, max){
	return Math.floor(Math.random() * (max - min) + min);
}
