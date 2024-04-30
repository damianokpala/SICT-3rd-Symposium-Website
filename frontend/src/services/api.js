// frontend/src/services/api.js
const apiUrl = "http://localhost/backend/api/";

export const fetchUsers = async () => {
  try {
    const response = await fetch(apiUrl + "users.php");
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching users:", error);
    return null;
  }
};
