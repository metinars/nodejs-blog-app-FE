let pathName = window.location.pathname;
const body = document.querySelector('body');
const section = document.querySelector('section');


const contentHandler = (content) => {
    let content = `<h1>Yazılar</h1>
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
    </ul>`;
    section.insertAdjacentHTML("afterbegin", content);
}
contentHandler()