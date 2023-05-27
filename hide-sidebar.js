// ==UserScript==
// @name         Hide Sidebar
// @namespace    http://tampermonkey.net/
// @include      /reddit.com/
// @version      0.1
// @description  Automatically hide the sidebar
// @author       thenbe (https://github.com/thenbe)
// @grant        none
// ==/UserScript==

(function () {
	'use strict';

	// Bookmarklet
	// javascript: (() => { $('.side').toggle(); })();

	// UserScript
	function hideSidebar() {
		console.log('hiding sidebar');
		$('.side').toggle();
	}

	hideSidebar();
})();
