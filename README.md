# restaurant

My restaurant page from The Odin Project. Had some help from references to build this. Modules can be quite difficult to get right. 

Visit my site here: https://kingsamanimations.github.io/restaurant/


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo Lost App</title>
</head>
<body>
    <div class="content">
        <div class="form-heading">
            <h1>Add a new To-Do to the project</h1>
        </div>
        <div class="todos-heading">
            <h1>Current To-Do's</h1>
        </div>
        <div class="form">
            <button class="add-todo-button">Add New ToDo</button>
            <div id="add-todo-form" style="display:none">
                <form id="add-todo">
                    <label for="Project">Project:</label>
                    <select id="Project" name="Project">
                        <option value="DefaultProject">Default Project</option>
                        <option value="Create-New-Project">Create New Project</option>
                    </select>
                    <label for="Title">Title:</label>
                    <input type="text" id="Title" name="Title">
                    <label for="Description">Description:</label>
                    <input type="text" id="Description" name="Description">
                    <label for="DueDate">Due Date:</label>
                    <input type="date" id="DueDate" name="DueDate">
                    <label for="Priority">Priority:</label>
                    <select id="Priority" name="Priority">
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                    <label for="Checklist">Checklist Items Added:</label>
                    <ul class="todo-ul"></ul>
                
                    <input type="text" id="add-to-checklist" name="add-to-checklist" placeholder="Checklist Item Here">
                    <button class="add-to-checklist">Add Item To Checklist</button>
                    <br>
                    <button type="submit" class="submit-button">Submit ToDo</button>
                    <button type="reset" class="reset-button">Reset</button>
                </form>
            </div>
        </div>
        <div class="books"></div>
    </div>
    <script src="main.js" defer></script>
</body>
</html>