package com.screener.app.controller;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import com.screener.app.payload.*;
import com.screener.app.property.*;
import com.screener.app.services.FileStorageService;

@RestController

@CrossOrigin(origins = {"*"},allowedHeaders="*")
public class FileController {

    private static final Logger logger = LoggerFactory.getLogger(FileController.class);

    @Autowired
    private FileStorageService fileStorageService;

    @PostMapping("/uploadFile")
    public UploadFileResponse uploadFile(@RequestParam("file") MultipartFile[] file1,@RequestParam("checkImgSrc") int checkImgSrc) {
    	
    	
        String fileName = fileStorageService.storeFile(file1,checkImgSrc);
        

        MultipartFile file= file1[0];
		   
        System.out.println("fileName--"+fileName);

        String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/downloadFile/")
                .path(fileName)
                .toUriString();
        
        System.out.println("fileDownloadUri--"+fileDownloadUri);

        return new UploadFileResponse(fileName, fileDownloadUri,
                file.getContentType(), file.getSize());
    }

    @PostMapping("/uploadMultipleFiles")
    public List<UploadFileResponse> uploadMultipleFiles(@RequestParam("files") MultipartFile[] files,@RequestParam("checkImgSrc") int checkImgSrc) {
    	
    	
    	if(checkImgSrc == 1) {
    		
    		System.out.println("checkImgSrc---froMNotification---   "+checkImgSrc);
    		uploadFile(files,checkImgSrc);
    		
    	}else if(checkImgSrc == 2){
    		
    		System.out.println("checkImgSrc---froMpatient---   "+checkImgSrc);
    		uploadFile(files,checkImgSrc);
    	}else if(checkImgSrc == 3) {
    		
    		System.out.println("checkImgSrc---froMpatient---   "+checkImgSrc);
    		uploadFile(files,checkImgSrc);
    	}
    	
    	return null;
    	
//        return Arrays.asList(files)
//                .stream()
//                .map(file -> uploadFile(file,checkImgSrc))
//                .collect(Collectors.toList());
    }

    @GetMapping("/downloadFile/{fileName:.+}")
    public ResponseEntity<Resource> downloadFile(@PathVariable String fileName, HttpServletRequest request) {
        // Load file as Resource
        Resource resource = fileStorageService.loadFileAsResource(fileName);

        // Try to determine file's content type
        String contentType = null;
        try {
            contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
        } catch (IOException ex) {
            logger.info("Could not determine file type.");
        }

        // Fallback to the default content type if type could not be determined
        if(contentType == null) {
            contentType = "application/octet-stream";
        }

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(contentType))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
                .body(resource);
    }

}