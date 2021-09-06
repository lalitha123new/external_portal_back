package com.screener.app.dao;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import  com.screener.app.entity.*;
@Transactional
@Repository
public class patientDao implements IpatientDao {
	@PersistenceContext	
	private EntityManager entityManager;	
	/*@Override
	public login getArticleById(int ) {
		return entityManager.find(Article.class, articleId);
	}*/
	@SuppressWarnings("unchecked")
	@Override
	public List<patient> getAllpatients() {
		String hql = "FROM patient as pat";
		return (List<patient>) entityManager.createQuery(hql).getResultList();
	}	
	@SuppressWarnings("unchecked")
	@Override
	public List<String> getAlldocs() {
		//String temp="apollo";
		String hql = "select d.docname FROM doctor d where d.hname='apollo'";
		return (List<String>) entityManager.createQuery(hql).getResultList();
	}
	
	@Override
	public void addpatient(patient pat) {
		pat.setStatus("Pending receipt");
		//pat.setStatus("Pending");
		Date date = new Date();
		Timestamp timestamp = new Timestamp(date.getTime());
		
		pat.setDate_of_entry(timestamp.toString());
		entityManager.persist(pat);
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public List<patient> findByUserid(int sample_id) {
		String hql = "FROM patient p where p.sample_id=?1";
		return (List<patient>) entityManager.createQuery(hql).setParameter(1, sample_id).getResultList();
		//return (List<String>) entityManager.createQuery(hql).getResultList();
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public List<patient> findByUserExtId(String extr_id) {
		String hql = "FROM patient p where p.extr_id=?1";
		return (List<patient>) entityManager.createQuery(hql).setParameter(1, extr_id).getResultList();
		//return (List<String>) entityManager.createQuery(hql).getResultList();
	}
	
	
	@Override
	public int findMax() {
		String hql = "SELECT MAX(p.sample_id) FROM patient as p";
		@SuppressWarnings("unchecked")
		List<Integer> temp = entityManager.createQuery(hql).getResultList();
		return temp.get(0);
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public List<patient> getAllpatients(String username) {
		
		
		//getting hospital_id
		int hospital_id=0;
		String hql = "select hospitalid FROM login as lg WHERE lg.username = ?1";
		List results = entityManager.createQuery(hql).setParameter(1, username).getResultList();
		if(results.isEmpty()) {
			
			String hql1 = "select hospitalid FROM login as lg WHERE lg.email = ?1";
			int count1 =  (int) entityManager.createQuery(hql1).setParameter(1, username).getSingleResult();
			hospital_id = count1;
			
		}else {
			
			hospital_id =  Integer.parseInt(results.get(0).toString());
		}
		
		
		List<patient> pat= null;
		String hql2 = "FROM patient as pat where pat.hospitalid= "+hospital_id;
		pat = (List<patient>) entityManager.createQuery(hql2).getResultList();
//		if(pat.isEmpty()) {
//			
//			String hql3 = "FROM patient as pat where pat.email=?1";
//			List<patient> pat1 = (List<patient>) entityManager.createQuery(hql3).setParameter(1,username).getResultList();
//			return pat1;
//			
//		}else {
			return pat;
		//}
		
	}
	
	@Override
	public Logintemp gethospitalbyusername(String username) {
		String hql = "FROM login as lg where lg.username=?1";
		login temp= (login) entityManager.createQuery(hql).setParameter(1,username).getSingleResult();
		
		Logintemp lt=new Logintemp();
		lt.setHospitalname(temp.getNameofhospital());
		lt.setMail(temp.getEmail());
		lt.setPhone(temp.getContact());
		lt.setHospital_address(temp.getHospital_address());
		return lt;

	}
	
	@Override
	public Logintemp gethospitalbyhosid(int hospital_id) {
		String hql = "FROM login as lg where lg.hospitalid=?1";
		login temp= (login) entityManager.createQuery(hql).setParameter(1,hospital_id).getSingleResult();
		
		Logintemp lt=new Logintemp();
		lt.setHospitalname(temp.getNameofhospital());
		lt.setMail(temp.getEmail());
		lt.setPhone(temp.getContact());
		lt.setHospital_address(temp.getHospital_address());
		lt.setHospital_type(temp.getHospitalType());
		return lt;

	}
	
	
	@SuppressWarnings("unchecked")
	@Override
	public List<patient> getSort(String sort,String username	)
	{
		String hql = null;
		if(sort.equals("status"))
			hql = "FROM patient p where p.username=?1 order by p.status";
		else if(sort.equals("username"))
			hql = "FROM patient p where p.username=?1 order by p.username";
		else if(sort.equals("specimen"))
			hql = "FROM patient p where p.username=?1 order by p.specimen";
		else if(sort.equals("referred_by"))
			hql = "FROM patient p where p.username=?1 order by p.referred_by";
		else if(sort.equals("npno"))
			hql = "FROM patient p where p.username=?1 order by p.npno";
		else if(sort.equals("pat_name"))
			hql = "FROM patient p where p.username=?1 order by p.pat_name";
		return (List<patient>) entityManager.createQuery(hql).setParameter(1, username).getResultList();
	}
	
	
	@SuppressWarnings("unchecked")
	@Override
	public List<patient> getFilter(String filter,String username,String value)
	{
		String hql = null;
		if(filter.equals("status")) 
			hql = "FROM patient p where p.status=?1 and p.username=?2";
		else if(filter.equals("doctor"))
			hql = "FROM patient p where p.referred_by=?1 and p.username=?2";
		else if(filter.equals("specimen"))
			hql = "FROM patient p where p.specimen=?1 and p.username=?2";
		else if(filter.equals("gender"))
			hql = "FROM patient p where p.pat_gender=?1 and p.username=?2";
		else if(filter.equals("Fixative"))
			hql = "FROM patient p where p.fixative=?1 and p.username=?2";
		return (List<patient>) entityManager.createQuery(hql).setParameter(1,value).setParameter(2,username).getResultList();
	}
	
	@Override
	public int getExtridByNpno(int npno)
	{
		String hql = "Select p.extr_id FROM patient p where p.npno=?1";
		return (int) entityManager.createQuery(hql).setParameter(1, npno).getSingleResult();
	}
	
	@Override
	public int getNpnoByExtrid(int extr_id)
	{
		String hql = "Select p.npno FROM patient p where p.extr_id=?1";
		return (int) entityManager.createQuery(hql).setParameter(1, extr_id).getSingleResult();
	}
	
	@Override
	public int setSampleId(int extr_id,int sam_id)
	{
		int count = ( entityManager.createQuery("update Id_Mapping id set id.sam_id=?1 where id.extr_id=?2")).setParameter(1,sam_id).setParameter(2,extr_id).executeUpdate();
		return count;

	}
	
	@Override
	public patient getpatientBytransId(int extr_id)
	{
		String hql = "FROM patient p where p.extr_id=?1";
		return (patient) entityManager.createQuery(hql).setParameter(1, extr_id).getResultList();
	}
	
	
	
	@SuppressWarnings("unchecked")
	@Override
	public List<login> getAllhospitallist() {
		// TODO Auto-generated method stub
		
		String hql = "FROM  login p";
	
		return (List<login>) entityManager.createQuery(hql).getResultList();
		
	}
	
	@Override
	public int toUpdateImageUrl(String img_url,int checkImgSrc) {
		// TODO Auto-generated method stub
		System.out.println("CHECKING FILE UPLOAD"+checkImgSrc);
		if(checkImgSrc == 1) {
			System.out.println("notification image url  "+checkImgSrc);
		String hql1 = "Select max(p.notification_id) FROM notification p ";
		int notification_id = (int) entityManager.createQuery(hql1).getSingleResult();
		
		
			   String hql = "UPDATE notification set img_url = :img_url "  + 
			               "WHERE notification_id = :notification_id";
			   Query query = entityManager.createQuery(hql);
			   query.setParameter("img_url", img_url);
			   query.setParameter("notification_id", notification_id);
			   int result = query.executeUpdate();
			   
		}else if(checkImgSrc == 2) {
			//sample_image_url
			
			System.out.println("patient image url  "+checkImgSrc);
			String hql1 = "Select max(p.sample_id) FROM patient p ";
			int sample_id = (int) entityManager.createQuery(hql1).getSingleResult();
			
			
				   String hql = "UPDATE patient set sample_image_url = :sample_image_url "  + 
				               "WHERE sample_id = :sample_id";
				   Query query = entityManager.createQuery(hql);
				   query.setParameter("sample_image_url", img_url);
				   query.setParameter("sample_id", sample_id);
				   int result = query.executeUpdate();
			
			
		}else if(checkImgSrc == 3) {
			
			System.out.println("Au patient image url  "+checkImgSrc);
			String hql1 = "Select max(p.au_patient_id) FROM au_patient p ";
			
			int sample_id = (int) entityManager.createQuery(hql1).getSingleResult();
			
				   String hql = "UPDATE au_patient set au_sample_image_url = :au_sample_image_url "  + 
				                "WHERE au_patient_id = :au_patient_id";
				   Query query = entityManager.createQuery(hql);
				   query.setParameter("au_sample_image_url", img_url);
				   query.setParameter("au_patient_id", sample_id);
				   int result = query.executeUpdate();
		} 
	
		return 0;
	}
	
	
	//get Update hospital list
	@Override
	public List<login> getHospitallist(int hospital_id) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public String findNpnum(String npnum) {
		
		try {
				
			String external_hos_id = "";
		  // String hql2 = "FROM patient p where p.npno= :npno";
			String hql2 = "FROM patient p WHERE p.npno= '"+npnum+"'";
			
			System.out.println(hql2);
		   Query query = entityManager.createQuery(hql2);
		  // query.setParameter("npno", npnum);
		   List<patient> result = (List<patient>) query.getResultList();
		   
		   System.out.println(result.toString());
	
			for(patient pa:result) {
				external_hos_id=""+pa.getExtr_id();
			}
			
			
			return external_hos_id;
			
		} catch(NoResultException nre) {
			
			System.out.println("exp   "+nre);
		
		}
		
		
		
		return "0";
	}
	
	
	
	//update sample
		public int updateSample(patient pat) {
			
			
		try {
			
			System.out.println("check1");
			System.out.println(pat.getSample_test());
			
		 String hql = "UPDATE patient SET pat_name=:pat_name,pat_age=:pat_age,"+
				" pat_gender=:pat_gender,pat_phno=:pat_phno,pat_email=:pat_email,referred_by=:referred_by,clinic_history=:clinic_history,"+
				" examination=:examination,"+
				" amount=:amount,doctor_email_id=:doctor_email_id,"+
				" doctor_phone_no=:doctor_phone_no,investigation=:investigation,"+
				" previous_biopsy_number=:previous_biopsy_number,sample_test=:sample_test,"+
				" dd_no=:dd_no,diagnosis=:diagnosis,"+
				 "opetative_notes=:opetative_notes,hospitalid=:hospitalid,"+
				 "hosp_ref_no=:hosp_ref_no WHERE sample_id=:sample_id";
	     Query query = entityManager.createQuery(hql);
	     query.setParameter("pat_name", pat.getPat_name());
	     query.setParameter("pat_age", pat.getPat_age());
		 query.setParameter("pat_gender", pat.getPat_gender());
		 
		 query.setParameter("pat_phno", pat.getPat_phno());
		 query.setParameter("pat_email", pat.getPat_email());
		 
	     query.setParameter("referred_by", pat.getReferred_by());
		 query.setParameter("clinic_history", pat.getClinic_history());
	     query.setParameter("examination", pat.getExamination());
		 query.setParameter("amount", pat.getAmount());
	     query.setParameter("doctor_email_id", pat.getDoctor_email_id());
		 query.setParameter("doctor_phone_no", pat.getDoctor_phone_no());
	     query.setParameter("investigation", pat.getInvestigation());
		 query.setParameter("previous_biopsy_number", pat.getPrevious_biopsy_number());
	     query.setParameter("sample_test", pat.getSample_test());
		 query.setParameter("dd_no", pat.getDd_no());
	     query.setParameter("diagnosis", pat.getDiagnosis());
		 query.setParameter("opetative_notes", pat.getOpetative_notes());
	     query.setParameter("hospitalid", pat.getHospitalid());
		 query.setParameter("hosp_ref_no", pat.getHosp_ref_no());
	     query.setParameter("sample_id", pat.getSample_id());
	     int result = query.executeUpdate();
	     return result;
	   } catch(NoResultException nre) {
				
				System.out.println("exp   "+nre);
			
			
		}
		return 0;
		}
		@SuppressWarnings("unchecked")
		@Override
		public List<lab_test_details> getLabtestDetails() {

		String hql = "FROM lab_test_details";
		return (List<lab_test_details>) entityManager.createQuery(hql).getResultList();
		}
	
		@Override
		public lab_test_details getlabtestMatch(String exlab_specimen, String exlab_biopsy_type,
		String exlab_fixative) {
		// TODO Auto-generated method stub
		try {

		System.out.println(exlab_specimen+"--1--"+exlab_biopsy_type+"--2--"+exlab_fixative+"--3--");

		String hql2 = "FROM lab_test_details l WHERE l.exlab_specimen=?1 and l.exlab_biopsy_type=?2 and l.exlab_fixative=?3";

		@SuppressWarnings("unchecked")
		List<lab_test_details> result  = (List<lab_test_details>)entityManager.createQuery(hql2) .setParameter(1, exlab_specimen).setParameter(2, exlab_biopsy_type).setParameter(3, exlab_fixative).getResultList();
		 
		 
		  lab_test_details lab_test_details1=null;
		for(lab_test_details pa:result) {
		lab_test_details1=pa;
		System.out.println(pa);
		}


		return lab_test_details1;

		} catch(NoResultException nre) {

		System.out.println("exp   "+nre);

		}
		return null;


		}

} 