package com.screener.app.services;

import  com.screener.app.entity.*;
import java.util.List;

import javax.validation.Valid;

public interface IaupatientService {
	
    
	List<au_patient> getAuAllpats();

	boolean addAupatient(@Valid au_patient pat);

	List<au_patient> findByUserAuid(int getAu_patient_id);
	
	List<au_patient> getAllAupatients(int hospital_id);

	int updateAuPatient(@Valid au_patient pat);

    
	
	
} 