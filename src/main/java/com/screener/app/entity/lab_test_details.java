package com.screener.app.entity;

import javax.persistence.*;
//import javax.validation.constraints.NotBlank;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.sun.jmx.snmp.Timestamp;


@Entity
@Table(name = "lab_test_details")
@EntityListeners(AuditingEntityListener.class)
public class lab_test_details {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int lab_test_details_id;
	private String exlab_specimen;
	private String exlab_biopsy_type;	
	private String exlab_fixative;	
	private String test_name;	
	private String inlab_specimen;	
	private String inlab_biopsy_type;
	private String inlab_fixative;	
	private int charges_pvt_hosp;
	private int charges_govt_hosp;
	
	@Column(columnDefinition="TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	private String created_at;
	
	
	public String getCreated_at() {
		return created_at;
	}
	public void setCreated_at(String created_at) {
		this.created_at = created_at;
	}
	
	public int getLab_test_details_id() {
		return lab_test_details_id;
	}
	public void setLab_test_details_id(int lab_test_details_id) {
		this.lab_test_details_id = lab_test_details_id;
	}
	public String getExlab_specimen() {
		return exlab_specimen;
	}
	public void setExlab_specimen(String exlab_specimen) {
		this.exlab_specimen = exlab_specimen;
	}
	public String getExlab_biopsy_type() {
		return exlab_biopsy_type;
	}
	public void setExlab_biopsy_type(String exlab_biopsy_type) {
		this.exlab_biopsy_type = exlab_biopsy_type;
	}
	public String getExlab_fixative() {
		return exlab_fixative;
	}
	public void setExlab_fixative(String exlab_fixative) {
		this.exlab_fixative = exlab_fixative;
	}
	public String getTest_name() {
		return test_name;
	}
	public void setTest_name(String test_name) {
		this.test_name = test_name;
	}
	public String getInlab_specimen() {
		return inlab_specimen;
	}
	public void setInlab_specimen(String inlab_specimen) {
		this.inlab_specimen = inlab_specimen;
	}
	public String getInlab_biopsy_type() {
		return inlab_biopsy_type;
	}
	public void setInlab_biopsy_type(String inlab_biopsy_type) {
		this.inlab_biopsy_type = inlab_biopsy_type;
	}
	public String getInlab_fixative() {
		return inlab_fixative;
	}
	public void setInlab_fixative(String inlab_fixative) {
		this.inlab_fixative = inlab_fixative;
	}
	public int getCharges_pvt_hosp() {
		return charges_pvt_hosp;
	}
	public void setCharges_pvt_hosp(int charges_pvt_hosp) {
		this.charges_pvt_hosp = charges_pvt_hosp;
	}
	public int getCharges_govt_hosp() {
		return charges_govt_hosp;
	}
	public void setCharges_govt_hosp(int charges_govt_hosp) {
		this.charges_govt_hosp = charges_govt_hosp;
	}
	
	
}