sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/bootcamp/sapui5/freestyle/utils/HomeHelper",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "com/bootcamp/sapui5/freestyle/model/formatter",
], (Controller, HomeHelper, Filter, FilterOperator, formatter) => {
    "use strict";

    return Controller.extend("com.bootcamp.sapui5.freestyle.controller.Home", {

        formatter: formatter,

        onInit() {
            this.oRouter = this.getOwnerComponent().getRouter();
        },

        onPress: async function () {

            let oFilter = [];
            // let sValue = this.byId("inputID").getValue();
            // let sValueCombo = this.byId("comboboxID").getSelectedKey();

            let values = this.getOwnerComponent().getModel("LocalDataModel").getData()

            // if (sValue) {
            if (values.valueInput) {
                //oFilter.push(new Filter("ProductID", FilterOperator.EQ, sValue));
                oFilter.push(new Filter("ProductID", FilterOperator.EQ, values.valueInput));
            }

            //if (sValueCombo) {
            if (values.selectedKey) {
                //oFilter.push(new Filter("CategoryID", FilterOperator.EQ, sValueCombo));
                oFilter.push(new Filter("CategoryID", FilterOperator.EQ, values.selectedKey));
            }

            let oDatos = await HomeHelper.getDataProducts(oFilter);
            await HomeHelper.setProductModel(this, oDatos[0].results);
        },

        onItemPress: function (oEvent) {
            let oSource = oEvent.getSource();

            let oDatos = oSource.getBindingContext("ProductCollection").getObject();

            this.oRouter.navTo("detail", {
                ProductID: oDatos.ProductID
            });
        },

        onChange: function (oEvent) {
            // let oFilter = [];
            // let oSource = oEvent.getSource();
            // let oTable = this.getView().byId("idProductsTable")
            // let oBinding = oTable.getBinding("items");

            // if(oSource.getValue()){
            //     oFilter = new Filter("ProductID", FilterOperator.EQ, oSource.getValue());               
            // } 
            // oBinding.filter(oFilter);    
        },

        onSelectionChange: async function (oEvent) {

            // let oFilter = [];
            // let oSource = oEvent.getSource();
            // let oTable = this.getView().byId("idProductsTable")
            // let oBinding = oTable.getBinding("items");

            // if(oSource.getSelectedKey()){
            //     oFilter = new Filter("CategoryID", FilterOperator.EQ, oSource.getSelectedKey());               
            // } 
            // oBinding.filter(oFilter);               

        }
    });
});