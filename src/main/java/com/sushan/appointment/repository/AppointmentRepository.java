package com.sushan.appointment.repository;

import com.sushan.appointment.domain.Appointment;
import org.springframework.boot.autoconfigure.data.jpa.JpaRepositoriesAutoConfiguration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by trauma_sushan on 3/14/2018.
 */
@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Integer>{
    public List<Appointment> findByDescription(String str);

    @Query("select a from Appointment a where a.description like ?1")
    public List<Appointment> searchByDescription(String description);
}
