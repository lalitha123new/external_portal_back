package com.screener.app.controller;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping(value="/ExternalHospital")
@CrossOrigin(origins="*",allowedHeaders="*")
public class FileUploadController {

	public static String uploadDirectory = System.getProperty("user.dir")+"/uploads";
	StringBuilder fileNames = new StringBuilder();
	
	
	
	@RequestMapping(value="/upload",method=RequestMethod.POST)
	public String upload(@RequestParam("files") MultipartFile[] files)
	{	
	 System.out.println("helloo");
		
		//FilenameUtils.getBaseName(file.getOriginalFilename()).concat(currentDate) + "." + FilenameUtils.getExtension(file.getOriginalFilename())).toLowerCase()
		for(MultipartFile file : files)
		{
			Path fileNameAndPath = Paths.get(uploadDirectory, file.getOriginalFilename());
			fileNames.append(file.getOriginalFilename() + " ");
			System.out.println("hello--"+fileNameAndPath);
			
		
			//fileNames.append(file.getName());
			//fileNames.append(file.getOriginalFilename().replace(file.getOriginalFilename(),))
			try {
				Files.write(fileNameAndPath, file.getBytes());
				System.out.println("hello try");
			} catch (IOException e) {
				// TODO Auto-generated catch block
				System.out.println("hello catvh");
				e.printStackTrace();
			}
		}
		
		System.out.println("Successfully uploaded files " + fileNames.toString());
		System.out.println(uploadDirectory);
		
		return fileNames.toString();
	}
	
}