package com.screener.app.services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.screener.app.dao.IaulabDao;

import  com.screener.app.entity.*;


@Service
public class aulabService implements IaulabService {
	@Autowired
	private IaulabDao aulabdao;
	
	@Override
	public int changeStatusau(au_patient stat) {
		
		return aulabdao.changeStatusau(stat);
	}

}
