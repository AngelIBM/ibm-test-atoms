/*
* Licensed Materials - Property of IBM
* 5725-I43 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
* US Government Users Restricted Rights - Use, duplication or
* disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
*/

/* Copyright (C) Worklight Ltd. 2006-2012.  All rights reserved. */


// A copy of the Java GadgetEnvironment version.
var __WLEnvironment = {
	PREVIEW : "preview",
	IPHONE : "iphone",
	IPAD : "ipad",
	DESKTOPBROWSER : "desktopbrowser",
	ADOBE_AIR : "air",
	ANDROID : "android",
	BLACKBERRY : "blackberry",
	BLACKBERRY10 : "blackberry10",
	WINDOWS_PHONE_8: "windowsphone8",
	WINDOWS8: 'windows8',
	MOBILE_WEB: "mobilewebapp"
};

__WL.prototype.Environment = __WLEnvironment;
WL.Environment = __WLEnvironment;
// Short alias:
WL.Env = WL.Environment;



var __WLEvents = {
	WORKLIGHT_IS_CONNECTED : "WL:WORKLIGHT_IS_CONNECTED",
	WORKLIGHT_IS_DISCONNECTED : "WL:WORKLIGHT_IS_DISCONNECTED"
};

__WL.prototype.Events = __WLEvents;
WL.Events = __WLEvents;


//For WL object auto-complete
WL = new __WL;




