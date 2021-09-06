package com.screener.app.dao;

//import java.io.*;
import java.security.Key;
import  com.screener.app.entity.*;


import javax.crypto.Cipher;

import javax.crypto.spec.SecretKeySpec;
import java.util.Base64;

//import sun.misc.BASE64Decoder;

//import sun.misc.BASE64Encoder;


public class passencryption
{	
	//private static final String ALGO = "AES";

    private byte keyValue[];
    
    public passencryption(String key)
    {
        keyValue = key.getBytes();
    }

    public String encrypt(String Data)
        throws Exception
    {
        Key key = generateKey();
        Cipher c = Cipher.getInstance("AES");
        c.init(1, key);
        byte encVal[] = c.doFinal(Data.getBytes());
      
        Base64.Encoder encoder = Base64.getEncoder();
        String encryptedValue = encoder.encodeToString(encVal);
        return encryptedValue;
    }

    private Key generateKey() throws Exception        
    {   Key key = new SecretKeySpec(keyValue, "AES");
    	
        return key;
    }
   
   /*private String encrypt(String pass)
   {
    try
    {	System.out.println("inside encyprt");
    	//System.out.println(lg.getPassword());
    	//passencryption aes = new passencryption("bhavisjbfweauioe");
   
    	String encrypted = this.encrypt(pass);
    	System.out.println("encrypted msg is" + encrypted);
    	return encrypted;
    }
    catch(Exception e)
    {
    	System.out.println(e);
    	return "error";
    }
    }*/
  

}
          