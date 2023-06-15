import CreateRecipie from '../components/createRecipie'

function auth(page) {
    var token = localStorage.getItem("token");
    if (token != null) {
      return CreateRecipie;
    }
    return page;
  }
  export default auth