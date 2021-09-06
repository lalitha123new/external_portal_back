package com.screener.app.dao;


import  com.screener.app.entity.*;

public interface IlabDao {

	int changeStatus(status stat);

	int changeStatusByNp_Num(String np_num, String status);
	String getEmailBynpnumber(String np_no);
}