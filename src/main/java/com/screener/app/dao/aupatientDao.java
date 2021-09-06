package com.screener.app.dao;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.validation.Valid;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import  com.screener.app.entity.*;
@Transactional
@Repository
public class aupatientDao {
	@PersistenceContext	
	private EntityManager entityManager;	
	/*@Override
	public login getArticleById(int ) {
		return entityManager.find(Article.class, articleId);
	}*/
	@SuppressWarnings("unchecked")
	public List<au_patient> getAuAllpats() {
		String hql = "FROM au_patient as pat";
		return (List<au_patient>) entityManager.createQuery(hql).getResultList();
	}
	
	
	public void addAupatient(au_patient pat) {

		Date date = new Date();
		Timestamp timestamp = new Timestamp(date.getTime());
		
		pat.setDate_of_sample(timestamp.toString());
		entityManager.persist(pat);
	}
	
	@SuppressWarnings("unchecked")
	public List<au_patient> findByUserAuid(int au_patient_id) {
		String hql = "FROM au_patient p where p.au_patient_id=?1";
		return (List<au_patient>) entityManager.createQuery(hql).setParameter(1, au_patient_id).getResultList();
		//return (List<String>) entityManager.createQuery(hql).getResultList();
	}



	@SuppressWarnings("unchecked")
	public List<au_patient> getAllpatients(int hospital_id) {
		String hql = "FROM au_patient as pat where pat.hospitalid=?1";
		return (List<au_patient>) entityManager.createQuery(hql).setParameter(1,hospital_id).getResultList();
	}


	public int updateAuPatient(au_patient pat) {
		
		
		try {
			
			
			String hql = "UPDATE au_patient SET " + 
			 		"au_pat_name=:au_pat_name," + 
			 		"au_pat_age=:au_pat_age," + 
			 		"au_pat_gender=:au_pat_gender,au_pat_phno=:au_pat_phno,au_pat_email=:au_pat_email," + 
			 		"au_doctor_email_id=:au_doctor_email_id," + 
			 		"au_doctor_phone_no=:au_doctor_phone_no," + 
			 		"au_hosp_ref_no=:au_hosp_ref_no," + 
			 		"hospitalid=:hospitalid," + 
			 		"au_referred_by=:au_referred_by," + 
			 		"au_clinic_history=:au_clinic_history," + 
			 		"au_dd_no=:au_dd_no," + 
			 		"type_of_sample=:type_of_sample," + 
			 		"test_required=:test_required," + 
			 		"au_amount=:au_amount," +
			 		"au_remarks=:au_remarks"+
			 		" WHERE au_patient_id=:au_patient_id";
		     Query query = entityManager.createQuery(hql);
		     query.setParameter("au_pat_name", pat.getAu_pat_name());
		     query.setParameter("au_pat_age", pat.getAu_pat_age());
			 query.setParameter("au_pat_gender", pat.getAu_pat_gender());
			 query.setParameter("au_pat_phno" ,pat.getAu_pat_phno());
			 query.setParameter("au_pat_email",pat.getAu_pat_email());
			 query.setParameter("au_doctor_email_id", pat.getAu_doctor_email_id());
		     query.setParameter("au_doctor_phone_no", pat.getAu_doctor_phone_no());
			 query.setParameter("au_hosp_ref_no", pat.getAu_hosp_ref_no());
		     query.setParameter("hospitalid", pat.getHospitalid());
			 query.setParameter("au_clinic_history", pat.getAu_clinic_history());
			 query.setParameter("au_dd_no", pat.getAu_dd_no());
		     query.setParameter("au_referred_by", pat.getAu_referred_by());
			 query.setParameter("type_of_sample", pat.getType_of_sample());
		     query.setParameter("test_required", pat.getTest_required());
			 query.setParameter("au_amount", pat.getAu_amount());
			 query.setParameter("au_remarks", pat.getAu_remarks());
		     //query.setParameter("date_of_sample", pat.getDate_of_sample());
			 query.setParameter("au_patient_id", pat.getAu_patient_id());
	     int result = query.executeUpdate();
	     return result;
	   } catch(NoResultException nre) {
				
				System.out.println("exp   "+nre);
			
			
		}
		return 0;
		}
	

} 