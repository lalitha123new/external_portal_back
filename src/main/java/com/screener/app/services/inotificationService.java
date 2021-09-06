package com.screener.app.services;

import  com.screener.app.entity.*;
import java.util.List;

public interface inotificationService { 
	
	
	List<notification> getNotification(int hospitalid, int sample_id);
	
	int getUnreadNotificationCount(int portal_flag);
	
	List<pat_notification> getAllNotification(int portal_flag,int hospital_id);
	
	int updateReadNotification(int notification_id);
	
	int addNotification(notification notification);
	
	int getUnreadNotificationCountExt(int portal_flag,int hospital_id);

	List<notification> getAllHospitalNotification(int portal_flag);
	
	
} 