"use strict";

/**
 * nunuStudio
 * MIT license (http://opensource.org/licenses/MIT)
 *   
 * Class used to store nunuStudio development version and timestamp.
 *
 * Contains methods to check browser feature support.
 * 
 * @class Nunu
 * @module Runtime
 */
function Nunu(){}

/**
 * nunuStudio
 * 
 * @attribute NAME
 * @type {String}
 * @default "nunuStudio"
 */
Nunu.NAME = "nunuStudio";

/**
 * Stores the nunu runtime version.
 * 
 * @attribute VERSION
 * @type {String}
 */
Nunu.VERSION = "V0.8.9.26 Alpha";

/**
 * Stores the nunu runtime dev timestamp.
 * 
 * @attribute TIMESTAMP
 * @type {String}
 */
Nunu.TIMESTAMP = "201706060028";

/**
 * Check if host supports WebVR and if there is a VR display available.
 * 
 * @method webvrAvailable
 * @return {boolean} True is WebVR is available.
 */
Nunu.webvrAvailable = function()
{
	return navigator.getVRDisplays !== undefined;
};

/** 
 * Check if host supports WebAudio.
 *
 * @method webAudioAvailable
 * @return {boolean} True if WebAudio is available.
 */
Nunu.webAudioAvailable = function()
{
	return window.AudioContext !== undefined || window.webkitAudioContext !== undefined;
};

/**
 * Check if host supports WebGL, only checks for WebGL 1 support.
 *
 * @method webglAvailable
 * @return {boolean} True if WebGL is available.
 */
Nunu.webglAvailable = function()
{
	try
	{
		var canvas = document.createElement("canvas"); 
		var context = canvas.getContext("webgl");
		//var extensions = context.getSupportedExtensions();
		return true;
	}
	catch(e)
	{
		return false;
	}

	return false;
};

/**
 * Check if nunu is running inside NWJS.
 *
 * @method runningOnDesktop
 * @return {boolean} True if running inside NWJS 
 */
Nunu.runningOnDesktop = function()
{
	return window.nw !== undefined;
};
