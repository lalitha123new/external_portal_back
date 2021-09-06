package com.screener.app.dao;
import java.util.List;
import  com.screener.app.entity.*;;
public interface IpatientDao {
	List<patient> getAllpatients();
	Logintemp gethospitalbyusername(String username);
	Logintemp gethospitalbyhosid(int hospital_id);
	List<patient> getAllpatients(String username);
    //login getloginByName(String name);
    void addpatient(patient pat);
    List<patient> getSort(String sort,String username);
    List<patient> getFilter(String filter,String username,String value);
	
    //void updatePatient());
    //void deleteArticle(int articleId);
   // boolean loginExists(String username, String password);
   // String checklogin(login lg);
    List<String> getAlldocs();
    List<patient> findByUserid(int sample_id);
    List<patient> findByUserExtId(String extr_id);
    
	int findMax();
	patient getpatientBytransId(int extr_id);
	public int getExtridByNpno(int npno);
	public int setSampleId(int extr_id,int sam_id);
	public int getNpnoByExtrid(int extr_id);
	List<login> getAllhospitallist();
	List<login> getHospitallist(int hospital_id);
	//public int toUpdateImageUrl(String str);
	public int toUpdateImageUrl(String str, int checkImgSrc);
	
	public String findNpnum(String npnum);
	
	public int updateSample(patient pat);
	List<lab_test_details> getLabtestDetails();
	lab_test_details getlabtestMatch(String exlab_specimen, String exlab_biopsy_type, String exlab_fixative);
	
} 