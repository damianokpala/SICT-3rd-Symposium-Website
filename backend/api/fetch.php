<?php
// backend/api/fetch.php

// Include necessary files (replace '../includes/db.php' with your database connection)
require_once '../includes/db.php';


// Allow requests from any origin (replace * with your frontend domain if in production)
header("Access-Control-Allow-Origin: *");

// Allow the following HTTP methods
header("Access-Control-Allow-Methods: POST");

// Allow the following headers
header("Access-Control-Allow-Headers: Content-Type");

// Fetch data from the database
$sql = "SELECT * FROM my_table"; // Replace 'my_table' with your actual table name
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $data = array();

    // Fetch and format the result set as an associative array
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    // Return data as JSON response
    header('Content-Type: application/json');
    echo json_encode($data);
} else {
    echo json_encode(array("message" => "No records found"));
}

$conn->close();
?>
