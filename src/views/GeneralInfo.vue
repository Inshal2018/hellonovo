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
      <div class="grid grid-cols-2 gap-8">
        <div class="card bg-white dark:bg-gray-700 w-full rounded-md p-5 shadow flex">
          <div class="p-2 max-w-sm">
            <div class="bg-orange-200 rounded-full w-14 h-14 text-lg p-3 text-orange-600 mx-auto">
              <span class="text-3xl"><Icon icon="fa-brands:slack-hash" /></span>
            </div>
          </div>

          <div class="block p-2 w-full">
            <p class="font-semibold text-gray-900 dark:text-gray-200 text-xl">{{((lastValue.poolHashrate)/1000000000)}} GH/s </p>
            <h2 class="font-normal text-gray-400 text-md mt-1">Pool Hash Rate</h2>
          </div>
        </div>


        <div class="card bg-white dark:bg-gray-700 w-full rounded-md p-5 shadow flex">
          <div class="p-2 max-w-sm">
            <div class="bg-orange-200 rounded-full w-14 h-14 text-lg p-3 text-orange-600 mx-auto">
              <span class="text-3xl"><Icon icon="bx:network-chart" /></span>
            </div>
          </div>

          <div class="block p-2 w-full">
            <p class="font-semibold text-gray-900 dark:text-gray-200 text-xl"> {{lastValue.networkHashrate}} </p>
            <h2 class="font-normal text-gray-400 text-md mt-1">Network hash Rate</h2>
          </div>
        </div>

        <div class="card bg-white dark:bg-gray-700 w-full rounded-md p-5 shadow flex" v-if="pools.poolFeePercent">
          <div class="p-2 max-w-sm">
            <div class="bg-orange-200 rounded-full w-14 h-14 text-lg p-3 text-orange-600 mx-auto">
              <span class="text-3xl"><Icon icon="carbon:percentage-filled" /></span>
            </div>
          </div>

          <div class="block p-2 w-full">
            <p class="font-semibold text-gray-900 dark:text-gray-200 text-xl"> {{pools.poolFeePercent}} </p>
            <h2 class="font-normal text-gray-400 text-md mt-1">Pool Fee Percent</h2>
          </div>
        </div>

        <div class="card bg-white dark:bg-gray-700 w-full rounded-md p-5 shadow flex" v-if="pools.networkStats">
          <div class="p-2 max-w-sm">
            <div class="bg-orange-200 rounded-full w-14 h-14 text-lg p-3 text-orange-600 mx-auto">
              <span class="text-3xl"><Icon icon="healthicons:high-level" /></span>
            </div>
          </div>

          <div class="block p-2 w-full">
            <p class="font-semibold text-gray-900 dark:text-gray-200 text-xl"> {{Math.floor(pools.networkStats.networkDifficulty)}} </p>
            <h2 class="font-normal text-gray-400 text-md mt-1">Network Difficulty</h2>
          </div>
        </div>

        <div class="card bg-white dark:bg-gray-700 w-full rounded-md p-5 shadow flex" v-if="pools.networkStats">
          <div class="p-2 max-w-sm">
            <div class="bg-orange-200 rounded-full w-14 h-14 text-lg p-3 text-orange-600 mx-auto">
              <span class="text-3xl"><Icon icon="bx:stats" /></span>
            </div>
          </div>

          <div class="block p-2 w-full">
            <p class="font-semibold text-gray-900 dark:text-gray-200 text-xl"> {{pools.networkStats.blockHeight}} </p>
            <h2 class="font-normal text-gray-400 text-md mt-1">Block Height</h2>
          </div>
        </div>

        <div class="card bg-white dark:bg-gray-700 w-full rounded-md p-5 shadow flex" v-if="pools.networkStats">
          <div class="p-2 max-w-sm">
            <div class="bg-orange-200 rounded-full w-14 h-14 text-lg p-3 text-orange-600 mx-auto">
              <span class="text-3xl"><Icon icon="bi:building" /></span>
            </div>
          </div>

          <div class="block p-2 w-full">
            <p class="font-semibold text-gray-900 dark:text-gray-200 text-xl"> {{pools.totalBlocks}} </p>
            <h2 class="font-normal text-gray-400 text-md mt-1">Total Blocks Mined</h2>
          </div>
        </div>

        <div class="card bg-white dark:bg-gray-700 w-full rounded-md p-5 shadow flex">
          <div class="p-2 max-w-sm">
            <div class="bg-orange-200 rounded-full w-14 h-14 text-lg p-3 text-orange-600 mx-auto">
              <span class="text-3xl"><Icon icon="mdi:shovel" /></span>
            </div>
          </div>

          <div class="block p-2 w-full">
            <p class="font-semibold text-gray-900 dark:text-gray-200 text-xl"> {{pools.totalPaid}} </p>
            <h2 class="font-normal text-gray-400 text-md mt-1">Total Paid</h2>
          </div>
        </div>
      </div>

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
      pools:{},
      lastValue:{},
    };
  },
  components: {
    Icon,
  },
  mounted() {
    this.getPoolGenericInfo();
    this.getPoolsInfo();
  },
  methods: {
    getPoolGenericInfo() {
      var config = {
        method: 'get',
        url: this.$store.state.api_base_url+'/api/pools/novo/performance',
        headers: { }
      };

      axios(config)
          .then((response)=> {
            this.genericInfo = response.data;
            this.lastValue = Object.values(response.data.stats).pop();
          })
          .catch(function (error) {
            console.log(error);
          });
    },
    getPoolsInfo() {
      var config = {
        method: 'get',
        url: this.$store.state.api_base_url+'/api/pools',
        headers: { }
      };
      axios(config)
          .then((response)=> {
            this.pools = Object.values(response.data.pools)[0];
          })
          .catch(function (error) {
            console.log(error);
          });
    },
  },
};
</script>
