// ==UserScript==
// @name         Expand keyboard
// @namespace    http://tampermonkey.net/
// @match        https://configure.zsa.io/train/home
// @version      0.2
// @description  Automatically expand the keyboard on the ZSA Oryx train page
// @author       thenbe (https://github.com/thenbe)
// @grant        none
// ==/UserScript==

(function () {
	'use strict';

	// Function to perform the click and log the result
	function autoClickIconShrink() {
		var iconShrinkElement = document.querySelector('.icon-shrink');

		if (iconShrinkElement) {
			iconShrinkElement.click();
			console.log(
				'[expand-keyboard.js] Click successful: The .icon-shrink element was clicked.',
			);
		} else {
			console.log(
				'[expand-keyboard.js] Click failed: The .icon-shrink element was not found.',
			);
		}
	}

	// Function to observe DOM changes and trigger the click when the target element is detected
	function observeDOM() {
		const targetNode = document.body;

		const config = {
			childList: true,
			subtree: true,
		};

		const observer = new MutationObserver((mutationsList, observer) => {
			if (document.querySelector('.icon-shrink')) {
				autoClickIconShrink();
				observer.disconnect();
			}
		});

		observer.observe(targetNode, config);
	}

	// Check if the page matches and observe DOM changes
	if (window.location.href === 'https://configure.zsa.io/train/home') {
		console.debug('[expand-keyboard.js] Page matches');
		observeDOM();
	}
})();
