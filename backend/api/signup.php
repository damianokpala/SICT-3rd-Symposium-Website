<?php
// backend/api/signup.php

// Include necessary files
require_once '../includes/db.php';

// Allow requests from any origin (replace * with your frontend domain if in production)
header("Access-Control-Allow-Origin: *");

// Allow the following HTTP methods
header("Access-Control-Allow-Methods: POST");

// Allow the following headers
header("Access-Control-Allow-Headers: Content-Type");

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the input data from the request
    $inputJSON = file_get_contents('php://input');
    $input = json_decode($inputJSON, true); // Decode JSON data into associative array

    // Debug: Output the input data for troubleshooting
    echo '<pre>';
    print_r($input);
    echo "</pre>";

    // Extract data from input
    $fullname = trim($input['fullname'] ?? '');
    $email = trim($input['email'] ?? '');
    $contact = trim($input['contact'] ?? '');

    // Insert data into database
    if (!empty($fullname) && !empty($email) && !empty($contact)) {
        $sql = "INSERT INTO my_table (fullname, email, contact) VALUES ('$fullname', '$email', '$contact')";
        
        if ($conn->query($sql) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    } else {
        echo "Error: Incomplete data received";
    }

    // Close database connection
    $conn->close();
}
?>
