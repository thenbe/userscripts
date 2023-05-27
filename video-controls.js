// ==UserScript==
// @name         Persist video controls
// @namespace    http://tampermonkey.net/
// @include      /youtube.com\/shorts/
// @version      0.1
// @description  Persist video controls
// @author       thenbe (https://github.com/thenbe)
// @grant        none
// ==/UserScript==

(function () {
	'use strict';

	function addControlsToVideo(video) {
		if (!video.hasAttribute('controls')) {
			video.setAttribute('controls', '');
		}
	}

	function handleNewVideo(addedNode) {
		if (addedNode.tagName === 'VIDEO') {
			addControlsToVideo(addedNode);
			observer.observe(addedNode, {
				attributes: true,
				attributeFilter: ['controls'],
			});
		}
	}

	const observer = new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (
				mutation.type === 'attributes' &&
				mutation.attributeName === 'controls'
			) {
				addControlsToVideo(mutation.target);
			} else if (mutation.type === 'childList') {
				for (const addedNode of mutation.addedNodes) {
					if (addedNode.nodeType === Node.ELEMENT_NODE) {
						handleNewVideo(addedNode);
					}
				}
			}
		}
	});

	const videos = document.querySelectorAll('video');
	for (const video of videos) {
		addControlsToVideo(video);
		observer.observe(video, {
			attributes: true,
			attributeFilter: ['controls'],
		});
	}

	observer.observe(document.body, { childList: true, subtree: true });
})();
