package com.screener.app.services;
import  com.screener.app.entity.*;
import java.util.List;

public interface IlabService {

	int changeStatus(status stat);
	
	int changeStatusByNp_Num(String np_num,String status);
	String getEmailBynpnumber(String np_no);
}