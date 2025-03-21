# Notes App

A simple React application for creating, reading, editing, and deleting notes.

## Features

-   **Create Notes:** Add new notes with a text input field.
-   **Read Notes:** View all created notes.
-   **Edit Notes:** Modify existing notes.
-   **Delete Notes:** Remove notes.
-   **Navigation:** Easy navigation between different app sections using React Router.
-   **User Feedback:** Uses `react-toastify` for success messages.
-   **Responsive UI:** Styled with Tailwind CSS for a clean and modern look.

## Technologies Used

-   React
-   React Router DOM
-   Tailwind CSS
-   React Toastify

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd <project_directory>
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

4.  **Start the development server:**

    ```bash
    npm start
    ```

5.  **Open your browser and go to `http://localhost:3000` to view the application.**

## Usage

-   **Create Note:**
    1.  Click on the "Create Note" link in the navigation bar.
    2.  Type your note in the text area.
    3.  Click "Save Note".
    4.  A success toast will appear, and you will be redirected to the "Read Notes" page.

-   **Read Notes:**
    1.  Click on the "Read Notes" link in the navigation bar.
    2.  View all your notes.

-   **Edit Note:**
    1.  Click on the "Edit Note" link in the navigation bar.
    2.  An edit form will appear to edit the note with the corresponding id from the url params.
    3.  Edit the note in the text area.
    4.  Click "Save".
    5.  A success toast will appear, and you will be redirected to the "Read Notes" page.

-   **Delete Note:**
    1.  Click on the "Delete Note" link in the navigation bar.
    2.  A delete form will appear to delete the note with the corresponding id from the url params.
    3.  Click "Delete".
    4.  A success toast will appear, and you will be redirected to the "Read Notes" page.

## Project Structure
