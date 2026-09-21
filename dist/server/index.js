export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/" || url.pathname === "/landing-full-preview") {
      url.pathname = "/landing-full-preview.html";
    } else if (url.pathname === "/menu") {
      url.pathname = "/menu.html";
    } else if (url.pathname === "/nuestra-taberna") {
      url.pathname = "/nuestra-taberna.html";
    } else if (url.pathname === "/galeria") {
      url.pathname = "/galeria.html";
    }
    return env.ASSETS.fetch(new Request(url, request));
  }
};
