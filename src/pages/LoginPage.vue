<template>
  <div class="container">
    <div class="login">
      <div class="title-login">Login</div>
      <div>
        <input v-model="email" class="dang-nhap" type="text" placeholder="Enter email i’d">
      </div>
      <div>
        <input v-model="password" class="dang-nhap" type="password" placeholder="Enter password">
      </div>
      <div class="hint-question">Forget Password ?</div>
      <div class="error">{{error}}</div>
      <button @click="login" class="nut-an">{{submitBtnLabel}} </button>
      <div class="sign-up">Or sign up with</div>
      <div class="wrapper-logo-app">
        <div class="logo-app">
          <img class="logo" src="../assets/img/logo/google logo.png"/>
        </div>
        <div class="logo-app">
          <img class="logo" src="../assets/img/logo/face.png"/>
        </div>
        <div class="logo-app">
          <img class="logo" src="../assets/img/logo/apple.png"/>
        </div>
      </div>
      <div class="create-account">
        Not register yet ?
        <router-link class="lien-ket" to="/register"><span class="active">Create Account</span></router-link>
      </div>
    </div>
  </div>
</template>

<!--<style src="../assets/css/login.css"></style>-->
<!--<script>-->
<!--import axios from "axios";-->
<!--export default {-->

<!--  data(){-->
<!--    return{-->
<!--      password:'',-->
<!--      email:'',-->
<!--      error:'',-->
<!--      loading: false-->
<!--    }-->
<!--  },-->
<!--  computed:{-->
<!--    submitBtnLabel(){-->
<!--      if(this.loading){-->
<!--        return 'Loading....'-->
<!--      }-->
<!--      return 'Login'-->
<!--    }-->
<!--  },-->
<!--  methods:{-->
<!--    login(){-->
<!--      if (this.loading) return;-->
<!--      this.loading = true;-->
<!--      this.error = '';-->
<!--      axios({-->
<!--        url: 'login',-->
<!--        method: 'post',-->
<!--        data:{-->
<!--          "email": this.email,-->
<!--          "password": this.password-->
<!--        },-->
<!--      }).then( (resp) =>{-->
<!--        localStorage.setItem('token', resp.data.token);-->
<!--        localStorage.setItem('user', JSON.stringify(resp.data.user));-->
<!--        this.$router.push('/');-->
<!--        console.log('resp',resp)-->
<!--      }).catch(error => {-->
<!--        this.loading = false;-->
<!--        if(error.response.status === 400){-->
<!--          this.error= 'tài khoản , mật khẩu không chính xác';-->
<!--        } else {-->
<!--          this.error= 'có lỗi xảy ra vui lòng thử lại sau';-->
<!--        }-->
<!--      })-->

<!--    }-->

<!--  },-->

<!--}-->
<!--</script>-->
<style scoped>
.container{
  width: 100%;
}
.error{
  color: red;
}
.title-login{
  font-weight: 500;
  font-size: 60px;
  color: #000000;
  line-height: 76px;
  padding: 51px 0;
}
.login{
  margin: 0 auto;
  text-align: center;
  width: 500px;
  padding: 20px;
}
.dang-nhap{
  font-weight: 400;
  font-size: 15px;
  color: #6D6A6A;
  padding: 14px 252px 14px  17px;
  border: 1px solid #6C6A6A;
  border-radius: 8px;
  margin-bottom: 10px;
}
.hint-question{
  display: flex;
  justify-content: flex-end;
  margin-bottom: 25px;
}
.nut-an{
  background: #FFC600;
  border-radius: 8px;
  width: 100%;
  border: 0;
  padding: 12px 140px;
  font-weight: 400;
  font-size: 18px;
  color: #000000;
  margin-bottom: 35px;
  transition: .3s;
}
.nut-an:hover{
  background: #42b983;
  cursor: pointer;
}
.sign-up{
  font-weight: 400;
  font-size: 12px;
  color: #757171;
  margin-bottom: 35px;

}
.logo-app{
  background: #FFFFFF;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 11px 25px;
}
.wrapper-logo-app{
  display: flex;
  gap:20px;
  justify-content: center;
  margin-bottom: 53px;
}
.logo{
  width: 27px;
  height: 27px;
}
.create-account{
  font-weight: 400;
  font-size: 13px;
  color: #636363;
}
.active{
  font-weight: 600;
  color: #0C1F22;
  border: 0;
}



</style>