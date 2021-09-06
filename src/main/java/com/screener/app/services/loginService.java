package com.screener.app.services;

import  com.screener.app.entity.*;



import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import  com.screener.app.dao.*;
@Service
public class loginService implements IloginService {
	@Autowired
	private IloginDao loginDao;
	/*@Override
	public Article getArticleById(int articleId) {
		Article obj = articleDAO.getArticleById(articleId);
		return obj;
	}*/	
	@Override
	public List<login> getAlllogins(){
		return loginDao.getAlllogins();
	}
	
	@Override
	public int checklogin(login lg)
	{
		 if (loginDao.loginExists(lg.getUsername(), lg.getPassword()) > 0) {
	            return loginDao.loginExists(lg.getUsername(), lg.getPassword());
         } else {
	           // loginDao.addlogin(lg);
	            return 0;
         }
	}
	
	@Override
	public synchronized boolean addlogin(login lg){
                if (loginDao.loginExists(lg.getUsername(), lg.getPassword()) > 0) {
    	            return false;
                } else {
                	
               int cnt=loginDao.emailExists(lg.getEmail());
               if(cnt <= 0) {
            	  loginDao.addlogin(lg);
   	             return true;
               }else {
            	   return false;
               }
    	           
    	            
                }
	}
	/*@Override
	public void updateArticle(Article article) {
		articleDAO.updateArticle(article);
	}
	@Override
	public void deleteArticle(int articleId) {
		articleDAO.deleteArticle(articleId);
	}*/
	
	@Override
	public synchronized void  updatelogin(login lg,int hosp_id) {
		
		loginDao.updatelogin(lg,hosp_id);
		
	}
	
	@Override
	public String updateFlag(int flag_type, int flag,int hps_id) {
	// TODO Auto-generated method stub

	String str = loginDao.updateFlag(flag_type,flag,hps_id);
	return null;
	}
	
	@Override
	public String updateflagByemail(String email) {
		// TODO Auto-generated method stub
		
		String str = loginDao.updateflagByemail(email);
		return null;
	}
	
	@Override
	public String forgotemail(String email) {
		// TODO Auto-generated method stub
		
		String str = loginDao.forgotemail(email);
		return null;
	}

	@Override
	public void updatepassword(String password, String email) {
		// TODO Auto-generated method stub
		loginDao.updatepassword(password,email);
		
	}
} 






/*public class loginService{
	
	public String check(login lg)
	{
		return "hello";
	}
	//SessionFactory session = HibernateUtil.getSessionFactory();
	  Session session = HibernateUtil.getSessionFactory().openSession(); 
		 EntityManagerFactory emf = Persistence.createEntityManagerFactory("hibernate.cfg.xml");
        EntityManager em = emf.createEntityManager();
		
		Query query = session.createQuery("select c.id,c.name from patient c");
		List<Object[]> rows = query.list();
	/*String user = lg.getParameter("userid");
    String password = lg.getParameter("password");
    String select = null;
    EntityManagerFactory entityFactory = Persistence
            .createEntityManagerFactory("password");
    EntityManager entityManager = entityFactory.createEntityManager();
    select = "SELECT userid, password FROM login WHERE userName='"
            + user + "' and password='" + password + "'";
    Query query = (Query) entityManager.createQuery(select);
    query.setParameter("userid", user);
    query.setParameter("password", password);
    




    if(((javax.persistence.Query) query).getResultList().size() == 0){
        return "Account does not exist!";
    }else{
        return "Login Success!";
    }
	}
 }*/