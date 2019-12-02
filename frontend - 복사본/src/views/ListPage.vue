<template>
  <v-app>
    <core-toolbar />
    <core-drawer />
    <div class="wrap">
      <h1>사용자 정보를 입력하세요.</h1>
      <form name="user" method="post" action="/regist">
        <div class="input-row">
          <label for="userid">아이디</label>
          <input id="userid" v-model="userid" name="userid" type="text" />
        </div>
        <div class="input-row">
          <label for="name">이름</label>
          <input id="name" v-model="name" name="name" type="text" />
        </div>
        <div class="input-row">
          <label for="address">주소</label>
          <input id="address" v-model="address" name="address" type="text" />
        </div>
        <button type="submit">
          전송
        </button>
      </form>
    </div>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      // movies: [],
      userid: "",
      name: "",
      address: ""
    };
  },
  created() {
    // 컴포넌트가 생성될 때, /api/에 요청을 보냅니다.
    // this.$http.get("/api/movies").then(response => {
    //   if (response) {
    //     this.movies = response.data;
    //   }
    // });
  }
};
</script>
