package com.screener.app.dao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import com.screener.app.entity.*;
import com.screener.app.services.inotificationService;
@Transactional
@Repository
public class notificationDao implements inotificationService {
	@PersistenceContext	
	private EntityManager entityManager;
	
  //list of message display on both sides external hospital and nimhans lab
	@SuppressWarnings("unchecked")
	@Override
	public List<notification> getNotification(int hospitalid, int sample_id) {
		// TODO Auto-generated method stub
		String hql = "FROM notification as nt WHERE nt.sample_id = ?1 and nt.hospitalid = ?2";
		return (List<notification>) entityManager.createQuery(hql).setParameter(1, sample_id).setParameter(2, hospitalid).getResultList();
	}

	
	//to Get count of unread messages for nimhans Lab
	@SuppressWarnings("unchecked")
	@Override
	public int getUnreadNotificationCount(int portal_flag) {
		String hql = "select count(*) FROM notification as nt WHERE nt.portal_flag = ?1 and nt.read_flag = ?2";
		Long lg = (Long) entityManager.createQuery(hql).setParameter(1, portal_flag).setParameter(2,0).getSingleResult();
		int count=lg.intValue();
		
		 return count;
	}

	//to Get count of unread messages for externalHospital
		@SuppressWarnings("unchecked")
		@Override
		public int getUnreadNotificationCountExt(int portal_flag,int hospital_id) {
			String hql = "select count(*) FROM notification as nt WHERE nt.portal_flag = ?1 and nt.read_flag = ?2 and hospitalid = ?3";
			Long lg = (Long) entityManager.createQuery(hql).setParameter(1, portal_flag).setParameter(2,0).setParameter(3,hospital_id).getSingleResult();
			int count=lg.intValue();
			
			 return count;
		}
	
	
	
	
	//to GET all hopital notification details
	@SuppressWarnings("unchecked")
	@Override
	public List<pat_notification> getAllNotification(int portal_flag,int hospital_id) {
		       // TODO Auto-generated method stub
		 
		 String hql1 = "FROM notification as nt WHERE nt.portal_flag = ?1 and hospitalid = ?2 ";
		 List<notification> totalNot = (List<notification>) entityManager.createQuery(hql1).setParameter(1, portal_flag).setParameter(2, hospital_id).getResultList();
		 
		List<pat_notification> allNotification1 =new ArrayList<pat_notification>();
		 for(notification name : totalNot)
		 {
			
			 pat_notification allNotification =new pat_notification();
		     allNotification.setCreated_at(name.getCreated_at());
		     allNotification.setImg_url(name.getImg_url());
		     allNotification.setNotification_id(name.getNotification_id());
		     allNotification.setNotification_msg(name.getNotification_msg());
		     allNotification.setPortal_flag(portal_flag);
		     allNotification.setRead_flag(name.getRead_flag());
		     allNotification.setSample_id(name.getSample_id());
		     allNotification.setNp_num(name.getNp_num());
		     
		     System.out.println("sample_id "+name.getSample_id());
		     
		     String hql2 = "FROM patient WHERE sample_id = ?1 ";
			 patient patientnew = (patient) entityManager.createQuery(hql2).setParameter(1, name.getSample_id()).getSingleResult();

		  
			
		     allNotification.setHosp_ref_no(patientnew.getHosp_ref_no());
		     allNotification.setPat_name(patientnew.getPat_name());;
		     
		     allNotification1.add(allNotification);
		     
		     
		 }
		
		 
		 
		 return allNotification1;
		 
		 
//				String hql = "FROM notification as nt WHERE nt.portal_flag = ?1 and hospitalid = ?2 ";
//				return (List<notification>) entityManager.createQuery(hql).setParameter(1, portal_flag).setParameter(2, hospital_id).getResultList();
	}

	//to update read status both side
	@SuppressWarnings("unchecked")
	@Override
	public int updateReadNotification(int notification_id) {
		int count = ( entityManager.createQuery("UPDATE notification as nt SET nt.read_flag = 1 WHERE nt.notification_id = ?1")).setParameter(1,notification_id).executeUpdate();
		return count;
	}

	@SuppressWarnings("unchecked")
	@Override
	public int addNotification(notification notification) {
		// TODO Auto-generated method stub
		entityManager.persist(notification);
		
		return 0;
	}


	@SuppressWarnings("unchecked")
	@Override
	public List<notification> getAllHospitalNotification(int portal_flag) {
		
		String hql = "FROM notification as nt WHERE nt.portal_flag = ?1";
		return (List<notification>) entityManager.createQuery(hql).setParameter(1, portal_flag).getResultList();

	}	
	
	
	
	
} 