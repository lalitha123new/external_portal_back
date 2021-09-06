package com.screener.app.services;

import com.screener.app.entity.*;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.screener.app.dao.*;

@Service
public class patientService implements IpatientService {
	@Autowired
	private IpatientDao patientDao;
	
	@Override
	public List<patient> getAllpatients(){
		return patientDao.getAllpatients();
	}
	
	@Override
	public List<String> getAlldocs(){
		return patientDao.getAlldocs();
	}
	
	@Override
	public Logintemp gethospitalbyusername(String username){
		return patientDao.gethospitalbyusername(username);
	}
	
	@Override
	public Logintemp gethospitalbyhosid(int hospital_id){
		return patientDao.gethospitalbyhosid(hospital_id);
	}
	
	public List<patient> getSort(String sort,String username)
	{
		return patientDao.getSort(sort,username);
	}
	
	public List<patient> getFilter(String filter,String username,String value)
	{
		return patientDao.getFilter(filter,username,value);
	}
	
	@Override
	public synchronized boolean addpatient(patient pat){
		
		String ext_id = pat.getExtr_id()+(patientDao.findMax()+1); 
		pat.setTransaction_id(ext_id);
         
		
		patientDao.addpatient(pat);
        return true;
	}
	
	@Override
	public List<patient> getAllpatients(String username){
		return patientDao.getAllpatients(username);
	}
	
	@Override
	public List<patient> findByUserid(int sample_id) {
		return patientDao.findByUserid(sample_id);
	}
	
	@Override
	public int getExtridByNpno(int npno){
		return patientDao.getExtridByNpno(npno);
	}
	
	public int getNpnoByExtrid(int extr_id)
	{
		return patientDao.getNpnoByExtrid(extr_id);
	}
	
	public int setSampleId(int extr_id,int sam_id) {
		return patientDao.setSampleId(extr_id,sam_id);
	}
	
	@Override
	 public patient getpatientBytransId(int extr_id)
	 {
		System.out.println("yest coming");
		 return patientDao.getpatientBytransId(extr_id);
	 }

	@Override
	public List<patient> findByUserExtId(String extr_id) {
		// TODO Auto-generated method stub
		
		return patientDao.findByUserExtId(extr_id);
		//return null;
	}

	
	//toget all hospitals
	@Override
	public List<login> getAllhospitallist() {
		// TODO Auto-generated method stub
		 return patientDao.getAllhospitallist();
	}

	@Override
	public List<login> getHospitallist(int hospital_id) {
		// TODO Auto-generated method stub
		
		return patientDao.getHospitallist(hospital_id);
		
	}
	
	//  to updateImageURL
	
	@Override
	public int updateImageUrl(String ImgeUrl,int checkImgSrc) {
		// TODO Auto-generated method stub
		
		return patientDao.toUpdateImageUrl(ImgeUrl,checkImgSrc);
		
	}
	
	
	public String findNpnum(String npnum) {
		
		return patientDao.findNpnum(npnum);
		
	}
	
	public int updateSample(patient pat) {

		return patientDao.updateSample(pat);

		}
	
	@Override
	public List<lab_test_details> getLabtestDetails() {

	return patientDao.getLabtestDetails();

	}
	
	@Override
	public lab_test_details labtestMatch(String exlab_specimen, String exlab_biopsy_type, String exlab_fixative) {
	// TODO Auto-generated method stub
	return patientDao.getlabtestMatch(exlab_specimen,exlab_biopsy_type,exlab_fixative);

	}
} 






