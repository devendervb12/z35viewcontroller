sap.ui.controller("view.Page1", {
	
	onInit : function(){
		
		var oInput = 
			this.getView().byId("idIp");
		
		oInput.setValue("Mahendar");
	}
//after onInit view gets displayed
});