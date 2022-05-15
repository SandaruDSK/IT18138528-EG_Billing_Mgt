/**
 * 
 */
$(document).ready(function()
{
	if ($("#alertSuccess").text().trim() == "")
	{
		$("#alertSuccess").hide();
	}
 	$("#alertError").hide();
});
// SAVE ============================================
$(document).on("click", "#btnSave", function(event)
{
	// Clear alerts---------------------
 	$("#alertSuccess").text("");
 	$("#alertSuccess").hide();
 	$("#alertError").text("");
 	$("#alertError").hide();
	// Form validation-------------------
		var status = validateBillingForm();
	if (status != true)
 	{
 		$("#alertError").text(status);
 		$("#alertError").show();
 		return;
 	}
	// If valid------------------------
 	var type = ($("#hidBilling_IDSave").val() == "") ? "POST" : "PUT";
	 $.ajax(
 		{
 			url : "BillingAPI",
 			type : type,
 			data : $("#formBilling").serialize(),
 			dataType : "text",
 			complete : function(response, status)
 		{
 			onBillingSaveComplete(response.responseText, status);
 		}
 		}); 
});
function onBillingSaveComplete(response, status)
{
if (status == "success")
 {
 	var resultSet = JSON.parse(response);
 	if (resultSet.status.trim() == "success")
 	{
 		$("#alertSuccess").text("Successfully saved.");
 		$("#alertSuccess").show();
 		$("#divBillingGrid").html(resultSet.data);
 	} else if (resultSet.status.trim() == "error")
 	{
	 	$("#alertError").text(resultSet.data);
	 	$("#alertError").show();
 	}
 	} else if (status == "error")
 	{
 		$("#alertError").text("Error while saving.");
 		$("#alertError").show();
 	} else
 	{
	 	$("#alertError").text("Unknown error while saving..");
	 	$("#alertError").show();
 	} 

	 $("#hidBilling_IDSave").val("");
 	$("#formBilling")[0].reset();
}

// UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event)
{
	 $("#hidBilling_IDSave").val($(this).closest("tr").find('#hidBilling_IDUpdate').val());
	 $("#B_Cus_ID").val($(this).closest("tr").find('td:eq(1)').text());
	 $("#B_Cus_Name").val($(this).closest("tr").find('td:eq(2)').text());
	 $("#B_Cus_Email").val($(this).closest("tr").find('td:eq(3)').text());
	 $("#B_Cus_Contact").val($(this).closest("tr").find('td:eq(4)').text());
	 $("#B_Use_Points").val($(this).closest("tr").find('td:eq(5)').text());
	 $("#B_Use_Val").val($(this).closest("tr").find('td:eq(6)').text());
	 $("#B_Add_Charge").val($(this).closest("tr").find('td:eq(7)').text());
	 $("#B_Prev_Outsand").val($(this).closest("tr").find('td:eq(8)').text());
	 $("#B_Tot_Amt_Pay").val($(this).closest("tr").find('td:eq(9)').text());
	 $("#B_Red_Nor").val($(this).closest("tr").find('td:eq(10)').text());
});
// CLIENT-MODEL================================================================
function validateBillingForm()
{
	
	
	if ($("#B_Cus_ID").val().trim() == "")
 	{
 		return "Insert Customer ID.";
 	} 
 	if ($("#B_Cus_Name").val().trim() == "")
 	{
 		return "Insert Customer Name.";
 	} 
 	if ($("#B_Cus_Email").val().trim() == "")
 	{
 		return "Insert Customer Email.";
 	} 
 	if ($("#B_Cus_Contact").val().trim() == "")
 	{
 		return "Insert Customer Contact.";
 	} 
	if ($("#B_Use_Points").val().trim() == "")
	 {
 		return "Insert Used Points.";
 	}
	var tmpPoints = $("#B_Use_Points").val().trim();
	if (!$.isNumeric(tmpPoints))
 	{
 		return "Insert a numerical value for Used Points.";
 	}
	 $("#B_Use_Points").val(parseFloat(tmpPoints).toFixed(2));
	 
	 if ($("#B_Use_Val").val().trim() == "")
	 {
 		return "Insert Value for Used Points.";
 	}
	var tmpVal = $("#B_Use_Val").val().trim();
	if (!$.isNumeric(tmpVal))
 	{
 		return "Insert a numerical value for Used Value.";
 	}
	 $("#B_Use_Val").val(parseFloat(tmpVal).toFixed(2));
	 
	 if ($("#B_Add_Charge").val().trim() == "")
	 {
 		return "Insert Additional Charges.";
 	}
	var tmpCharge = $("#B_Add_Charge").val().trim();
	if (!$.isNumeric(tmpCharge))
 	{
 		return "Insert a numerical value for Additional Charges.";
 	}
	 $("#B_Add_Charge").val(parseFloat(tmpCharge).toFixed(2));
	 
	 if ($("#B_Prev_Outsand").val().trim() == "")
	 {
 		return "Insert Previous Outstanding.";
 	}
	var tmpOut = $("#B_Prev_Outsand").val().trim();
	if (!$.isNumeric(tmpOut))
 	{
 		return "Insert a numerical value for Previous Outstanding.";
 	}
	 $("#B_Prev_Outsand").val(parseFloat(tmpOut).toFixed(2));
	 
	 if ($("#B_Tot_Amt_Pay").val().trim() == "")
	 {
 		return "Insert Total Amount.";
 	}
	var tmpTot = $("#B_Tot_Amt_Pay").val().trim();
	if (!$.isNumeric(tmpTot))
 	{
 		return "Insert a numerical value for Total Amount.";
 	}
	 $("#B_Tot_Amt_Pay").val(parseFloat(tmpTot).toFixed(2)); 
	 
 	if ($("#B_Red_Nor").val().trim() == "")
	 {
 		return "Insert Bill Type (Red or Normal).";
 	}
	return true;
}

///REMOVE============================================
$(document).on("click", ".btnRemove", function(event) {
	$.ajax(
		{
			url: "BillingAPI",
			type: "DELETE",
			data: "B_ID=" + $(this).data("billingid"),
			dataType: "text",
			complete: function(response, status) {
				onBillingDeleteComplete(response.responseText, status);
			}


		});

});


function onBillingDeleteComplete(response, status) {

	if (status == "success") {
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully deleted.");
			$("#alertSuccess").show();
			$("#divBillingGrid").html(resultSet.data);
		}

		else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}

	}

	else if (status == "error") {
		$("#alertError").text("Error while deleting.");
		$("#alertError").show();
	}
	
	else {
		$("#alertError").text("Unknown error while deleting..");
		$("#alertError").show();

	}

}
	