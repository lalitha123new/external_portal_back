package com.screener.app.services;

import  com.screener.app.entity.*;
import java.util.List;

public interface IloginService {
     List<login> getAlllogins();
    // Patient getArticleById(int articleId);
     boolean addlogin(login lg);
     void  updatelogin(login lg,int hosp_id);
     int checklogin(login lg);
     //void updateArticle(Patient pat);
     //void deleteArticle(int id);
     String updateFlag(int flag_type, int flag, int hps_id);
     String updateflagByemail(String email);
     String forgotemail(String email);
     void updatepassword(String password,String email);
} 