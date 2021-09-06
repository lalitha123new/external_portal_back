package com.screener.app.entity;

import javax.persistence.*;
//import javax.validation.constraints.NotBlank;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.sun.jmx.snmp.Timestamp;

@SuppressWarnings("restriction")
@Entity
@Table(name = "notification")
@EntityListeners(AuditingEntityListener.class)
public class notification {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int notification_id;
	private int hospitalid;
	private String notification_msg;
	private int read_flag;
	private int sample_id;
	private String np_num;
	private int portal_flag;
	private String img_url;
	private String created_at;
	
	 
	
	
	
	
	public String getCreated_at() {
		return created_at;
	}
	public void setCreated_at(String created_at) {
		this.created_at = created_at;
	}
	public String getImg_url() {
		return img_url;
	}
	public void setImg_url(String img_url) {
		this.img_url = img_url;
	}
	public int getNotification_id() {
		return notification_id;
	}
	public void setNotification_id(int notification_id) {
		this.notification_id = notification_id;
	}
	public int getHospitalid() {
		return hospitalid;
	}
	public void setHospitalid(int hospitalid) {
		this.hospitalid = hospitalid;
	}
	public String getNotification_msg() {
		return notification_msg;
	}
	public void setNotification_msg(String notification_msg) {
		this.notification_msg = notification_msg;
	}
	public int getRead_flag() {
		return read_flag;
	}
	public void setRead_flag(int read_flag) {
		this.read_flag = read_flag;
	}
	public int getSample_id() {
		return sample_id;
	}
	public void setSample_id(int sample_id) {
		this.sample_id = sample_id;
	}
	public String getNp_num() {
		return np_num;
	}
	public void setNp_num(String np_num) {
		this.np_num = np_num;
	}
	public int getPortal_flag() {
		return portal_flag;
	}
	public void setPortal_flag(int portal_flag) {
		this.portal_flag = portal_flag;
	}
	
}