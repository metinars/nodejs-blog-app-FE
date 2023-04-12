class BlogAdder{
    constructor() {
        const blogAddForm = document.querySelector('#new-post form')

        blogAddForm.addEventListener('submit', this.findBlogAdderHandler.bind(this));
    }

    findBlogAdderHandler(event) {
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
    }
}

const blogAdder = new BlogAdder();

// const url = new URL(location.href)
// const queryParams = url.searchParams;

// const locId = queryParams.post('add');
// fetch('http://localhost:3000/add/' + locId)