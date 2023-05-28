package com.javatpoint.controller;
 
import java.util.List;
  
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;  
import org.springframework.web.bind.annotation.GetMapping;  
import org.springframework.web.bind.annotation.PathVariable;  
import org.springframework.web.bind.annotation.PostMapping;  
import org.springframework.web.bind.annotation.PutMapping;  
import org.springframework.web.bind.annotation.RequestBody;  
import org.springframework.web.bind.annotation.RestController;  
import com.javatpoint.model.Packages;  
import com.javatpoint.service.PackagesService;  
//mark class as Controller 
@CrossOrigin(origins = "http://localhost:3000")
@RestController  
public class PackagesController   
{  
//autowire the PackagesService class  
@Autowired  
PackagesService packagesService;  
//creating a get mapping that retrieves all the packages detail from the database   
@GetMapping("/package")  
private List<Packages> getAllPackages()   
{  
return packagesService.getAllPackages();  
}  
//creating a get mapping that retrieves the detail of a specific package  
@GetMapping("/package/{packageid}")  
private Packages getPackages(@PathVariable("packageid") int packageid)   
{  
return packagesService.getPackagesById(packageid);  
}  
//creating a delete mapping that deletes a specified package  
@DeleteMapping("/package")  
private void deletePackage(@PathVariable("packageid") int packageid)   
{  
packagesService.delete(packageid);  
}  
//creating post mapping that post the package detail in the database  
@PostMapping("/packages")  
private int savePackage(@RequestBody Packages packages)   
{  
packagesService.saveOrUpdate(packages);  
return packages.getPackageid();  
}  
//creating put mapping that updates the package detail   
@PutMapping("/packages")  
private Packages update(@RequestBody Packages packages)   
{  
packagesService.saveOrUpdate(packages);  
return packages;  
} 

}  
