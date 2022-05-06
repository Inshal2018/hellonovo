<template>
  <div class="dashboard p-4">
    <nav class="flex" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-3">
        <li class="inline-flex items-center">
          <a
              href="#"
              class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <svg
                class="mr-2 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
              ></path>
            </svg>
            General Info
          </a>
        </li>
      </ol>
    </nav>
    <!-- end nav -->
    <div class="mt-5 w-full">
      <h1 class="text-2xl text-gray-900 dark:text-gray-200 font-medium">
        General Info
      </h1>
    </div>

    <div class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 shadow mt-4 dark:text-gray-200">
      <h2 class="px-1 py-5 text-2xl">Generic Info</h2>
      <table class="border-collapse w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm">
        <thead class="bg-slate-50 dark:bg-slate-700">
        <tr>
          <th class="w-1/2 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">Pool Hash Rate</th>
          <th class="w-1/2 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">Network hash Rate</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="info in genericInfo.stats">
          <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{{info.poolHashrate}}</td>
          <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{{info.networkHashrate}}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <!-- end wrapper card -->
  </div>
</template>

<script>
// @ is an alias to /src
import { Icon } from "@iconify/vue";
//require axios
import axios from "axios";

export default {
  name: "General Info",
  data() {
    return {
      genericInfo : {},
      minersInfo  : {},
      minersPaymentInfo : {},
      workers:{}
    };
  },
  components: {
    Icon,
  },
  mounted() {
    this.getPoolGenericInfo();
  },
  methods: {
    getPoolGenericInfo() {
      var config = {
        method: 'get',
        url: 'http://185.132.38.217:4000/api/pools/novo/performance',
        headers: { }
      };

      axios(config)
          .then((response)=> {
            this.genericInfo = response.data;
          })
          .catch(function (error) {
            console.log(error);
          });
    },
  },
};
</script>
