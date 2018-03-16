package com.sushan.appointment.controller;

import com.sushan.appointment.domain.Appointment;
import com.sushan.appointment.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

/**
 * Created by trauma_sushan on 3/14/2018.
 */
@Controller
public class HomeController {

    @Autowired
    AppointmentService appointmentService;

    @GetMapping("/index")
    public String index(){
        return "redirect:/";
    }

    @GetMapping("/")
    public String home(){
        return "index";
    }


    @PostMapping("/createAppointment")
    public String createAppointment(Model model, Appointment appointment){
        if(appointmentService.save(appointment)!=null){
            model.addAttribute("message", "Successfully added appointment!");
        }
        return "redirect:/";
    }

}
