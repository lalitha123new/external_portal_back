package com.screener.app.entity;

import java.util.List;

import javax.persistence.*;
//import javax.validation.constraints.NotBlank;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "au_patient")
@EntityListeners(AuditingEntityListener.class)
public class au_patient {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int au_patient_id;
	private String status;
	private String au_np_no;
	private String au_pat_name;
	private int au_pat_age;	
	private String au_pat_gender;
	private String au_pat_email;
	
	private String au_pat_phno;
	
	
	
	private String au_doctor_email_id;
	private String au_doctor_phone_no;
	private String au_hosp_ref_no;
	private String au_referred_by;
	private String au_clinic_history;
	private String au_dd_no;
	private String type_of_sample;
	private String test_required;
	private String au_amount;
	@Column(columnDefinition="TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	private String date_of_sample;
	private int hospitalid;
	
	//new fields
	private String au_sample_image_url;
	private String au_remarks;
	
	public String getAu_sample_image_url() {
		return au_sample_image_url;
	}
	public void setAu_sample_image_url(String au_sample_image_url) {
		this.au_sample_image_url = au_sample_image_url;
	}
	public String getAu_remarks() {
		return au_remarks;
	}
	public void setAu_remarks(String au_remarks) {
		this.au_remarks = au_remarks;
	}
	
	
	public String getAu_pat_email() {
		return au_pat_email;
	}
	public void setAu_pat_email(String au_pat_email) {
		this.au_pat_email = au_pat_email;
	}
	public String getAu_pat_phno() {
		return au_pat_phno;
	}
	public void setAu_pat_phno(String au_pat_phno) {
		this.au_pat_phno = au_pat_phno;
	}
    
	public int getAu_patient_id() {
		return au_patient_id;
	}
	public void setAu_patient_id(int au_patient_id) {
		this.au_patient_id = au_patient_id;
	}
	public String getAu_pat_name() {
		return au_pat_name;
	}
	public void setAu_pat_name(String au_pat_name) {
		this.au_pat_name = au_pat_name;
	}
	public int getAu_pat_age() {
		return au_pat_age;
	}
	public void setAu_pat_age(int au_pat_age) {
		this.au_pat_age = au_pat_age;
	}
	public String getAu_pat_gender() {
		return au_pat_gender;
	}
	public void setAu_pat_gender(String au_pat_gender) {
		this.au_pat_gender = au_pat_gender;
	}
	
	public String getAu_doctor_email_id() {
		return au_doctor_email_id;
	}
	public void setAu_doctor_email_id(String au_doctor_email_id) {
		this.au_doctor_email_id = au_doctor_email_id;
	}
	public String getAu_doctor_phone_no() {
		return au_doctor_phone_no;
	}
	public void setAu_doctor_phone_no(String au_doctor_phone_no) {
		this.au_doctor_phone_no = au_doctor_phone_no;
	}
	public String getAu_hosp_ref_no() {
		return au_hosp_ref_no;
	}
	public void setAu_hosp_ref_no(String au_hosp_ref_no) {
		this.au_hosp_ref_no = au_hosp_ref_no;
	}
	public String getAu_referred_by() {
		return au_referred_by;
	}
	public void setAu_referred_by(String au_referred_by) {
		this.au_referred_by = au_referred_by;
	}
	public String getAu_clinic_history() {
		return au_clinic_history;
	}
	public void setAu_clinic_history(String au_clinic_history) {
		this.au_clinic_history = au_clinic_history;
	}
	public String getAu_dd_no() {
		return au_dd_no;
	}
	public void setAu_dd_no(String au_dd_no) {
		this.au_dd_no = au_dd_no;
	}
	public String getType_of_sample() {
		return type_of_sample;
	}
	public void setType_of_sample(String type_of_sample) {
		this.type_of_sample = type_of_sample;
	}
	public String getTest_required() {
		return test_required;
	}
	public void setTest_required(String test_required) {
		this.test_required = test_required;
	}
	public String getAu_amount() {
		return au_amount;
	}
	public void setAu_amount(String au_amount) {
		this.au_amount = au_amount;
	}
	public String getDate_of_sample() {
		return date_of_sample;
	}
	public void setDate_of_sample(String date_of_sample) {
		this.date_of_sample = date_of_sample;
	}
	public int getHospitalid() {
		return hospitalid;
	}
	public void setHospitalid(int hospitalid) {
		this.hospitalid = hospitalid;
	}
	
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
	public String getAu_np_no() {
		return au_np_no;
	}
	public void setAu_np_no(String au_np_no) {
		this.au_np_no = au_np_no;
	}

	
}
