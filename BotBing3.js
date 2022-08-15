// ==UserScript==
// @name         Bot-bing#3
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  bot for bing!
// @author       Snitko Ivan
// @match        https://www.bing.com/*
// @match 			 https://icons8.ru/*
// @match 			 https://stali.ru/*
// @match 			 https://vyborcen.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==


let sites = {
	'icons8.ru':['Векторные иконки и стикеры', 'Бесплатные иконки, иллюстрации', 'Векторная графика', 'Бесплатные иконки SVG, PNG, ICO или ICNS'],
	'stali.ru':['Производство изделий из нержавейки', 'Изделия из нержавейки на заказ', 'Металлоконструкции на заказ'],
	'vyborcen.com':['Современный ноутбук', 'Ноутбук последнего поколения', 'Лучшие цены на ноутбуки']
};

let site = Object.keys(sites)[getRandom(0, Object.keys(sites).length)];
let keyWords = sites[site];
let keyWord = keyWords[getRandom(0, keyWords.length)];
let btn = document.getElementById('search_icon');
let bingInput = document.getElementById('sb_form_q');
let links = document.links;
let next = document.querySelector('.sb_pagN');

if(btn !== null){
	document.cookie = `site=${site}`;
} else if (location.hostname == 'www.bing.com'){
	site = getCookie('site');
} else {
	site = location.hostname;
}

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
else if(location.hostname == site) {
	setInterval(() => {
		let index = getRandom(0, links.length);
		if(getRandom(0, 101) >= 81){
			location.href = 'https://www.bing.com/';
		}
		if (links.length == 0){
			location.href = site;
		}
		if(links[index].href.indexOf(site) !== -1){
			links[index].click();
		}
	}, getRandom(2900, 4800));
	console.log('Мы на целевом сайте');
}	else {
	let nextBingPage = true;
	for(let i = 0; i < links.length; i++){
		if(links[i].href.indexOf(site) !== -1){
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


function getCookie(name) {
	let matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}
