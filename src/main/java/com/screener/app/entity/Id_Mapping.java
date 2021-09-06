package com.screener.app.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "id_mapping")
@EntityListeners(AuditingEntityListener.class)
public class Id_Mapping {
	@Id
	private int extr_id;
	@Column(columnDefinition="int default 0")
	private int sam_id;
	//@Column(columnDefinition="int default 0")
	private String npno;
	public int getExtr_id() {
		return extr_id;
	}
	public void setExtr_id(int extr_id) {
		this.extr_id = extr_id;
	}
	public int getSam_id() {
		return sam_id;
	}
	public void setSam_id(int sam_id) {
		this.sam_id = sam_id;
	}
	public String getNpno() {
		return npno;
	}
	public void setNpno(String npno) {
		this.npno = npno;
	}
	
}