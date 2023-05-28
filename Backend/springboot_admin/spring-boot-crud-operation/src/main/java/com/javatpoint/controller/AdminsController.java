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
import com.javatpoint.model.Admins;  
import com.javatpoint.service.AdminsService;  
//mark class as Controller 
@CrossOrigin(origins = "http://localhost:3000")
@RestController  
public class AdminsController   
{  
//autowire the AdminsService class  
@Autowired  
AdminsService adminsService;  
//creating a get mapping that retrieves all the admins detail from the database   
@GetMapping("/admin")  
private List<Admins> getAllAdmins()   
{  
return adminsService.getAllAdmins();  
}  
//creating a get mapping that retrieves the detail of a specific admin  
@GetMapping("/admin/{adminid}")  
private Admins getAdmins(@PathVariable("adminid") int adminid)   
{  
return adminsService.getAdminsById(adminid);  
}  
//creating a delete mapping that deletes a specified admin  
@DeleteMapping("/admin")  
private void deleteAdmin(@PathVariable("adminid") int adminid)   
{  
adminsService.delete(adminid);  
}  
//creating post mapping that post the admin detail in the database  
@PostMapping("/admins")  
private int saveAdmin(@RequestBody Admins admins)   
{  
adminsService.saveOrUpdate(admins);  
return admins.getAdminid();  
}  
//creating put mapping that updates the admin detail   
@PutMapping("/admins")  
private Admins update(@RequestBody Admins admins)   
{  
adminsService.saveOrUpdate(admins);  
return admins;  
} 

}  
