package com.screener.app.dao;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;

public class SHA256 {
	public String hash(String passwordToHash) throws NoSuchAlgorithmException {
		byte[] salt = getSalt();
		String securePassword = get_SHA_256_SecurePassword(passwordToHash, salt);
		System.out.println(securePassword);
		return securePassword;

	}

	
	 public static void main(String[] args) throws NoSuchAlgorithmException {
	 String passwordToHash = "pragya"; byte[] salt = getSalt();
	 
	 
	 
	 String securePassword = get_SHA_256_SecurePassword(passwordToHash, salt);
	 System.out.println(securePassword);
	 
	 
	  }
	 

	private static String get_SHA_256_SecurePassword(String passwordToHash, byte[] salt) {

		String generatedPassword = null;
		try {
			MessageDigest md = MessageDigest.getInstance("SHA-256");
			md.update(salt);
			byte[] bytes = md.digest(passwordToHash.getBytes());
			StringBuilder sb = new StringBuilder();
			for (int i = 0; i < bytes.length; i++) {
				sb.append(Integer.toString((bytes[i] & 0xff) + 0x100, 16).substring(1));
			}
			generatedPassword = sb.toString();
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		}
		return generatedPassword;
	}

	private static byte[] getSalt() throws NoSuchAlgorithmException {
		 String saltkey = "PveFT7isDjGYFTaYhc2Fzw=$";
		 byte[] salt = saltkey.getBytes();
		/*
		 * SecureRandom sr = SecureRandom.getInstance("SHA1PRNG"); byte[] salt = new
		 * byte[16]; sr.nextBytes(salt);
		 */
		return salt;
	}
}