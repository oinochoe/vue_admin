<template>
  <v-app>
    <core-toolbar />
    <core-drawer />
    <v-container fill-height fluid grid-list-xl>
      <v-layout justify-center wrap>
        <v-flex md12>
          <material-card
            color="#00bcd4"
            flat
            full-width
            title="쿠폰 등록 리스트"
            text="Moca 쿠폰 등록 리스트 입니다."
          >
            <v-data-table :headers="headers" :items="items" :items-per-page="5">
              <template slot="headerCell" slot-scope="{ header }">
                <span class="subheading font-weight-light text--darken-3" v-text="header.text" />
              </template>
              <template slot="items" slot-scope="{ item }">
                <td>{{ item.num }}</td>
                <td>{{ item.telephone }}</td>
                <td>{{ item.date }}</td>
                <td class="text-xs-right">
                  <span class="v-tooltip v-tooltip--top">
                    <span>
                      <v-btn
                        @click="removeItem(item.num)"
                        class="v-btn--simple v-btn v-btn--icon theme--light danger"
                      >
                        <div class="v-btn__content">
                          <i
                            aria-hidden="true"
                            class="v-icon mdi mdi-close theme--light error--text"
                          ></i>
                        </div>
                      </v-btn>
                    </span>
                  </span>
                </td>
              </template>
            </v-data-table>
          </material-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    headers: [
      {
        sortable: false,
        text: "인덱스",
        value: "num"
      },
      {
        sortable: false,
        text: "전화번호",
        value: "telephone"
      },
      {
        sortable: true,
        text: "등록일",
        value: "date"
      },
      {
        sortable: false,
        text: "삭제",
        value: "",
        align: "right"
      }
    ],
    items: [
      {
        telephone: "dfsadf"
      }
    ]
  }),
  created() {
    this.$http.get("/getList").then(response => {
      this.items = response.data;
    });
  },
  methods: {
    removeItem(num) {
      this.$http.delete("/deleteItem", { body: { item: num } }).then(res => {
        if (res == "success") {
          this.items.splice(index, 1);
        }
      });
    }
  }
};
</script>
