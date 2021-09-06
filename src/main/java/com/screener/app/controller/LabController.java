package com.screener.app.controller;

import com.screener.app.controller.*;
import com.screener.app.entity.*;
import com.screener.app.services.IlabService;

import java.util.List;

import javax.validation.Valid;
import javax.ws.rs.QueryParam;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

	@EnableAutoConfiguration
	@RestController
	
	@CrossOrigin(origins="*",allowedHeaders="*")
	public class LabController {
		@Autowired
		private IlabService ls;
		
		
		
		
		
		
//		@RequestMapping(value = "/statuschange/{extr_id}", method = RequestMethod.POST)
//		public int check(@PathVariable(value = "extr_id") int extr_id,@Valid @RequestBody status stat)
//		{
//			System.out.println("stat-!-! "+stat);
//			return ls.changeStatus(extr_id,stat);
//		}
		
		
//		@PostMapping("/statuschange/{extr_id}")
//		public int addpat(@PathVariable(value = "extr_id") int extr_id,@RequestBody status stat) {
//			
//			return ls.changeStatus(extr_id,stat);
//	                
//		}
		
		
		@PostMapping("/statuschange/")
		public int addNpnumber(@Valid @RequestBody status stat, UriComponentsBuilder builder) {
			System.out.println("stat-"+stat);
			
			return ls.changeStatus(stat);
	                
		}
		
		@RequestMapping(value ="/statuschangebyNpnum/{np_no}" ,method = RequestMethod.POST,consumes="text/plain")
		public int updateStatus(@PathVariable(value = "np_no") String np_no, @Valid @RequestBody String status) {
			
			return ls.changeStatusByNp_Num(np_no,status);
			//return 0;
	                
		}
		
		
		@GetMapping("/getEmailBynpnumber")
		public String getLabtestDetails(@QueryParam(value = "np_no") String np_no) {
			System.out.println("hello testing");
			String email = ls.getEmailBynpnumber(np_no);
			return email;
		}
		
		
	}