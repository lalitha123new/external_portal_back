package com.screener.app.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import  com.screener.app.entity.patient;
import  com.screener.app.entity.status;

@Transactional

@Repository
public class labDao implements IlabDao {
@PersistenceContext
private EntityManager entityManager;

@SuppressWarnings("unchecked")
@Override
public int changeStatus(status stat) {
//Query query = (Query) entityManager.createQuery("update patient p set p.status = 'recieved'" +
//" where p.sample_id =1");
//int result = ((javax.persistence.Query) query).executeUpdate();
//String hql = "update patient p set p.status='received' where p.sample_id=1";
// String hql = "delete from patient p where p.sample_id=1";
//int temp=Integer.valueOf(id);
String np_no = stat.getNpno();
String status = stat.getStatus();
String sample_id = stat.getExt_trc_id();
System.out.println("np1_no----"+np_no);

//entityManager.createQuery("update Id_Mapping id set id.npno =?1 where id.extr_id=?2").setParameter(1, np_no).setParameter(2, sample_id).executeUpdate();
int count = ( entityManager.createQuery("update patient p set p.status=?1,p.npno=?2 where p.extr_id=?3")).setParameter(1,status).setParameter(2,np_no).setParameter(3,sample_id).executeUpdate();
return count;
}

@SuppressWarnings("unchecked")
@Override
public int changeStatusByNp_Num(String np_num,String status) {
//int np_no = np_num;
//String status1 = status;
//entityManager.createQuery("update Id_Mapping id set id.npno =?1").setParameter(1, np_no).executeUpdate();
int count = ( entityManager.createQuery("update patient p set p.status=?1 where p.npno=?2")).setParameter(1,status).setParameter(2,np_num).executeUpdate();
return count;
}
@Override
public String getEmailBynpnumber(String np_no) {
	// TODO Auto-generated method stub
	
	
	String hql = "FROM patient as pat where pat.npno=?1";
	@SuppressWarnings("unchecked")
	List<patient> pa = (List<patient>) entityManager.createQuery(hql).setParameter(1,np_no).getResultList();
	String dr_email_id = null;
	for(patient p:pa) {
		
		dr_email_id =p.getDoctor_email_id();
		System.out.println("email  "+dr_email_id);
		
	}
	System.out.println(pa);
	return dr_email_id;
	
}

}
