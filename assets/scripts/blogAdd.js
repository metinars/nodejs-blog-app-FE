const userSignForm = document.querySelector('#form-signup');
const userLoginForm = document.querySelector('#form-login');
const blogAddForm = document.querySelector('#new-post')

if (blogAddForm) {
    blogAddForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const enteredTitle = event.currentTarget.querySelector('#title').value;
        const enteredShortContent = event.currentTarget.querySelector('#short').value;
        const enteredLongContent = event.currentTarget.querySelector('#long').value;

        fetch('http://localhost:3000/admin/add', {
            method: 'POST',
            body: JSON.stringify({
                title: enteredTitle,
                short: enteredShortContent,
                long: enteredLongContent,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            return response.json();
        })

    })
}

if (userSignForm) {
    userSignForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const enteredUserName = event.currentTarget.querySelector('#username').value;
        const enteredUserPassword = event.currentTarget.querySelector('#password').value;

        fetch('http://localhost:3000/register', {
            method: 'POST',
            body: JSON.stringify({
                username: enteredUserName,
                password: enteredUserPassword,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            return response.json();
        })

    })
}

if (userLoginForm) {
    userLoginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const enteredLoginUserName = event.currentTarget.querySelector('#username').value;
        const enteredLoginUserPassword = event.currentTarget.querySelector('#password').value;

        fetch('http://localhost:3000/login', {
            method: 'POST',
            body: JSON.stringify({
                username: enteredLoginUserName,
                password: enteredLoginUserPassword,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            return response.json();
        })
    })
}

