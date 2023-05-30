const pages = [
  {
    pageName: '/',
    pageContent: `<h1>Yazılar</h1>
    <ul>
      <li>
        <a href="">Lorem, ipsum dolor.</a>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A odio,
          neque quam, amet eius voluptatem impedit sapiente quibusdam tenetur
          natus incidunt suscipit corrupti! Eos consequatur magnam corrupti ut
          quo modi.
        </p>
      </li>
      <li>
        <a href="">Lorem, ipsum dolor.</a>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A odio,
          neque quam, amet eius voluptatem impedit sapiente quibusdam tenetur
          natus incidunt suscipit corrupti! Eos consequatur magnam corrupti ut
          quo modi.
        </p>
      </li>
      <li>
        <a href="">Lorem, ipsum dolor.</a>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A odio,
          neque quam, amet eius voluptatem impedit sapiente quibusdam tenetur
          natus incidunt suscipit corrupti! Eos consequatur magnam corrupti ut
          quo modi.
        </p>
      </li>
    </ul>`,
  },
  {
    pageName: '/admin/add',
    pageContent: `<form id="new-post" class="blog-add-form" action="/admin/add" method="post">
    <input class="blog" type="text" id="title" name="title" placeholder="Başlık" required="" />
    <input class="blog" type="text" id="short" name="short" placeholder="Açıklama" required="" />
    <input class="blog" type="text" id="long" name="long" placeholder="İçerik" required="" />
    <input type="submit" value="Kaydet" />
  </form>`,
  },
  {
    pageName: '/login',
    pageContent: `<form id="form-login" action="/login" method="post">
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Kullanıcı Adı"
          required=""
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Parola"
          required=""
        />
        <a href="/signup">Signup</a>
        <input type="submit" value="Login" />
      </form>`,
  },
  {
    pageName: '/admin',
    pageContent: `<a href="/admin/add">Ekle</a>
        <h1>Yazılar</h1>
          <ul class="posts">
          </ul>`,
  },
  {
    pageName: '/detail/',
    pageContent: `<h1><%=blog.title%></h1>
    <p><%=blog.long%></p>`,
  },
  {
    pageName: '/signup',
    pageContent: `<form id="form-signup" action="/register" method="post">
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Kullanıcı Adı"
          required
        />
        <input type="password" id="password" name="password" placeholder="Parola" required />
        <input type="submit" value="Kayıt" />
      </form>`,
  },
];
