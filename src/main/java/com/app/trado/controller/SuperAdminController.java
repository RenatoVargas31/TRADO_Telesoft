package com.app.trado.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/superadmin")
public class SuperAdminController {
    @GetMapping("/vacio")
    public String home() {
        return "SuperAdmin/starter-SuperAdmin";
    }

    @GetMapping("/tabla")
    public String tabla() {return "SuperAdmin/prueba";}
}
