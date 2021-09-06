package com.screener.app.entity;

import java.util.List;

import javax.persistence.*;
//import javax.validation.constraints.NotBlank;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "patient")
@EntityListeners(AuditingEntityListener.class)
public class patient {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int sample_id;
	

	private String extr_id;
	private String pat_name;
	private String pat_age;
	private String pat_gender;
	private String pat_phno;
	private String pat_email;
	//private String specimen;
	//private String fixative;
	private String referred_by;
	private String clinic_history;
	private String examination;
	private String status;
	private String upload;
	private String username;
	@Column(columnDefinition="TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	private String date_of_entry;
	//@Column(columnDefinition="INT DEFAULT 0")
	//private int npno;
	private String npno;
	
	private int amount;
	private String investigation;
	private String doctor_phone_no;
	private String doctor_email_id;
	private String previous_biopsy_number;
	
	private String sample_test;
	
	private String sample_image_url;
	
	
	//new columns
	private String dd_no;
	private String diagnosis;
	private String opetative_notes;
	
    private String hospitalid;
    
    
    public String getPat_phno() {
		return pat_phno;
	}
	public void setPat_phno(String pat_phno) {
		this.pat_phno = pat_phno;
	}
	public String getPat_email() {
		return pat_email;
	}
	public void setPat_email(String pat_email) {
		this.pat_email = pat_email;
	}
    
    public String getExtr_id() {
		return extr_id;
	}
	public void setExtr_id(String extr_id) {
		this.extr_id = extr_id;
	}
	
	public String getHospitalid() {
		return hospitalid;
	}
	public void setHospitalid(String hospitalid) {
		this.hospitalid = hospitalid;
	}
	
	private String 	hosp_ref_no;
	
	public String getHosp_ref_no() {
		return hosp_ref_no;
	}
	public void setHosp_ref_no(String hosp_ref_no) {
		this.hosp_ref_no = hosp_ref_no;
	}
	
	public String getDd_no() {
		return dd_no;
	}
	public void setDd_no(String dd_no) {
		this.dd_no = dd_no;
	}
	public String getDiagnosis() {
		return diagnosis;
	}
	public void setDiagnosis(String diagnosis) {
		this.diagnosis = diagnosis;
	}
	public String getOpetative_notes() {
		return opetative_notes;
	}
	public void setOpetative_notes(String opetative_notes) {
		this.opetative_notes = opetative_notes;
	}
	
	//private List<patient_test> test;
	
	//@Column(table = "patient_test")
	//private int quantity;
	
	
	public String getSample_image_url() {
		return sample_image_url;
	}
	public void setSample_image_url(String sample_image_url) {
		this.sample_image_url = sample_image_url;
	}
	
	public String getSample_test() {
		return sample_test;
	}
	public void setSample_test(String sample_test) {
		this.sample_test = sample_test;
	}
	
	public String getDate_of_entry() {
		return date_of_entry;
	}
	public void setDate_of_entry(String date_of_entry) {
		this.date_of_entry = date_of_entry;
	}
	public String getNpno() {
		return npno;
	}
	public void setNpno(String npno) {
		this.npno = npno;
	}
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
//	public String getFixative() {
//		return fixative;
//	}
//	public void setFixative(String fixative) {
//		this.fixative = fixative;
//	}
	
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getUpload() {
		return upload;
	}
	public void setUpload(String upload) {
		this.upload = upload;
	}
	public int getSample_id() {
		return sample_id;
	}
	public void setSample_id(int sample_id) {
		this.sample_id = sample_id;
	}
	public String getPat_name() {
		return pat_name;
	}
	public void setPat_name(String pat_name) {
		this.pat_name = pat_name;
	}
	public String getPat_age() {
		return pat_age;
	}
	public void setPat_age(String pat_age) {
		this.pat_age = pat_age;
	}
	public String getPat_gender() {
		return pat_gender;
	}
	public void setPat_gender(String pat_gender) {
		this.pat_gender = pat_gender;
	}
//	public String getSpecimen() {
//		return specimen;
//	}
//	public void setSpecimen(String specimen) {
//		this.specimen = specimen;
//	}
	public String getReferred_by() {
		return referred_by;
	}
	public void setReferred_by(String referred_by) {
		this.referred_by = referred_by;
	}
	public String getClinic_history() {
		return clinic_history;
	}
	public void setClinic_history(String clinic_history) {
		this.clinic_history = clinic_history;
	}
	public String getExamination() {
		return examination;
	}
	public void setExamination(String examination) {
		this.examination = examination;
	}
	public String getTransaction_id() {
		return extr_id;
	}
	public void setTransaction_id(String extr_id) {
		this.extr_id = extr_id;
	}
	
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	public String getInvestigation() {
		return investigation;
	}
	public void setInvestigation(String investigation) {
		this.investigation = investigation;
	}
	public String getDoctor_phone_no() {
		return doctor_phone_no;
	}
	public void setDoctor_phone_no(String doctor_phone_no) {
		this.doctor_phone_no = doctor_phone_no;
	}
	public String getDoctor_email_id() {
		return doctor_email_id;
	}
	public void setDoctor_email_id(String doctor_email_id) {
		this.doctor_email_id = doctor_email_id;
	}
	public String getPrevious_biopsy_number() {
		return previous_biopsy_number;
	}
	public void setPrevious_biopsy_number(String previous_biopsy_number) {
		this.previous_biopsy_number = previous_biopsy_number;
	}
	
	
	
}
