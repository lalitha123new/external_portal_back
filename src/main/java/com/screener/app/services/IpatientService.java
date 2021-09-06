package com.screener.app.services;

import  com.screener.app.entity.*;
import java.util.List;

public interface IpatientService {
	
	List<patient> getAllpatients(String username);
	
	Logintemp gethospitalbyusername(String username);
	
	Logintemp gethospitalbyhosid(int hos_id);
	
	List<patient> getSort(String sort,String username);
	
	List<patient> getFilter(String filter,String username,String value);
    
	List<patient> getAllpatients();
    // Patient getArticleById(int articleId);
    
	boolean addpatient(patient pat);
    // String checklogin(Patient pat);
     //void updateArticle(Patient pat);
     //void deleteArticle(int id);
	
	List<String> getAlldocs();
    
	List<patient> findByUserid(int sample_id);
	List<patient> findByUserExtId(String extr_id);
	
	patient getpatientBytransId(int extr_id);
    public int getExtridByNpno(int npno);
    public int setSampleId(int extr_id,int sam_id);
    public int getNpnoByExtrid(int extr_id);

	List<login> getAllhospitallist();

	List<login> getHospitallist(int hospital_id);

	int updateImageUrl(String ImgeUrl, int checkImgSrc);

	public String findNpnum(String npnum);
	public int updateSample(patient pat);
	List<lab_test_details> getLabtestDetails();
	lab_test_details labtestMatch(String exlab_specimen, String exlab_biopsy_type, String exlab_fixative);
	
} 