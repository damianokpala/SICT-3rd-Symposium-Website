<?php
// backend/api/users.php

// Include necessary files
require_once '../includes/db.php';

// Handle GET request to fetch user data
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Your code to fetch user data from the database
    // Example: Fetch user data from a MySQL database
    // $sql = "SELECT * FROM users";
    // $result = mysqli_query($conn, $sql);
    // $users = mysqli_fetch_all($result, MYSQLI_ASSOC);
    
    // Example response
    $users = array(
        array("id" => 1, "name" => "John"),
        array("id" => 2, "name" => "Jane")
    );

    // Return JSON response
    header('Content-Type: application/json');
    echo json_encode($users);
}
