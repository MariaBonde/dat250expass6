package com.example.servingwebcontent;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TodoController {
    @Autowired
    private final TodoRepository todoRepository;

    public TodoController(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    @GetMapping("/todos")
    public List<Todo> getTodos() {
        return (List<Todo>) todoRepository.findAll();
    }

    @PostMapping("/todos")
    public void addTodo(@RequestBody Todo todo) {
        todoRepository.save(todo);
    }

    @DeleteMapping("/todos/{id}")
    void deleteTodo(@PathVariable("id") long id) {
        todoRepository.deleteById(id);
    }

}
