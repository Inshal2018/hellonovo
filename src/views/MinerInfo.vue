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
            Miner Info
          </a>
        </li>
      </ol>
    </nav>
    <!-- end nav -->
    <div class="mt-5 w-full">
      <h1 class="text-2xl text-gray-900 dark:text-gray-200 font-medium">
        Miner Info
      </h1>
    </div>

    <div class="grid grid-cols-1 gap-2 dark:text-gray-200">
      <div class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 shadow mt-4">
        <h2 class="px-1 py-5 text-2xl">Miner's Information</h2>
        <div>
          <p class="my-2">
            Pending Shares: {{minersInfo.pendingShares}}
          </p>
          <p class="my-2">
            Pending Balance: {{minersInfo.pendingBalance}}
          </p>
          <p class="my-2">
            Total Paid: {{minersInfo.totalPaid}}
          </p>
          <p class="my-2">
            Today Paid: {{minersInfo.todayPaid}}
          </p>
          <p class="my-2">
            Last Payment: {{minersInfo.lastPayment}}
          </p>
          <p class="my-2">
            Last Payment Link: <a :href="minersInfo.lastPaymentLink" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"> Click to Visit Link </a>
          </p>
          <div>
            Performance Workers :
          <ul class="ml-14">
            <li class="border-b-2 my-2 border-t-2" v-for="worker in workers">
              Hashrate: {{worker.hashrate}}<br>
              Shares Per Second: {{worker.sharesPerSecond}}
            </li>
          </ul>
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
  name: "Miner Info",
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
    this.getMinersInfo();
  },
  methods: {
    getMinersInfo() {
      var config = {
        method: 'get',
        url: 'http://185.132.38.217:4000/api/pools/novo/miners/17X3Pe2KxkofMZoCC3FBxoEE2DdJDxcJan',
        headers: { }
      };
      axios(config)
          .then((response)=> {
            this.minersInfo = response.data;
            this.getWorkers();
            // console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
    },
    getWorkers(obj){
      // let workers = JSON.stringify(this.minersInfo.performance);
      // let final = JSON.parse(workers);
      console.log(Object.values(this.minersInfo.performance)[0]);
      this.workers = Object.values(this.minersInfo.performance)[1];
      // return workers;
    }
  },
};
</script>
