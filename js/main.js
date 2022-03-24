// HANDLE THE LOAD EVENT OF THE WINDOW

window.addEventListener('load', () => {

// HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON

    document.getElementById('btnAddEmployee').addEventListener('click', () => {

// OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP

        window.open('add-employee.html', 'addEmployee', 'width = 400, height = 350');
    });
});