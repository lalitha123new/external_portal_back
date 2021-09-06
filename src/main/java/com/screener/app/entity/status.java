package com.screener.app.entity;

public class status {
	private String npno;
	private String status;
	private String ext_trc_id;
	
	
	public String getExt_trc_id() {
		return ext_trc_id;
	}
	public void setExt_trc_id(String ext_trc_id) {
		this.ext_trc_id = ext_trc_id;
	}
	public String getNpno() {
		return npno;
	}
	public void setNpno(String npno) {
		this.npno = npno;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
//public status() {
//		
//	}
//	
//	public status(int npno, String status) {
//		super();
//		this.npno = npno;
//		this.status = status;
//		
//	}

}