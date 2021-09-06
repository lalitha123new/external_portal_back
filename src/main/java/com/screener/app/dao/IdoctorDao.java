package com.screener.app.dao;
import java.util.List;
import  com.screener.app.entity.*;;
public interface IdoctorDao {
	List<doctor> getAlldoctors();
    
    void adddoctor(doctor doc);
    List<String> getAllhos();
   
} 