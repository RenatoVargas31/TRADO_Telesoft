package com.app.trado.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/adminzonal")
public class AdminZonalController {
    @GetMapping("/vacio")
    public String home() {
        return "AdminZonal/starter-AdminZonal";
    }

    @GetMapping("/dashboard")
    public String showDashboard() {
        return "AdminZonal/dashboard-AdminZonal";
    }

    @GetMapping("/fechasArribo")
    public String showFechasArribo() {
        return "AdminZonal/tablaFechaArribo-AdminZonal";
    }

    @GetMapping("/reposicionProductos")
    public String showReposicionProductos() {
        return "AdminZonal/tablaReposicionProductos-AdminZonal";
    }

}
