/*global QUnit*/

sap.ui.define([
	"month_display/demo_month_2/controller/View2.controller"
], function (Controller) {
	"use strict";

	QUnit.module("View2 Controller");

	QUnit.test("I should test the View2 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});