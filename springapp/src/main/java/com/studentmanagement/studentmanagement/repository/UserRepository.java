package com.studentmanagement.studentmanagement.repository;

import com.studentmanagement.studentmanagement.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
