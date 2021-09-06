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
import com.screener.app.services.inotificationService;

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
	public class notificationController {
		@Autowired
		private inotificationService ns;
		
		
		@GetMapping("/notification/{hospitalid}/{sample_id}")
		public List<notification> getNotification(@PathVariable(value = "hospitalid") int hospitalid, @PathVariable(value = "sample_id") int sample_id) {
			
			List<notification> notification1 = ns.getNotification(hospitalid,sample_id);
			//return new ResponseEntity<List<login>>(list, HttpStatus.OK);
			return notification1;
		}
		
		@GetMapping("/allnotification/{portal_flag}/{hospital_id}")
		public List<pat_notification> getAllNotification(@PathVariable(value = "portal_flag") int portal_flag, @PathVariable(value = "hospital_id") int hospital_id) {
			
			List<pat_notification> notification1 = ns.getAllNotification(portal_flag,hospital_id);
			//return new ResponseEntity<List<login>>(list, HttpStatus.OK);
			return notification1;
		}
		
		@GetMapping("/notificationscount/{portal_flag}")
		public int getUnreadNotificationCount(@PathVariable(value = "portal_flag") int portal_flag) {
			
			int notification1 = ns.getUnreadNotificationCount(portal_flag);
			//return new ResponseEntity<List<login>>(list, HttpStatus.OK);getUnreadNotificationCountExt
			return notification1;
		}
		
		
		@GetMapping("/notificationscount/{portal_flag}/{hospital_id}")
		public int getUnreadNotificationCount(@PathVariable(value = "portal_flag") int portal_flag,@PathVariable(value = "hospital_id") int hospital_id) {
			
			int notification1 = ns.getUnreadNotificationCountExt(portal_flag,hospital_id);
			//return new ResponseEntity<List<login>>(list, HttpStatus.OK);
			return notification1;
		}
		
		
		@GetMapping("/updateReadNotification/{notification_id}")
		public int updateReadNotification(@PathVariable(value = "notification_id") int notification_id) {
			
			int notification1 = ns.updateReadNotification(notification_id);
			return notification1;
		}
		
		@PostMapping("/addNotification")
		public String addNotification(@Valid @RequestBody notification notificationObj, UriComponentsBuilder builder) {
			
			System.out.println("firstStep1--"+notificationObj);
                int flag = ns.addNotification(notificationObj);
                
//	               
//	                if (flag != true) {
//	        	    
//	                return "false";
//	                }
//	                HttpHeaders headers = new HttpHeaders();
//	                headers.setLocation(builder.path("/patient/{id}").buildAndExpand(pat.getSample_id()).toUri());
	                return "true";
	                
		}
		
		@GetMapping("/allnotification/{portal_flag}")
		public List<notification> getAllNotification1(@PathVariable(value = "portal_flag") int portal_flag) {
			
			List<notification> notification1 = ns.getAllHospitalNotification(portal_flag);
			//return new ResponseEntity<List<login>>(list, HttpStatus.OK);
			return notification1;
		}
		
		
		
	
	}