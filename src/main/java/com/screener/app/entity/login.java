package com.screener.app.entity;

import javax.persistence.*;
//import javax.validation.constraints.NotBlank;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "login")
@EntityListeners(AuditingEntityListener.class)
public class login {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int hospitalid;
	private String nameofhospital;
	
	private String username;
	@Column(columnDefinition = "LONGVARBINARY")
	private String password;
	private String email;
	private String contact;
	
	private String hospitalType;
	@Column(columnDefinition="TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	private String createdAt;
	
	private String hospital_address;
	
	private int verify_email_flag;
	private int review_flag;
	private int portal_flag;
	
	
	public int getVerify_email_flag() {
		return verify_email_flag;
	}
	public void setVerify_email_flag(int verify_email_flag) {
		this.verify_email_flag = verify_email_flag;
	}
	public int getReview_flag() {
		return review_flag;
	}
	public void setReview_flag(int review_flag) {
		this.review_flag = review_flag;
	}
	public int getPortal_flag() {
		return portal_flag;
	}
	public void setPortal_flag(int portal_flag) {
		this.portal_flag = portal_flag;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getContact() {
		return contact;
	}
	public void setContact(String contact) {
		this.contact = contact;
	}
	public int getHospitalid() {
		return hospitalid;
	}
	public void setHospitalid(int hospitalid) {
		this.hospitalid = hospitalid;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getNameofhospital() {
		return nameofhospital;
	}
	public void setNameofhospital(String nameofhospital) {
		this.nameofhospital = nameofhospital;
	}
	
	public String getHospitalType() {
		return hospitalType;
	}
	public void setHospitalType(String hospitalType) {
		this.hospitalType = hospitalType;
	}
	public String getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(String createdAt) {
		this.createdAt = createdAt;
	}
	
	public String getHospital_address() {
		return hospital_address;
	}
	public void setHospital_address(String hospital_address) {
		this.hospital_address = hospital_address;
	}
	
}