package com.screener.app.dao;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import  com.screener.app.entity.patient;
import  com.screener.app.entity.au_patient;

@Transactional

@Repository

public class aulabDao implements IaulabDao{
	@PersistenceContext
	private EntityManager entityManager;

	@SuppressWarnings("unchecked")
	
	public int changeStatusau(au_patient stat) {
	
	String np_no = stat.getAu_np_no();
	String status = stat.getStatus();
	int sample_id = stat.getAu_patient_id();
	System.out.println("np1_no----"+np_no);

	//entityManager.createQuery("update Id_Mapping id set id.npno =?1 where id.extr_id=?2").setParameter(1, np_no).setParameter(2, sample_id).executeUpdate();
	int count = ( entityManager.createQuery("update au_patient p set p.status=?1,p.au_np_no=?2 where p.au_patient_id=?3")).setParameter(1,status).setParameter(2,np_no).setParameter(3,sample_id).executeUpdate();
	return count;
	}

}
