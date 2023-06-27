// ==UserScript==
// @name        GitHub Clone and Open in Neovim
// @namespace   Violentmonkey Scripts
// @match       https://github.com/*
// @grant       GM_setClipboard
// @version     1.0
// @author      thenbe (https://github.com/thenbe)
// ==/UserScript==

(function () {
	'use strict';

	const url = window.location.href;

	// Get the repo name (user/repo) from the URL (strip hashtags)
	const id = url.split('/').slice(3, 5).join('/').split('#')[0];
	const user = id.split('/')[0];
	const repo = id.split('/')[1];

	// Create the command
	let command = `cd ~/projects/playground && gh repo clone ${user}/${repo} && cd ${repo} && nvim .`;

	// Get the button (aria-label="Copy to clipboard" and has class "js-clone-url-gh-cli")
	const button = document.querySelector(
		'clipboard-copy[aria-label="Copy to clipboard"].js-clone-url-gh-cli',
	);

	// update the button value attribute to the command
	button.setAttribute('value', command);

	button.style.borderColor = 'green';

	// Add the button next to the native clone button
	// let cloneButtonGroup = document.querySelector('.input-group.d-flex');
	// cloneButtonGroup.appendChild(button);

	console.log('[github-clone.user.js] Updated clone command');
})();
