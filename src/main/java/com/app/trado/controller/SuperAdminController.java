package com.app.trado.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SuperAdminController {
    @GetMapping("/superadmin")
    public String home() {
        return "SuperAdmin/starter-SuperAdmin";
    }

    @GetMapping("/tabla")
    public String tabla() {
        return "SuperAdmin/prueba";}
}
