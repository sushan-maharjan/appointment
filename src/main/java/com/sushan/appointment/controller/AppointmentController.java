package com.sushan.appointment.controller;

import com.sushan.appointment.domain.Appointment;
import com.sushan.appointment.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

/**
 * Created by trauma_sushan on 3/14/2018.
 */

@RestController
public class AppointmentController {

    @Autowired
    AppointmentService appointmentService;

  /*  @GetMapping("/")
    public String home(){
        return "index";
    }*/

    @GetMapping("/appointment")
    public List<Appointment> getAppointments(String str){
        if(str!=(null) && str.trim().length()>0){
           return appointmentService.searchByDescription(str);
        }
        return appointmentService.findAll();
    }

    @PostMapping("/appointment")
    public void create(@RequestBody Appointment appointment){
        appointmentService.save(appointment);
    }
}
