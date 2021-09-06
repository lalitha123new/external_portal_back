package com.screener.app.services;


import  com.screener.app.exception.FileStorageException;
import  com.screener.app.exception.MyFileNotFoundException;
import  com.screener.app.property.FileStorageProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.ServletContext;

@Service
public class FileStorageService {

    private final Path fileStorageLocation;
    
    @Autowired
    ServletContext context;
    
    @Autowired
	private IpatientService ipatientService;
    

    @Autowired
    public FileStorageService(FileStorageProperties fileStorageProperties) {
    	// System.out.println("-fss32---"+fileStorageProperties.getUploadDir());
        this.fileStorageLocation = Paths.get(fileStorageProperties.getUploadDir())
                .toAbsolutePath().normalize();

       
		/*
		 * try { Files.createDirectories(this.fileStorageLocation); } catch (Exception
		 * ex) { throw new
		 * FileStorageException("Could not create the directory where the uploaded files will be stored."
		 * , ex); }
		 */
    }

    public String storeFile(MultipartFile[] file1,int checkImgSrc) {
    	
    	
    	 try {
    		 
    		 
    		 String org_fileName = "";
    		 
    	   for(int j=0;j<file1.length;j++) {
    		
          String extension = file1[j].getOriginalFilename().substring(file1[j].getOriginalFilename().lastIndexOf("."));
          DateFormat dateFormat = new SimpleDateFormat("yyyyMMddHHmmss");
		  Date date = new Date();
	      String fileName = j+dateFormat.format(date)+extension;
	      
	      
	      String absolutePath = context.getRealPath("/uploads/");
	      Path p3 = Paths.get(absolutePath).resolve(fileName);
	      System.out.println("absolutePath--"+absolutePath);

       
            // Check if the file's name contains invalid characters
            if(fileName.contains("..")) {
                throw new FileStorageException("Sorry! Filename contains invalid path sequence " + fileName);
            }

             
            
            Files.copy(file1[j].getInputStream(), p3, StandardCopyOption.REPLACE_EXISTING);
            
            
            org_fileName+="/uploads/"+fileName+",";
           
    		 }
    	
    	System.out.println("orgName--"+org_fileName);
    	   //updateImageURL
            ipatientService.updateImageUrl(org_fileName,checkImgSrc);
            

            return org_fileName;
        } catch (IOException ex) {
            throw new FileStorageException("Could not store file  Please try again!", ex);
        }
    	 
    	 
    	 
    }

    public Resource loadFileAsResource(String fileName) {
        try {
            Path filePath = this.fileStorageLocation.resolve(fileName).normalize();
            Resource resource = new UrlResource(filePath.toUri());
            if(resource.exists()) {
                return resource;
            } else {
                throw new MyFileNotFoundException("File not found " + fileName);
            }
        } catch (MalformedURLException ex) {
            throw new MyFileNotFoundException("File not found " + fileName, ex);
        }
    }
}