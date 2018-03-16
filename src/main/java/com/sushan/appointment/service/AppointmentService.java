package com.sushan.appointment.service;

import com.sushan.appointment.domain.Appointment;
import com.sushan.appointment.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by trauma_sushan on 3/14/2018.
 */
@Service
public class AppointmentService {

    @Autowired
    AppointmentRepository appointmentRepository;

    public void save(Appointment appointment){
        appointmentRepository.save(appointment);
    }

    public void update(Integer id, Appointment appointment){
        appointmentRepository.save(appointment);
    }

    public List<Appointment> findAll(){
        return appointmentRepository.findAll();
    }

    public List<Appointment> findByDescription(String description) {
        return appointmentRepository.findByDescription(description);
    }

    public List<Appointment>  searchByDescription(String description) {
        return appointmentRepository.searchByDescription("%"+description+"%");
    }

}
