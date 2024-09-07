package com.app.trado.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AdminZonalController {
    @GetMapping("/adminzonal")
    public String home() {
        return "AdminZonal/starter-AdminZonal";
    }
}
