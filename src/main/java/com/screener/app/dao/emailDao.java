package com.screener.app.dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;
import java.util.Properties;

import javax.activation.DataHandler;
import javax.activation.DataSource;
import javax.activation.FileDataSource;
import javax.mail.Authenticator;
import javax.mail.Authenticator;
import javax.mail.BodyPart;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.validation.Valid;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import  com.screener.app.entity.*;

@Transactional
@Repository
public class emailDao {
	@PersistenceContext	
	private EntityManager entityManager;	
	/*@Override
	public login getArticleById(int ) {
		return entityManager.find(Article.class, articleId);
	}*/
	public void sendEmail(String dest, String subject, String body) {
		 ////System.out.println("hello its working"+dest+"    --- "+subject+" --"+body);
		 //String d_password = "useforreminders";
		 //String d_port = "587";
		 
		 //GMAIL SMTP
		 //String d_email = "nimhansneuropathology@gmail.com";
		
		 String d_email = "neuropathology2008@gmail.com";
		 String d_host = "smtp.gmail.com";
		 String d_port = "465";
		 //String d_port = "587";
		   
		 // added this since JDK 11.0.11 onwards seems to require TLSv1.2
		 // https://stackoverflow.com/questions/67899129/postfix-and-openjdk-11-no-appropriate-protocol-protocol-is-disabled-or-cipher
		 System.setProperty("mail.smtp.ssl.protocols", "TLSv1.2");

		 Properties props = new Properties();

		 props.put("mail.smtp.user", d_email);
		 props.put("mail.smtp.host", d_host);
		 props.put("mail.smtp.port", d_port);
		 props.put("mail.smtp.starttls.enable", "true");
		 props.put("mail.smtp.auth", "true");
		 props.put("mail.smtp.socketFactory.port", d_port);
		 props.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
		 props.put("mail.smtp.socketFactory.fallback", "false");
		 
		 
		 SecurityManager security = System.getSecurityManager();
		 
		 try {

		  Authenticator auth = new SMTPAuthenticator();
		  Session session = Session.getInstance(props, auth);
		  MimeMessage msg = new MimeMessage(session);
		  msg.setContent(body, "text/html; charset=utf-8");
		  msg.setSubject(subject);
		  msg.setFrom(new InternetAddress(d_email));
		  msg.addRecipient(Message.RecipientType.TO, new InternetAddress(dest));
		  Transport.send(msg);
		  //System.out.println("Mail Sent Sucessfully");

		 } catch (Exception e) {
		  e.printStackTrace();
		  ////System.out.println("Mail Sent faild"+e);
		 }
		}

		class SMTPAuthenticator extends javax.mail.Authenticator {

		 public PasswordAuthentication getPasswordAuthentication() {
		  //String d_email = "nimhansneuropathology@gmail.com";
		 
			String d_email = "neuropathology2008@gmail.com";
			 
		
		  //String d_password = "2008neuropat";
		  String d_password = "sgmqdmozfxjwrrgm";
		  
		  return new PasswordAuthentication(d_email, d_password);
		 }
		}



		

		

} 