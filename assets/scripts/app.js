let pathName = window.location.pathname;
const section = document.querySelector('section');


const contentHandler = (pathName) => {

  for (let page of pages) {
    if (pathName == page.pageName) {
      let content = page.pageContent

      section.insertAdjacentHTML("afterbegin", content);
    }
  }
}
contentHandler(pathName);