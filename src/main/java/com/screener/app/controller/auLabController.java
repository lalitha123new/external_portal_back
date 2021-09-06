package com.screener.app.controller;
import com.screener.app.entity.*;
import com.screener.app.services.IaulabService;


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

public class auLabController {
		
		@Autowired
		private IaulabService auls;
		
		@PostMapping("/statuschangeau/")
		public int addAunumber(@Valid @RequestBody au_patient stat, UriComponentsBuilder builder) {
			System.out.println("stat-"+stat);
			
			return auls.changeStatusau(stat);
	                
		}
}
