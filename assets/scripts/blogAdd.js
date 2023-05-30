const userSignForm = document.querySelector('#form-signup');
const userLoginForm = document.querySelector('#form-login');
const blogAddForm = document.querySelector('#new-post');

if (blogAddForm) {
  blogAddForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const enteredTitle = event.currentTarget.querySelector('#title').value;
    const enteredShortContent =
      event.currentTarget.querySelector('#short').value;
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
      window.location.href = 'http://localhost:1234/admin';
      return response.json();
    });
  });
}

if (userSignForm) {
  userSignForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const enteredUserName =
      event.currentTarget.querySelector('#username').value;
    const enteredUserPassword =
      event.currentTarget.querySelector('#password').value;

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
      window.location.href = 'http://localhost:1234/login';
      return response.json();
    });
  });
}

if (userLoginForm) {
  userLoginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const enteredLoginUserName =
      event.currentTarget.querySelector('#username').value;
    const enteredLoginUserPassword =
      event.currentTarget.querySelector('#password').value;
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      body: JSON.stringify({
        username: enteredLoginUserName,
        password: enteredLoginUserPassword,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const jsonData = await response.json();
    if (response.status === 201) {
      window.location.href = 'http://localhost:1234/admin';
      document.cookie = `jwt=${JSON.stringify(jsonData.token)}`;
      console.log(jsonData.user.username);
      return jsonData;
    } else {
      alert(jsonData.statusText);
    }
  });
}

const blogPostAdder = (postsAll) => {
  const postelement = document.querySelector('.posts');

  postsAll.forEach((element) => {
    let post = `<li>
                  <a class="post-title" data-doc="${element._id}" href="detail/${element._id}">${element.title}</a>
                    <p>${element.short}</p>
                    <a class="del" data-doc="${element._id}">Sil</a>
                </li>`;
    postelement.insertAdjacentHTML('afterbegin', post);
  });
  const detailSelector = document.querySelector('.post-title');
  const deletePostSelector = document.querySelector('.del');

  detailSelector.addEventListener('click', (event) => {
    const dataDoc = detailSelector.getAttribute('data-doc');

    getDetailPost(dataDoc);
  });

  deletePostSelector.addEventListener('click', (event) => {
    const delDataDoc = deletePostSelector.getAttribute('data-doc');
    deletePost(delDataDoc);
  });
};

const blogPostDetailAdder = (postDetail) => {};

async function deletePost(dataDoc) {
  const deletePostRes = await fetch(
    'http://localhost:3000/admin/delete/' + dataDoc,
    {
      method: 'DELETE',
    }
  );
  const jsonDeletePost = await deletePostRes.json();

  if (deletePostRes.status === 200) {
    location.reload();
    return jsonDeletePost;
  } else {
    alert(deletePostRes.statusText);
  }
}

async function getDetailPost(dataDoc) {
  const postDetailRes = await fetch(
    'http://localhost:3000/admin/getDetail/' + dataDoc
  );
  const jsonPostDetailData = await postDetailRes.json();

  if (postDetailRes.status === 200) {
    blogPostDetailAdder(jsonPostDetailData.getDetailPost);
    console.log(jsonPostDetailData.getDetailPost);
    return jsonPostDetailData;
  } else {
    alert(postDetailRes.statusText);
  }
}

async function getAllPosts() {
  const response = await fetch('http://localhost:3000/admin/getAll');
  const jsonResData = await response.json();

  if (response.status === 200) {
    blogPostAdder(jsonResData.getAllPosts);
    return jsonResData;
  } else {
    alert(response.statusText);
  }
}

if (pathName == '/admin') {
  getAllPosts();
}

async function logout() {
  console.log('test1');
  const response = await fetch('http://localhost:3000/logout');
  const jsonResData = await response.json();

  if (response.status === 200) {
    console.log('testt');
    document.cookie = 'jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    window.location.href = 'http://localhost:1234' + jsonResData.path;
    return jsonResData;
  } else {
    alert(response.statusText);
  }
}

if (pathName == '/logout') {
  logout();
}