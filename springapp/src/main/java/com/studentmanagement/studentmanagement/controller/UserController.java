package com.studentmanagement.studentmanagement.controller;

import com.studentmanagement.studentmanagement.exception.UserNotFoundException;
import com.studentmanagement.studentmanagement.model.User;
import com.studentmanagement.studentmanagement.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user")
    User newUser(@RequestBody User newUser){
        return userRepository.save(newUser);
    }

    @GetMapping("/users")
    List<User>  getAllUsers(){
      return userRepository.findAll();
    }

    @GetMapping("/user/{id}")
    User getUserById(@PathVariable Long id){
        return userRepository.findById(id)
                .orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/user/{id}")
    User updateUser (@RequestBody User newUser,@PathVariable Long id){
        return userRepository.findById(id)
                .map(user ->{
                    user.setName(newUser.getName());
                    user.setGender(newUser.getGender());
                    user.setDob(newUser.getDob());
                    user.setFathername(newUser.getFathername());
                    user.setMothername(newUser.getMothername());
                    user.setEmail(newUser.getEmail());
                    user.setAddress(newUser.getAddress());
                    user.setMobilenumber(newUser.getMobilenumber());
                    user.setCourse(newUser.getCourse());
                    user.setCity(newUser.getCity());
                    user.setState(newUser.getState());
                    user.setXIIgrade(newUser.getXIIgrade());
                    user.setXgrade(newUser.getXgrade());
                    return userRepository.save(user);

                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @DeleteMapping("/user/{id}")
    String deteleUser (@PathVariable Long id ){
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "user with id "+id+" has been deleted successfully";
    }

}
