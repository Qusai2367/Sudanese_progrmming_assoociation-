# Single Page Blog Application

This project is a **React-based Single Page Application (SPA)** showcasing a simple yet powerful blog system with posts, comments, likes, and responsive design.

## 🚀 Features

-   **Post List View**
    -   ![Post List View*](./src/assets/lis.jpg) 
    -   Displays all blog posts with cover image, title, preview snippet, author profile, and timestamp.
    -   Like button for each post.
    -   Comment count shown.

-   **Post Details View**

    -   ![Post Details View*](./src/assets/de.jpg)
    -   Displays full post content with large responsive image.
    -   Shows post timestamp and author details with profile photo.
    -   Integrated **Like button**.
    -   Integrated **Comment Section** for nested comments and replies.

-   **Comment System**

    -   ![comment](./src/assets/co.jpg)
    -   Each post supports threaded comments with replies.
    -   Each comment/reply includes an author and like button.

-   **Responsive Images**

    -   ![responsive](./src/assets/res1.jpg)
    -   Post images scale properly (`aspect-video`) on list view and `h-auto` within details view.
    -   Author photos are consistently styled.

-   **Responsive Layout**
    -   ![responsive](./src/assets/res1.jpg)
    -   Designed using **Tailwind CSS**.
    -   Grid layout adapts to mobile, tablet, and desktop screens.

-   **Fallback Handling**
    -   ![Fallback](./src/assets/cen.jpg)
    -   If `posts.js` is empty, a **"No posts found"** message is displayed.

## 🛠️ Tech Stack

-   **React** (Vite + React Router)
-   **Tailwind CSS** for styling and responsive design
-   **JavaScript (ES6+)**

## 📂 Project Structure

```
src/
 ├── components/
 │   ├── Post/
 │   │   ├── PostList.jsx        # Displays all posts
 │   │   ├── PostDetails.jsx     # Displays single post details
 │   ├── Comment/
 │   │   ├── Comment.jsx         # Individual comment component
 │   │   ├── CommentSection.jsx  # Handles nested comments
 │   ├── UI/
 │   │   └── LikeButton.jsx      # Reusable like button
 │   └── Navbar.jsx              # Navigation bar
 ├── data/
 │   └── posts.js                # Mock posts data with author, timestamps, comments
 ├── Pages/
 │   └── Blog.jsx                # Blog landing page
 ├── utils/
 │   └── Nav.jsx                 # Navigation helpers
 ├── App.jsx                     # Routes container
 └── main.jsx                    # Entry point
```

## ▶️ Running the project

1. Install dependencies:
    ```bash
    npm install
    ```
2. Start the dev server:
    ```bash
    npm run dev
    ```
3. Open the app in your browser at:
    ```
    http://localhost:5173/
    ```

---

This project acts as a reference template for a **minimal blog-style For SPA Orginaization** with clean design and interactive UI components.
