jQuery.sap.declare("customer.app.variant1.Component");

// use the load function for getting the optimized preload file if present
sap.ui.component.load({
	name: "hcm.fs4_employee",
	// Use the below URL to run the extended application when SAP-delivered application is deployed on SAPUI5 ABAP Repository
	url: "/sap/bc/ui5_ui5/sap/HCM_EMPLOYEE_MF"

	// we use a URL relative to our own component
	// extension application is deployed with customer namespace
});

hcm.fs4_employee.Component.extend("customer.app.variant1.Component", {
	metadata: {
		manifest: "json"
	}	
});
