/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"month_display/demo_month_2/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});