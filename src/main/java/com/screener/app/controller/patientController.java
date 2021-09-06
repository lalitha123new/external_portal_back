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
	public class patientController {
		@Autowired
		private IpatientService ps;
		
		
		@GetMapping("/patient")
		public ResponseEntity<List<patient>> getAllpats() {
			List<patient> list = ps.getAllpatients();
			return new ResponseEntity<List<patient>>(list, HttpStatus.OK);
		}
		
		@GetMapping("/patient/doctors")
		public List<String> getAlldoc() {
			 System.out.println("hello testing");
			List<String> list = ps.getAlldocs();
			return list;
		}
		
		
		@GetMapping("/patient/{username}")
		public ResponseEntity<List<patient>> getAllpats(@PathVariable(value = "username") String username) {
			List<patient> list = ps.getAllpatients(username);
			return new ResponseEntity<List<patient>>(list, HttpStatus.OK);
		}
		
		
		
		@GetMapping(path="/patienttemp/{sample_id}")
		public ResponseEntity<List<patient>> getpatientById(@PathVariable(value = "sample_id") int sample_id) {
		
		
			List<patient> list = ps.findByUserid(sample_id);
			
			return new ResponseEntity<List<patient>>(list, HttpStatus.OK);
		}
		
		
		@PostMapping("/patient")
		public String addpat(@Valid @RequestBody patient pat, UriComponentsBuilder builder) {
			
			System.out.println("firstStep1--"+pat);
	                boolean flag = ps.addpatient(pat);
	               
	                if (flag != true) {
	        	    
	                return "false";
	                }
	                HttpHeaders headers = new HttpHeaders();
	                headers.setLocation(builder.path("/patient/{id}").buildAndExpand(pat.getSample_id()).toUri());
	                return "true";
	                
		}
		
		@GetMapping(path="/hospital/{username}")
		public ResponseEntity<Logintemp> Logintemp(@PathVariable(value = "username") String username) {
			//int sample_id=Integer.valueOf(sample);
			Logintemp list = ps.gethospitalbyusername(username);
			return new ResponseEntity<Logintemp>(list, HttpStatus.OK);
		}
		
		@GetMapping(path="/hospitalDetails/{hospital_id}")
		public ResponseEntity<Logintemp> hosdetails(@PathVariable(value = "hospital_id") int hospital_id) {
			//int sample_id=Integer.valueOf(sample);
			Logintemp list = ps.gethospitalbyhosid(hospital_id);
			
			return new ResponseEntity<Logintemp>(list, HttpStatus.OK);
		}
			
		
		@GetMapping("/patientsort/{sort}/{username}")
		public ResponseEntity<List<patient>> getSort(@PathVariable(value = "sort") String sort,@PathVariable(value = "username") String username) {
			List<patient> list = ps.getSort(sort,username);
			return new ResponseEntity<List<patient>>(list, HttpStatus.OK);
		}
		@RequestMapping(value = "/patientfilter/{filter}/{username}", method = RequestMethod.POST,consumes="text/plain")
		public ResponseEntity<List<patient>> getFilter(@PathVariable(value = "filter") String filter,@PathVariable(value = "username") String username,@Valid @RequestBody String value) {
			List<patient> list = ps.getFilter(filter,username,value);
			return new ResponseEntity<List<patient>>(list, HttpStatus.OK);
		}
		
		//NimhansLab RestCalls
		@GetMapping(path="/patientbyExtId/{extr_id}")
		public ResponseEntity<List<patient>> getpatientByExtId(@PathVariable(value = "extr_id") String extr_id) {
		
		
			List<patient> list = ps.findByUserExtId(extr_id);
			
			return new ResponseEntity<List<patient>>(list, HttpStatus.OK);
		}
		
		      //NimhansLab RestCalls
				@GetMapping(path="/extidByNpnum")
				public String getNpnoByExtr_id(@QueryParam(value = "npnum") String npnum) {
				
				
					
					String Ext_id = ps.findNpnum(npnum);
					
					
					return Ext_id;
				}
				
				//update patienSample
				//update patienSample
				@PostMapping("/updatepatient")
				public int Updatepat(@Valid @RequestBody patient pat, UriComponentsBuilder builder) {
					
					
			                int flag = ps.updateSample(pat);
			               
			         
			                return flag;
			                
				}
				
				//Lab Test details controller starts here
				@GetMapping("/labtestDetails")
				public List<lab_test_details> getLabtestDetails() {
					 System.out.println("hello testing");
					List<lab_test_details> testlist = ps.getLabtestDetails();
					return testlist;
				}
				
				@PostMapping(path="/labtestDetailsByMatch")
				public lab_test_details labtestMatch(@Valid @RequestBody lab_test_details lab_test_details2,UriComponentsBuilder builder) {



				lab_test_details lab_test_details1 = ps.labtestMatch(lab_test_details2.getExlab_specimen(),lab_test_details2.getExlab_biopsy_type(),lab_test_details2.getExlab_fixative());


				return lab_test_details1;
				}
		
	}