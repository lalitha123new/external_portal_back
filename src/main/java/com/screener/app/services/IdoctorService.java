package com.screener.app.services;

import  com.screener.app.entity.*;
import java.util.List;
public interface IdoctorService {
     List<doctor> getAlldoctors();
    
     boolean adddoctor(doctor doc);
     List<String> getAllhos();
    
} 