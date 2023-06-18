import CreateRecipie from '../components/CreateRecipie'

function Auth(page) {
    var token = localStorage.getItem("token");
    if (token != null) {
      return CreateRecipie;
    }
    return page;
  }
  export default Auth