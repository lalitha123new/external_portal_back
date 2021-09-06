package com.screener.app.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.screener.app.entity.Id_Mapping;
import com.screener.app.entity.login;
import com.screener.app.entity.patient;
import com.screener.app.services.IpatientService;

@EnableAutoConfiguration
@RestController

@CrossOrigin(origins="*",allowedHeaders="*")
public class NimhansController {
	@Autowired
	private IpatientService ps;
	
	
	//get details given external_id
	@GetMapping(path="/nimhans/getpatbyext/{extr_id}")
	public ResponseEntity<patient> getpatientBytransId(@PathVariable(value = "extr_id") int extr_id) {
		//int sample_id=Integer.valueOf(sample);
		System.out.println("cpming here");
		
		patient list1 = ps.getpatientBytransId(extr_id);
		return new ResponseEntity<patient>(list1, HttpStatus.OK);
	}
	
	//get external id given npno(for lab )
	@GetMapping(path="/nimhans/extbynpno/{npno}")
	public ResponseEntity<Integer> getextridBynpno(@PathVariable(value = "npno") int npno) {
		//int sample_id=Integer.valueOf(sample);
		int list = ps.getExtridByNpno(npno);
		return new ResponseEntity<Integer>(list, HttpStatus.OK);
	}
	
	//set sample id given external_id
	@PostMapping(path="/nimhans/setsamid/{extr_id}",consumes="text/plain")
	public ResponseEntity<Integer> setSampleId(@PathVariable(value = "extr_id") int extr_id,@Valid @RequestBody String samid) {
		//int sample_id=Integer.valueOf(sample);
		System.out.println("setsamid");
		int sam_id=Integer.parseInt(samid);
		int list = ps.setSampleId(extr_id,sam_id);
		return new ResponseEntity<Integer>(list, HttpStatus.OK);
	}
	
	
	//to get list of hospitals
	@GetMapping("/allhospitals")
	public ResponseEntity<List<login>> getAllHosList() {
		List<login> list = ps.getAllhospitallist();
		return new ResponseEntity<List<login>>(list, HttpStatus.OK);
	}
	
	  //toUpdateHospital by hospital id
	    @PostMapping("/hospitals/{hospital_id}")
		public ResponseEntity<List<login>> getupdateHospital(@PathVariable(value = "hospital_id") int hospital_id) {
			List<login> list = ps.getHospitallist(hospital_id);
			return new ResponseEntity<List<login>>(list, HttpStatus.OK);
		}
	
	


}