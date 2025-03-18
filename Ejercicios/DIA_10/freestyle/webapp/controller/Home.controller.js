sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/bootcamp/sapui5/freestyle/utils/HomeHelper",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], (Controller, HomeHelper, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("com.bootcamp.sapui5.freestyle.controller.Home", {
        onInit() {
            this.oRouter = this.getOwnerComponent().getRouter();
        },

        onPress: async function(){

            let oFilter = [];
            let sValue = this.byId("inputID").getValue();

            if(sValue){
                oFilter = new Filter("ProductID", FilterOperator.EQ, sValue)
            }

            let oDatos = await HomeHelper.getProposalBystatus([oFilter]); 
            await HomeHelper.setProductModel(this, oDatos[0].results);
        },

        onItemPress: function(oEvent){
            let oSource = oEvent.getSource();

            let oDatos = oSource.getBindingContext("ProductCollection").getObject();

            this.oRouter.navTo("detail", {
                ProductID: oDatos.ProductID
            });
        },

        onChange: function(oEvent){
            // let oFilter = [];
            // let oSource = oEvent.getSource();
            // let oTable = this.getView().byId("idProductsTable")
            // let oBinding = oTable.getBinding("items");
           
            // if(oSource.getValue()){
            //     oFilter = new Filter("ProductID", FilterOperator.EQ, oSource.getValue());               
            // } 
            // oBinding.filter(oFilter);    
        }
    });
});