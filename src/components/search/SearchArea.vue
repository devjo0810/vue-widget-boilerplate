<template>
  <div class="search-area">
    <table class="search-area-table">
      <!-- <caption>
        검색영역
      </caption> -->
      <colgroup>
        <col
          v-for="index in colCount"
          :key="index"
          :class="{ cellw: index % 2 !== 0 }"
        />
      </colgroup>
      <tbody>
        <tr v-for="(row, i) in rows" :key="i" :class="row.class">
          <template v-for="(col, i) in row">
            <th v-if="!!col.label" :key="'th' + i">{{ col.label }}</th>
            <td
              :key="'td' + i"
              :class="col.class"
              :rowspan="col.rowspan"
              :colspan="col.colspan"
            >
              <component
                :is="componentName[col.type]"
                :value="col.value"
                @input="(e) => handleInput(col.searchKey, e)"
                @change="(e) => handleInput(col.searchKey, e)"
              />
            </td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import SearchDateBox from "./SearchDateBox.vue";
import SearchTextBox from "./SearchTextBox.vue";
import { SEARCH } from "@/config";

export default {
  name: "SearchArea",
  components: {
    SearchDateBox,
    SearchTextBox,
  },
  props: {
    colCount: Number,
    rows: Array,
    /** rows sample
     * [ rows level
     *    [ row level
     *        class: row class
     *        { col level
     *            label: 컬럼 label
     *            class: 컬럼 class
     *            rowspan: rowSpan 값
     *            colspan: colSpan 값
     *            type: 검색 component 타입
     *            searchKey: 검색 파라미터 key값
     *            value: 바인딩 value
     *        }
     *    ],
     * ]
     */
  },
  data: () => ({
    componentName: SEARCH.COMPO_NAME,
    searchData: {},
  }),
  methods: {
    handleInput(searchKey, e) {
      console.log("handleInput", searchKey, e);
      this.searchData[searchKey] = e;
      this.$emit("input");
    },
  },
};
</script>

<style lang="scss">
.search-area {
  width: 100%;
  .search-area-table {
    width: 100%;
    .cellw {
      width: 10%;
    }
  }
}
</style>
