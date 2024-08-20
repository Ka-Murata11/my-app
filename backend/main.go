package main

import (
	"encoding/json"
	"net/http"
)

type Task struct {
	ID          string `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	DueDate     string `json:"dueDate"`
	IsCompleted bool   `json:"isCompleted"`
}

var tasks = []Task{
	{ID: "1", Title: "Task 1", Description: "Description 1", DueDate: "2022-01-01", IsCompleted: false},
	{ID: "2", Title: "Task 2", Description: "Description 2", DueDate: "2022-01-02", IsCompleted: true},
}

func getTasks(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(tasks)
}

func main() {
	http.HandleFunc("/tasks", getTasks)
	http.ListenAndServe(":8080", nil)
}
