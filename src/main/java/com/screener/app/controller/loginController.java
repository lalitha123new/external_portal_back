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
import com.screener.app.services.IloginService;

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
import org.springframework.web.bind.annotation.RequestParam;
//	import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;


	@RestController
	
	@CrossOrigin(origins="*",allowedHeaders="*")
	public class loginController {
		@Autowired
		private IloginService ls;
		
		
		@GetMapping("/login")
		public ResponseEntity<List<login>> getAlllogins1() {
			
			System.out.println("hello");
			List<login> list = ls.getAlllogins();
			return new ResponseEntity<List<login>>(list, HttpStatus.OK);
		}
		
		
		 
		@RequestMapping(value = "/login/post", method = RequestMethod.POST)
		public int check(@Valid @RequestBody login log)
		{	
			System.out.println("hello1");
			return ls.checklogin(log);
		
		}
		
		
		@PostMapping("/login")
		public String addlogin(@Valid @RequestBody login lg, UriComponentsBuilder builder) {
	                boolean flag = ls.addlogin(lg);
	                
	                System.out.println("+++passwordddddd" + flag);
	                System.out.println("username" + lg.getUsername());
	                if (flag == false) {
	        	
	                return "already exists ";
	                
	                }
	                HttpHeaders headers = new HttpHeaders();
	                headers.setLocation(builder.path("/login/{id}").buildAndExpand(lg.getHospitalid()).toUri());
	               return "success";
	              
		}
		
		
		@PostMapping("/updatelogin/{hps_id}")
		public String updatelogin(  @Valid @RequestBody login lg,@PathVariable(value = "hps_id") int hps_id, UriComponentsBuilder builder) {
	                 ls.updatelogin(lg,hps_id);
	                
	                
	               return "success";
	              
		}
		
		@GetMapping("/updateflag/{hps_id}/{flag_type}/{flag}")
		public String updateFlag(@PathVariable(value = "hps_id") int hps_id,@PathVariable(value = "flag_type") int flag_type,@PathVariable(value = "flag") int flag) {

		System.out.println("hello"+hps_id+"  flag_type  "+flag_type+" flag "+flag);
		String str = ls.updateFlag(flag_type,flag,hps_id);
		return "working";
		}
		
		@GetMapping("/updateflagByemail/{email}")
		public String updateflagByemail(@PathVariable(value = "email") String email) {
			System.out.println("CHECKING ADMIN EMAIL PART"+email);
			String str = ls.updateflagByemail(email);
			return "working";
		}
		
		
		@GetMapping("/forgotemail/{email}")
		public String forgotemail(@PathVariable(value = "email") String email) {
			String str = ls.forgotemail(email);
			return "working";
		}
		
		//void updatepassword(String password,String email);
		@GetMapping("/updatepwd/{email}")
		public String updatepassword(@PathVariable(value = "email") String email,@RequestParam String password) {
			 ls.updatepassword(password,email);
			return "updated";
		}
	}