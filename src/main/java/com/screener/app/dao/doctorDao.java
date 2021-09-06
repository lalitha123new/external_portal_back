package com.screener.app.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import  com.screener.app.entity.*;
@Transactional
@Repository
public class doctorDao implements IdoctorDao {
	@PersistenceContext	
	private EntityManager entityManager;	

	@SuppressWarnings("unchecked")
	@Override
	public List<doctor> getAlldoctors() {
		String hql = "FROM doctor as doct";
		return (List<doctor>) entityManager.createQuery(hql).getResultList();
	}	
	
	@SuppressWarnings("unchecked")
	@Override
	public List<String> getAllhos() {
		String hql = "select l.username FROM login l";
		return (List<String>) entityManager.createQuery(hql).getResultList();
	}	
	
	
	
	@Override
	public void adddoctor(doctor doc) {
		entityManager.persist(doc);
	}
	
} 