package com.thanos.spring.boot.csv.Learn.Controller;

import com.thanos.spring.boot.csv.Learn.Service.ExcelToCsvService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@RestController
@RequestMapping
@CrossOrigin("*")
public class ExcelToCsvController {

    @Autowired
    private ExcelToCsvService excelToCsvService;

    @PostMapping
    public @ResponseBody File uploadExcelFile(@RequestParam("file")MultipartFile file,
                                                 @RequestParam("output")String outputFileName) throws IOException {
       return  excelToCsvService.convertExcelFile(file,outputFileName);
    }

}
