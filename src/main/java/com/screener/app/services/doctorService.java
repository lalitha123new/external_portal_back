package com.screener.app.services;

import  com.screener.app.entity.*;



import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import  com.screener.app.dao.*;
@Service
public class doctorService implements IdoctorService {
	@Autowired
	private IdoctorDao doctorDao;
	/*@Override
	public Article getArticleById(int articleId) {
		Article obj = articleDAO.getArticleById(articleId);
		return obj;
	}*/	
	@Override
	public List<doctor> getAlldoctors(){
		return doctorDao.getAlldoctors();
	}
	
	@Override
	public List<String> getAllhos(){
		return doctorDao.getAllhos();
	}
	
	/*@Override
	public String checklogin(login lg)
	{
		 if (loginDao.loginExists(lg.getUsername(), lg.getPassword())) {
	            return "login success";
         } else {
	           // loginDao.addlogin(lg);
	            return "login fail";
         }
	}
	*/
	@Override
	public synchronized boolean adddoctor(doctor doc){
               /* if (loginDao.patientExists(lg.getUsername(), lg.getPassword())) {
    	            return false;
                } else {
    	            loginDao.addlogin(lg);
    	            return true;
                }*/
		
		doctorDao.adddoctor(doc);
        return true;
	}
	/*@Override
	public void updateArticle(Article article) {
		articleDAO.updateArticle(article);
	}
	@Override
	public void deleteArticle(int articleId) {
		articleDAO.deleteArticle(articleId);
	}*/
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