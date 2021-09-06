package com.screener.app.services;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import  com.screener.app.dao.IdoctorDao;
import  com.screener.app.dao.IlabDao;
import  com.screener.app.entity.patient;
import  com.screener.app.entity.status;

@Service
public class labService implements IlabService {
	@Autowired
	private IlabDao labdao;
	
	@Override
	public int changeStatus(status stat) {
		
		return labdao.changeStatus(stat);
	}

	@Override
	public int changeStatusByNp_Num(String np_num, String status) {
		// TODO Auto-generated method stub
		return labdao.changeStatusByNp_Num( np_num,status);
	}
	
	@Override
	public String getEmailBynpnumber(String np_no) {
		// TODO Auto-generated method stub
		return labdao.getEmailBynpnumber(np_no);
	}

}