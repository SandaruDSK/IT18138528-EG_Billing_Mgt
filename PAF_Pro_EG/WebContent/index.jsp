<%@page import="com.Billing"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="ISO-8859-1">
		<title>PAF Project EG Billing</title>
		<link rel="stylesheet" href="Views/bootstrap.min.css">
		<script src="Components/jquery-3.2.1.min.js"></script>
		<script src="Components/main.js"></script>
	</head>
	<body>
		<div class="container"><div class="row"><div class="col-6">
			<h1>Billing Management</h1>
				<form id="formBilling" name="formBilling">
					<br>Customer ID:
					<input id="B_Cus_ID" name="B_Cus_ID" type="text"
					 class="form-control form-control-sm">
					 
					<br> Customer Name:
					<input id="B_Cus_Name" name="B_Cus_Name" type="text"
					 class="form-control form-control-sm">
					 
					<br>Customer Email:
					<input id="B_Cus_Email" name="B_Cus_Email" type="text"
					 class="form-control form-control-sm">
					 
					<br>Customer Contact:
					<input id="B_Cus_Contact" name="B_Cus_Contact" type="text"
					 class="form-control form-control-sm">
					 
					<br>Used Points:
					<input id="B_Use_Points" name="B_Use_Points" type="text"
					 class="form-control form-control-sm">
					 
					<br>Amount for Used Points:
					<input id="B_Use_Val" name="B_Use_Val" type="text"
					 class="form-control form-control-sm">
					 
					<br>Additional Charge:
					<input id="B_Add_Charge" name="B_Add_Charge" type="text"
					 class="form-control form-control-sm">
					 
					<br>Previous Outstanding:
					<input id="B_Prev_Outsand" name="B_Prev_Outsand" type="text"
					 class="form-control form-control-sm">
					 
					<br>Total Amount Payble:
					<input id="B_Tot_Amt_Pay" name="B_Tot_Amt_Pay" type="text"
					 class="form-control form-control-sm">
					 
					<br>Bill Type (Red or Normal):
					<input id="B_Red_Nor" name="B_Red_Nor" type="text"
					 class="form-control form-control-sm">
					 
					<br>
					<input id="btnSave" name="btnSave" type="button" value="Save"
					 class="btn btn-primary">
					 
			<input type="hidden" id="hidBilling_IDSave" name="hidBilling_IDSave" value="">
			</form>
		<div id="alertSuccess" class="alert alert-success"></div>
		<div id="alertError" class="alert alert-danger"></div>
		<br>
		<div id="divBillingGrid">
		 	<%
		 	 	Billing billingObj = new Billing();
				 out.print(billingObj.readBills());
		 	%>
		</div>
	
	</body>
</html>