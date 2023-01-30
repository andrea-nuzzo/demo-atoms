<template>
  <span>
    {{humanFriendlyDate()}}
  </span>
</template>

<script>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import 'dayjs/locale/it';
dayjs.extend(relativeTime);
dayjs.locale('it');


export default {
  name: "AppDate",
  props:{
    timestamp:{
      required: true,
      type: Number,
    }
  },

  methods:{
    humanFriendlyDate(){
      let date = dayjs.unix(this.timestamp).locale('it').format('DD MMMM YYYY');
      let firstLetter = date.substr(date.indexOf(" ") + 1, 1).toUpperCase();
      let restOfMonth = date.substr(date.indexOf(" ") + 2);
      return date.substr(0, date.indexOf(" ") + 1) + firstLetter + restOfMonth;
    },


  },
}
</script>

<style scoped>

</style>