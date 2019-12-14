<template>
  <v-app>
    <core-toolbar />
    <core-drawer />
    <v-container
      fill-height
      fluid
      grid-list-xl
    >
      <v-layout
        justify-center
        wrap
      >
        <v-flex md12>
          <material-card
            color="#00bcd4"
            flat
            full-width
            title="설문조사 리스트"
            text="Moca 설문 조사 리스트 입니다."
          >
            <v-data-table
              :headers="headers"
              :items="items"
              :items-per-page="5"
            >
              <template
                slot="headerCell"
                slot-scope="{ header }"
              >
                <span
                  class="subheading font-weight-light text--darken-3"
                  v-text="header.text"
                />
              </template>
              <template
                slot="items"
                slot-scope="{ item }"
              >
                <td>{{ item.index }}</td>
                <td>{{ item.contents }}</td>
                <td
                  class="text-xs-right"
                  onClick="confirm('정말로 삭제 하시겠습니까?')"
                >
                  <span class="v-tooltip v-tooltip--top">
                    <span>
                      <button
                        type="button"
                        class="v-btn--simple v-btn v-btn--icon theme--light danger"
                      >
                        <div class="v-btn__content">
                          <i
                            aria-hidden="true"
                            class="v-icon mdi mdi-close theme--light error--text"
                          />
                        </div>
                      </button>
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
        text: "내용",
        value: "contents"
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
        contents: "머라하노"
      },
      {
        contents: "머라하노"
      },
      {
        contents: "머라하노"
      },
      {
        contents: "머라하노"
      },
      {
        contents: "머라하노"
      },
      {
        contents: "머라하노"
      },
      {
        contents: "머라하노"
      },
      {
        contents: "머라하노"
      },
      {
        contents: "머라하노"
      },
      {
        contents: "머라하노"
      },
      {
        contents: "머라하노"
      },
      {
        contents: "머라하노"
      }
    ]
  })
};
</script>
