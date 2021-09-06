package com.screener.app.controller;

	import java.util.*;

import javax.validation.Valid;
import javax.ws.rs.QueryParam;

import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


import com.screener.app.entity.*;
import com.screener.app.services.IaupatientService;
import com.screener.app.services.IpatientService;

import org.springframework.web.util.UriComponentsBuilder;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


	@RestController

	@CrossOrigin(origins="*",allowedHeaders="*")
	public class AuPatientController {
		@Autowired
		private IaupatientService ps;
		
		
		@GetMapping("/aupatient")
		public ResponseEntity<List<au_patient>> getAuAllpats() {
			List<au_patient> list = ps.getAuAllpats();
			return new ResponseEntity<List<au_patient>>(list, HttpStatus.OK);
		}
		
		@PostMapping("/aupatient")
		public String addpat(@Valid @RequestBody au_patient pat, UriComponentsBuilder builder) {
			
			System.out.println("CHECKING AUPATIENT");
			
	                boolean flag = ps.addAupatient(pat);
	               
	                if (flag != true) {
	        	    
	                return "false";
	                }
	               // HttpHeaders headers = new HttpHeaders();
	                //headers.setLocation(builder.path("/patient/{id}").buildAndExpand(pat.getAu_patient_id()).toUri());
	                return "true";
	                
		}
		
		@GetMapping("/aupatient/{hospital_id}")
		public ResponseEntity<List<au_patient>> getAllpats(@PathVariable(value = "hospital_id") int hospital_id) {
			List<au_patient> list = ps.getAllAupatients(hospital_id);
			return new ResponseEntity<List<au_patient>>(list, HttpStatus.OK);
		}
		
		
		@GetMapping(path="/aupatienttemp/{Au_patient_id}")
		public ResponseEntity<List<au_patient>> getpatientById(@PathVariable(value = "Au_patient_id") int getAu_patient_id) {
		
		
			List<au_patient> list = ps.findByUserAuid(getAu_patient_id);
			
			return new ResponseEntity<List<au_patient>>(list, HttpStatus.OK);
		}
		
		
		@PostMapping("/updateAupatient")
		public int Updatepat(@Valid @RequestBody au_patient pat, UriComponentsBuilder builder) {
			
			
	                int flag = ps.updateAuPatient(pat);
	               
	         
	                return flag;
	                
		}	
		
		
		
	}