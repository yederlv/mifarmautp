package com.mifarmaUtp.app.controller;

import com.mifarmaUtp.app.Model.User;
import com.mifarmaUtp.app.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")

public class AuthController {
	
	@Autowired
    private AuthService authService;
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody User user) {
		boolean isAuthenticated = authService.authenticate(user.getUsername(), user.getPassword());
		if(isAuthenticated) {
			return ResponseEntity.ok("Login Successful");
		} else {
			return ResponseEntity.status(401).body("Credenciales invalidos");
		}
	}

}
