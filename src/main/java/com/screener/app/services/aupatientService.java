package com.screener.app.services;

import com.screener.app.entity.*;


import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.screener.app.dao.*;

@Service
public class aupatientService implements IaupatientService {
	@Autowired
	private aupatientDao patientDao;
	
	@Override
	public List<au_patient> getAuAllpats(){
		return patientDao.getAuAllpats();
	}

	@Override
	public boolean addAupatient(@Valid au_patient pat) {
		
			patientDao.addAupatient(pat);
	        return true;
		
	}

	@Override
	public List<au_patient> findByUserAuid(int getAu_patient_id) {
		
			return patientDao.findByUserAuid(getAu_patient_id);
	
	}

	

	
	@Override
	public List<au_patient> getAllAupatients(int hospital_id){
		return patientDao.getAllpatients(hospital_id);
	}
	
	
	@Override
	public int updateAuPatient(au_patient pat) {

		return patientDao.updateAuPatient(pat);

		}

} 






