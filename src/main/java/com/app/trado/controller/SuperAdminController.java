package com.app.trado.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/superadmin")
public class SuperAdminController {
    @GetMapping("/inicio")
    public String viewInicio() {
        return "SuperAdmin/inicio-SAdmin";
    }

    @GetMapping("/dashboard")
    public String viewDashboard() {
        return "SuperAdmin/dashboard-SAdmin";
    }
    @GetMapping("/ayuda")
    public String viewAyuda() {
        return "SuperAdmin/ayuda-SAdmin";
    }
}
