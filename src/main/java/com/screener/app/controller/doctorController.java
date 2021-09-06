package com.screener.app.controller;

	import java.util.*;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.screener.app.exception.*;
import com.screener.app.entity.*;
import com.screener.app.services.IdoctorService;

import org.springframework.web.util.UriComponentsBuilder;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
	import org.springframework.beans.factory.annotation.Autowired;
//	import org.springframework.web.bind.annotation.PathVariable;
//	import org.springframework.web.bind.annotation.RequestBody;
	import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
//	import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;


	@RestController
	
	@CrossOrigin(origins="*",allowedHeaders="*")
	public class doctorController {
		@Autowired
		private IdoctorService ds;
		
		
		@GetMapping("/doctor")
		public ResponseEntity<List<doctor>> getAlldocs() {
			List<doctor> list = ds.getAlldoctors();
			return new ResponseEntity<List<doctor>>(list, HttpStatus.OK);
		}
		
		@GetMapping("/doctor/hosname")
		public List<String> getAllhosnames() {
			List<String> list = ds.getAllhos();
			return list;
		}
		
		
		
		@PostMapping("/doctor")
		public ResponseEntity<Void> adddoc(@Valid @RequestBody doctor doc, UriComponentsBuilder builder) {
	                boolean flag = ds.adddoctor(doc);
	           
	                if (flag == false) {
	        	    return new ResponseEntity<Void>(HttpStatus.CONFLICT);
	                }
	                HttpHeaders headers = new HttpHeaders();
	                headers.setLocation(builder.path("/doctor/{id}").buildAndExpand(doc.getDocid()).toUri());
	                return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
		}
		

	}