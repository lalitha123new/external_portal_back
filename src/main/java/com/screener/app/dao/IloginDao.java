package com.screener.app.dao;
import java.util.List;
import  com.screener.app.entity.*;;
public interface IloginDao {
	List<login> getAlllogins();
    //login getloginByName(String name);
    void addlogin(login lg);
    void  updatelogin(login lg,int hosp_id);
    //void updatePatient());
    //void deleteArticle(int articleId);
    int loginExists(String username, String password);
    int loginExists1(String username,String email);
   // String checklogin(login lg);
    String updateFlag(int flag_type, int flag, int hps_id);
    String updateflagByemail(String email);
    String forgotemail(String email);
    void updatepassword(String password,String email);
	int emailExists(String email);
    
} 