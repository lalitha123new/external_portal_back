package com.screener.app.dao;

import java.io.UnsupportedEncodingException;
import java.security.NoSuchAlgorithmException;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.Base64;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.thymeleaf.ITemplateEngine;

import  com.screener.app.entity.*;

@Transactional
@Repository
public class loginDao implements IloginDao {
	@PersistenceContext	
	private EntityManager entityManager;
	//private passencryption ps=new passencryption("bhavisjbfweauioe");
	private SHA256 hash = new SHA256();
	
	@Autowired
	private emailDao emailDao;
	
	/*@Override
	public login getArticleById(int ) {
		return entityManager.find(Article.class, articleId);
	}*/
	@SuppressWarnings("unchecked")
	@Override
	public List<login> getAlllogins() {
		String hql = "FROM login as lg";
		return (List<login>) entityManager.createQuery(hql).getResultList();
	}	
	
	
	@Override
	public void addlogin(login lg) {
		/*
		 * System.out.println("before encrypted" + lg.getPassword()); try {
		 * System.out.println("hey encrypt");
		 * 
		 * String enpass = ps.encrypt(lg.getPassword());
		 * System.out.println("encrypted pass" +enpass );
		 * lg.setPassword(ps.encrypt(lg.getPassword())); System.out.println("encrypted"
		 * + lg.getPassword()); } catch (Exception e) { // TODO Auto-generated catch
		 * block e.printStackTrace(); }
		 * 
		 * entityManager.persist(lg);
		 */
//		String hql = "select hospitalid FROM login as lg WHERE lg.email = ?1";
//		int count =  (int) entityManager.createQuery(hql).setParameter(1, lg.getEmail()).getSingleResult();
//		
//		System.out.println( "CHECK EXTERNAL "+count);
		
           if(lg.getPortal_flag()==2){
			
			try {
				verfiyEmail(lg.getEmail(),1);
				
			} catch (UnsupportedEncodingException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		   }else{
			   
			   try {
				verfiyEmail(lg.getEmail(),2);
			} catch (UnsupportedEncodingException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		   }
		System.out.println("before encrypted" + lg.getPassword());
		try {
			
			
			System.out.println("check1");
			System.out.println("hey encrypt" + lg.getPassword());
			String hashpass = hash.hash(lg.getPassword());
			//String enpass = ps.encrypt(lg.getPassword());
			System.out.println("encrypted pass" +hashpass );
			lg.setPassword(hash.hash(lg.getPassword()));
			System.out.println("encrypted" + lg.getPassword());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		System.out.println("lkkllk" + lg.getHospitalType());
		entityManager.persist(lg);
	}
	/*@Override
	public void updateArticle(Article article) {
		Article artcl = getArticleById(article.getArticleId());
		artcl.setTitle(article.getTitle());
		artcl.setCategory(article.getCategory());
		entityManager.flush();
	}
	@Override
	public void deleteArticle(int articleId) {
		entityManager.remove(getArticleById(articleId));
	}*/
	@Override
	public int loginExists(String username, String password) {
		String hashpass;
		try {
			hashpass = hash.hash(password);
			String hql = "select hospitalid FROM login as lg WHERE lg.username = ?1 and lg.password = ?2 and verify_email_flag = 2 and review_flag = 1";
			List results = entityManager.createQuery(hql).setParameter(1, username).setParameter(2, hashpass).getResultList();
			if(results.isEmpty()) {
				
				String hql1 = "select hospitalid FROM login as lg WHERE lg.email = ?1 and lg.password = ?2 and verify_email_flag = 2 and review_flag = 1";
				int count1 =  (int) entityManager.createQuery(hql1).setParameter(1, username).setParameter(2, hashpass).getSingleResult();
				return count1;
				
			}else {
				
			  return Integer.parseInt(results.get(0).toString());
			}
		} catch (Exception e) {
			
			e.printStackTrace();
			return 0;
			
		}
	}
	
	//email exits
	@Override
	public int emailExists(String email) {
		
		
		try {
		 
			String hql = "select count(hospitalid) FROM login as lg WHERE lg.email = ?1";
			Long count = (Long) entityManager.createQuery(hql).setParameter(1, email).getSingleResult();
			System.out.println("email_count------------------"+ count);
			String count1 =count.toString();
			return Integer.parseInt(count1);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return 0;
		}
	}
	
	@Override
	public void updatelogin(login lg,int hos_id) {
		  try {
		System.out.println("pwd-- "+lg.getPassword());
			  if(lg.getPassword().equals("")) {
				  
				  System.out.println("equils-- "+lg.getPassword()); 
				  String hql = "UPDATE login SET "+
						  "nameofhospital=:nameofhospital,contact= :contact,"+
						  "email=:email,"+
						  "username=:username,hospital_address=:hospital_address,"+
						  "hospitalType=:hospitalType" +
						  " WHERE hospitalid= "+hos_id;
			 System.out.println(hql);
		   Query query = entityManager.createQuery(hql);
		
		
		   query.setParameter("nameofhospital", lg.getNameofhospital());
		   query.setParameter("hospitalType", lg.getHospitalType());
		   query.setParameter("username", lg.getUsername());
		   query.setParameter("contact", lg.getContact());
		   query.setParameter("email", lg.getEmail());
		   query.setParameter("hospital_address",lg.getHospital_address());
		   //query.setParameter("hospitalid", hos_id);
		   int result = query.executeUpdate();
		  
			 
		
			  }else {
				  
				  String hql = "UPDATE login SET "+
						  "nameofhospital=:nameofhospital,contact= :contact,"+
						  "email=:email,password=:password,"+
						  "username=:username,hospital_address=:hospital_address,"+
						  "hospitalType=:hospitalType" +
						  " WHERE hospitalid= "+hos_id;
				  
				  System.out.println("NOTequils-- "+lg.getPassword()); 
		   Query query = entityManager.createQuery(hql);
		 
			String hashpass = hash.hash(lg.getPassword());
		
		   query.setParameter("nameofhospital", lg.getNameofhospital());
		   query.setParameter("hospitalType", lg.getHospitalType());
		   query.setParameter("username", lg.getUsername());
		   query.setParameter("contact", lg.getContact());
		   query.setParameter("email", lg.getEmail());
		   query.setParameter("password", hashpass);
		   query.setParameter("hospital_address",lg.getHospital_address());
		   //query.setParameter("hospitalid", hos_id);
		   int result = query.executeUpdate();
				  
				  
			  }
	   
	   
	   
		  } catch (NoSuchAlgorithmException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		
	}

	@Override
	public String updateflagByemail(String email) {
		int count =0;
		try {
			System.out.println("email------"+email);
			verfiyEmail(email,3);
			String hql = "select hospitalid FROM login as lg WHERE lg.email = ?1";
			 count =  (int) entityManager.createQuery(hql).setParameter(1, email).getSingleResult();
			//System.out.println("count is "+count);
			 updateFlag(1,2,count);
			
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			
		}
		
		return email;
	}

	@Override
	public String updateFlag(int flag_type, int flag,int hps_id) {
		
		 String hql ="";
		 Query query =null;
		 //if flag type 1 verify email flag
		if(flag_type == 1) {
			
			  hql = "UPDATE login SET "+
				      "verify_email_flag=:verify_email_flag" +
				      " WHERE hospitalid= "+hps_id;
			   query = entityManager.createQuery(hql);
			  query.setParameter("verify_email_flag", flag);
			  
//			  try {
//				verfiyEmail("narasimham1231@gmail.com");
//			} catch (UnsupportedEncodingException e) {
//				// TODO Auto-generated catch block
//				e.printStackTrace();
//			}
		//if flag type 2 review_flag flag	  
		}else if(flag_type == 2) {
			
			hql = "UPDATE login SET "+
				      "review_flag=:review_flag" +
				      " WHERE hospitalid= "+hps_id;
			  query = entityManager.createQuery(hql);
			  query.setParameter("review_flag", flag);
			    String hql1 = "select email FROM login as lg WHERE lg.hospitalid = ?1";
				String email1  =  (String) entityManager.createQuery(hql1).setParameter(1, hps_id).getSingleResult();
				System.out.println("email--"+email1);
			  
			  try {
				verfiyEmail(email1,2);
			} catch (UnsupportedEncodingException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			  
		}
		
  int result = query.executeUpdate();
		
		
		return null;
	}
	
	
	public int verfiyEmail(String email,int mail_flag) throws  UnsupportedEncodingException {
		
  if(mail_flag == 2) {
	  
	    String m_to = email;
		String m_subject = "Registration for External Lab Tracker";
		//String emaillink = "\n<a href='Push.d.nimhans@gmail.com'>Push.d.nimhans@gmail.com</a>";
		String encoded = new String(Base64.getEncoder().encode(m_to.getBytes()));
		
		// String encoded = email;
		String m_text = "<div>Hello,</div><div>Your registration is approved.</div><div>Please use the submitted credentials for the login.</div><br>"
				+ "<a href= https://labservices.nimhans.ac.in/>External lab services"
				+"</a>";
		// String m_text = "some text";
		emailDao.sendEmail(email, m_subject, m_text);
		
  }else if(mail_flag == 1) {
	  
		String m_to = email;
		String m_subject = "E-mail verification for External Lab Tracker";
		//String emaillink = "\n<a href='Push.d.nimhans@gmail.com'>Push.d.nimhans@gmail.com</a>";
		String encoded = new String(Base64.getEncoder().encode(m_to.getBytes()));
		
		// String encoded = email;
		String m_text = "<div>Hello,</div><div>You have initiated registration  process for Nimhans Lab Tracker .</div><div>Please click on the  link to  complete registration and activate login.<br></div><br>"
				+ "<a href= https://labservices.nimhans.ac.in/external_nptracker/#/approve?email=" + encoded + "> Click here to Approve"
				/*+ "<a href= http://localhost:4200/#/approve?email=" + encoded + "> Click here to Approve"*/
				+"</a>";
		// String m_text = "some text";
		emailDao.sendEmail(email, m_subject, m_text);
		
       }else {
    	   
			//String m_to = "nimhansneuropathology@gmail.com";
    	   String m_to = "neuropathology2008@gmail.com";
    	  
			
    	  
   		String m_subject = "New user is waiting for registration approval";
  
   	
   		
   		// String encoded = email;
   		String m_text = "<div>Hello,</div><div>Please approve the registration of the new user as the E-mail verfication is done .<br>User E-mail id is :"+ email +"</div>";
   		// String m_text = "some text";
   		emailDao.sendEmail(m_to, m_subject, m_text);
    	   
       }
		return 0;
	}
	
	@Override
	public String forgotemail(String email) {
		// TODO Auto-generated method stub
		System.out.println("CHECKING");
		String m_to = email;
		String m_subject = "New password link for External Lab Tracker";
		String encoded = new String(Base64.getEncoder().encode(m_to.getBytes()));
		
		// String encoded = email;
		String m_text = "<div>Hello,</div><div>You have initiated process to set new password for Nimhans Lab Tracker .</div><div>Please click on the  link to  complete the set new password process and proceed.<br></div><br>"
				+ "<a href= https://labservices.nimhans.ac.in/external_nptracker/#/newpass?email=" + encoded + "> Click Here"
				/*+ "<a href= http://localhost:4200/#/newpass?email=" + encoded + "> Click Here"*/
				+"</a>";
		// String m_text = "some text";
		emailDao.sendEmail(email, m_subject, m_text);
		
		
		return "linkSent";
	}
	
	public void updatepassword(String password,String email) {
		 
				  String hql = "UPDATE login SET password=:password WHERE email= '"+email+"'";
		          Query query = entityManager.createQuery(hql);
		          String hashpass = null;
				try {
					hashpass = hash.hash(password);
					  query.setParameter("password", hash.hash(password));
			          int result = query.executeUpdate();
				} catch (NoSuchAlgorithmException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
					//lg.setPassword(hash.hash(lg.getPassword()));
		         
		   
			  }
	
	@Override
	public int loginExists1(String username,String email) {
		
		
		try {
		  
			String hql = "select hospitalid FROM login as lg WHERE lg.username = ?1 and lg.email = ?2 and verify_email_flag = 2 and review_flag = 1";
			int count =  (int) entityManager.createQuery(hql).setParameter(1, username).setParameter(2, email).getSingleResult();
			System.out.println("count------------------"+ count);
			return count;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return 0;
		}
	}
	
	
	
} 