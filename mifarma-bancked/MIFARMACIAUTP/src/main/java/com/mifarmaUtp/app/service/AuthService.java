package com.mifarmaUtp.app.service;

import org.springframework.stereotype.Service;

@Service

public class AuthService {

public boolean authenticate(String username, String password) {
	
	if("admin".equals(username) && "password".equals(password)) {
		return true;
	}
	return false;
}

}
