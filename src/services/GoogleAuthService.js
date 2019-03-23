import axios from 'axios';

export default {

    login() {
        this.$gAuth
        .signIn()
        .then(user => {
          // On success do something, refer to https://developers.google.com/api-client-library/javascript/reference/referencedocs#googleusergetid
          localStorage.googleAuth = JSON.stringify(user);
          this.isSignIn = this.$gAuth.isAuthorized;
        })
        .catch(error => {
          // On fail do something
          console.log(error);
        });
    },

}
