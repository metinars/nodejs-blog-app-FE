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
        pageName: '/add',
        pageContent: `<form class="blog-add-form" action="/admin/add" method="post">
    <input class="blog" type="text" id="title" name="title" placeholder="Başlık" required="" />
    <input class="blog" type="text" id="short" name="short" placeholder="Açıklama" required="" />
    <input class="blog" type="text" id="long" name="long" placeholder="İçerik" required="" />
    <input type="submit" value="Kaydet" />
  </form>`,
    },
    {
        pageName: '/login',
        pageContent: `<form action="" method="post">
        <input
          type="text"
          name="username"
          placeholder="Kullanıcı Adı"
          required=""
        />
        <input
          type="password"
          name="password"
          placeholder="Parola"
          required=""
        />
        <a href="/signup">Signup</a>
        <input type="submit" value="Login" />
      </form>`
    },
    {
        pageName: '/admin',
        pageContent: `<a href="/admin/add">Ekle</a>
        <h1>Yazılar</h1>
        <li>
          <p>Title</p>
          <a class="del" data-doc="">Sil</a>
        </li>`
    },
    {
        pageName: '/blog',
        pageContent: ``
    },
    {
        pageName: '/signup',
        pageContent: `<form action="" method="post">
        <input
          type="text"
          name="username"
          placeholder="Kullanıcı Adı"
          required
        />
        <input type="password" name="password" placeholder="Parola" required />
        <input type="submit" value="Kayıt" />
      </form>`
    }
];
