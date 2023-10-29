// ==UserScript==
// @name        Thick Slider
// @description Make the youtube slider thicker
// @namespace   Violentmonkey Scripts
// @match       https://www.youtube.com/watch*
// @grant       GM_addStyle
// @version     1.0
// @author      thenbe (https://github.com/thenbe)
// ==/UserScript==

(function () {
	'use strict';
	GM_addStyle(/* css */ `
/* .ytp-progress-bar-container { */
/* 	height: 30px !important; */
/* } */
/* .ytp-progress-bar-padding { */
/* 	height: 100% !important; */
/* } */
.ytp-progress-bar-container:hover {
	transform: scaleY(5) !important;);
}
`);

	console.log('[thick-slider.js] Updated slider css');
})();
