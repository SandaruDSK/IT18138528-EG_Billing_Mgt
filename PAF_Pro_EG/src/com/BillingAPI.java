package com;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.Billing;

/**
 * Servlet implementation class ProjectAPI
 */
@WebServlet("/BillingAPI")
public class BillingAPI extends HttpServlet {
	private static final long serialVersionUID = 1L;
	Billing billingObj = new Billing();
    /**
     * @see HttpServlet#HttpServlet()
     */
    public BillingAPI() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		
		String output = billingObj.addBills(request.getParameter("B_Cus_ID"),
				request.getParameter("B_Cus_Name"),
				request.getParameter("B_Cus_Email"),
				request.getParameter("B_Cus_Contact"),
				request.getParameter("B_Use_Points"),
				request.getParameter("B_Use_Val"),
				request.getParameter("B_Add_Charge"),
				request.getParameter("B_Prev_Outsand"),
				request.getParameter("B_Tot_Amt_Pay"),
				request.getParameter("B_Red_Nor"));
				response.getWriter().write(output);
	}
	// Convert request parameters to a Map
		@SuppressWarnings("rawtypes")
		private static Map getParasMap(HttpServletRequest request)
		{
			Map<String, String> map = new HashMap<String, String>();
		try
		 {
			Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");
			String queryString = scanner.hasNext() ?
					scanner.useDelimiter("\\A").next() : "";
					scanner.close();
					String[] params = queryString.split("&");
		 for (String param : params)
		 { 
		
		String[] p = param.split("=");
		 map.put(p[0], p[1]);
		 }
		 }
		catch (Exception e)
		 {
		 }
		return map;
		}

	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		@SuppressWarnings("rawtypes")
		Map paras = getParasMap(request);
		 String output = billingObj.updateBills(paras.get("hidBilling_IDSave").toString(),
		 paras.get("B_Cus_ID").toString(),
		paras.get("B_Cus_Name").toString(),
		paras.get("B_Cus_Email").toString(),
		paras.get("B_Cus_Contact").toString(),
		paras.get("B_Use_Points").toString(),
		paras.get("B_Use_Val").toString(),
		paras.get("B_Add_Charge").toString(),
		paras.get("B_Prev_Outsand").toString(),
		paras.get("B_Tot_Amt_Pay").toString(),
		paras.get("B_Red_Nor").toString());
		response.getWriter().write(output);
	}

	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
	{
		@SuppressWarnings("rawtypes")
		Map paras = getParasMap(request);
		 String output = billingObj.deleteBills(paras.get("B_ID").toString());
		response.getWriter().write(output);
		// TODO Auto-generated method stub
	}

}
