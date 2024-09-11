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

    @GetMapping("/admZonalActivos")
    public String viewAdmZonalActivos() {
        return "SuperAdmin/admZonalActivos-SAdmin";
    }

    @GetMapping("/admZonalInactivos")
    public String viewAdmZonalInactivos() {
        return "SuperAdmin/admZonalInactivos-SAdmin";
    }

    @GetMapping("/agentCompraPostula")
    public String viewAgentCompraPostula() {
        return "SuperAdmin/agentCompraPostula-SAdmin";
    }

    @GetMapping("/agentCompraActivos")
    public String viewAgentCompraActivos() {
        return "SuperAdmin/agentCompraActivos-SAdmin";
    }

    @GetMapping("/agentCompraInactivos")
    public String viewAgentCompraInactivos() {
        return "SuperAdmin/agentCompraInactivos-SAdmin";
    }

    @GetMapping("/importadorSolicitud")
    public String viewImportdorSolicitud() {
        return "SuperAdmin/importadorSolicitud-SAdmin";
    }
    @GetMapping("/importadorActivos")
    public String viewImportadorActivos() {
        return "SuperAdmin/importadorActivos-SAdmin";
    }
    @GetMapping("/importadorInactivos")
    public String viewImportadorInactivos() {
        return "SuperAdmin/importadorInactivos-SAdmin";
    }
    @GetMapping("/ayuda")
    public String viewAyuda() {
        return "SuperAdmin/ayuda-SAdmin";
    }
}
