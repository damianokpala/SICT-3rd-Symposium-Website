<?php
// index.php

// Include necessary files
require_once 'includes/db.php';

// Define API endpoints
$endpoint = isset($_GET['endpoint']) ? $_GET['endpoint'] : '';

switch ($endpoint) {
    case 'signup':
        require_once 'api/signup.php';
        break;
    case 'login':
        require_once 'api/login.php';
        break;
    default:
        // Handle invalid endpoint
        http_response_code(404);
        echo json_encode(array("message" => "Endpoint not found"));
}
?>
