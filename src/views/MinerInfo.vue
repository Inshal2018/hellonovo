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
        <div class="grid grid-cols-2 gap-2 dark:text-gray-200">

          <div class="card bg-white dark:bg-gray-700 w-full rounded-md p-5 shadow flex" >
            <div class="p-2 max-w-sm">
              <div class="bg-orange-200 rounded-full w-14 h-14 text-lg p-3 text-orange-600 mx-auto">
                <span class="text-3xl"><Icon icon="ant-design:stock-outlined" /></span>
              </div>
            </div>

            <div class="block p-2 w-full">
              <p class="font-semibold text-gray-900 dark:text-gray-200 text-xl"> {{minersInfo.pendingShares}} </p>
              <h2 class="font-normal text-gray-400 text-md mt-1">Pending Shares</h2>
            </div>
          </div>

          <div class="card bg-white dark:bg-gray-700 w-full rounded-md p-5 shadow flex">
            <div class="p-2 max-w-sm">
              <div class="bg-orange-200 rounded-full w-14 h-14 text-lg p-3 text-orange-600 mx-auto">
                <span class="text-3xl"><Icon icon="material-symbols:account-balance-wallet" /></span>
              </div>
            </div>

            <div class="block p-2 w-full">
              <p class="font-semibold text-gray-900 dark:text-gray-200 text-xl"> {{minersInfo.pendingBalance}} </p>
              <h2 class="font-normal text-gray-400 text-md mt-1">Pending Balance</h2>
            </div>
          </div>

          <div class="card bg-white dark:bg-gray-700 w-full rounded-md p-5 shadow flex">
            <div class="p-2 max-w-sm">
              <div class="bg-orange-200 rounded-full w-14 h-14 text-lg p-3 text-orange-600 mx-auto">
                <span class="text-3xl"><Icon icon="mdi:account-cash-outline" /></span>
              </div>
            </div>

            <div class="block p-2 w-full">
              <p class="font-semibold text-gray-900 dark:text-gray-200 text-xl"> {{minersInfo.totalPaid}} </p>
              <h2 class="font-normal text-gray-400 text-md mt-1">Total Paid</h2>
            </div>
          </div>

          <div class="card bg-white dark:bg-gray-700 w-full rounded-md p-5 shadow flex">
            <div class="p-2 max-w-sm">
              <div class="bg-orange-200 rounded-full w-14 h-14 text-lg p-3 text-orange-600 mx-auto">
                <span class="text-3xl"><Icon icon="ic:twotone-paid" /></span>
              </div>
            </div>

            <div class="block p-2 w-full">
              <p class="font-semibold text-gray-900 dark:text-gray-200 text-xl"> {{minersInfo.todayPaid}} </p>
              <h2 class="font-normal text-gray-400 text-md mt-1">Today Paid</h2>
            </div>
          </div>

          <div class="card col-span-2 bg-white dark:bg-gray-700 w-full rounded-md p-5 shadow flex" v-if="this.minersInfo.performance">
            <div class="p-2 max-w-sm">
              <div class="bg-orange-200 rounded-full w-14 h-14 text-lg p-3 text-orange-600 mx-auto">
                <span class="text-3xl"><Icon icon="ph:users-four-duotone" /></span>
              </div>
            </div>

            <div class="block p-2 w-full">
              <p class="font-semibold text-gray-900 dark:text-gray-200 text-xl"> {{minersInfo.todayPaid}} </p>
              <h2 class="font-normal text-gray-400 text-md mt-1">Performance Workers</h2>
              <ul class="ml-14">
                <li class="border-b-2 my-2 border-t-2" v-for="worker in workers">
                  Hashrate: {{worker.hashrate}}<br>
                  Shares Per Second: {{worker.sharesPerSecond}}
                </li>
              </ul>
              <div>
                <span v-for="workers in minersInfo.performance">
                  <ul class="ml-14">
                    <li class="border-b-2 my-2 border-t-2" v-for="worker in workers.workers">
                      Hashrate: {{worker.hashrate}}<br>
                      Shares Per Second: {{worker.sharesPerSecond}} <br>
                      Created: {{workers.created}}
                    </li>
                  </ul>
                </span>
                <!--                <span class="border-b-2 my-2 border-t-2" v-for="worker in workers">-->
                <!--                  Hashrate: {{worker.hashrate}}<br>-->
                <!--                  Shares Per Second: {{worker.sharesPerSecond}}-->
                <!--                </span>-->
              </div>
            </div>
          </div>

        </div>
      </div>
      <div>
        <h2>Payment Details</h2>
        <table class="border-collapse w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm">
          <thead class="bg-slate-50 dark:bg-slate-700">
          <tr>
            <th class="w-1/4 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">Address</th>
            <th class="w-1/4 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">Amount</th>
            <th class="w-1/4 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">Transaction Info</th>
            <th class="w-1/4 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">Created</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="info in minersPaymentInfo">
            <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{{info.address}}</td>
            <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{{info.amount}}</td>
            <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
              <a
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                 :href="info.transactionInfoLink" target="_blank">Click to Visit</a>
            </td>
            <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{{info.created}}</td>
          </tr>
          </tbody>
        </table>
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
    this.getMinersPaymentInfo();
  },
  methods: {
    getMinersInfo() {
      var config = {
        method: 'get',
        url: this.$store.state.api_base_url+'/api/pools/novo/miners/17X3Pe2KxkofMZoCC3FBxoEE2DdJDxcJan',
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
    getMinersPaymentInfo() {
      //make axios request to http://185.132.38.217:4000/api/pools/novo/performance to get data and set it to genericInfo
      var config = {
        method: 'get',
        url: this.$store.state.api_base_url+'/api/pools/novo/miners/17X3Pe2KxkofMZoCC3FBxoEE2DdJDxcJan/payments',
        headers: { }
      };

      axios(config)
          .then((response)=> {
            this.minersPaymentInfo = response.data;
            // console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
    },
    getWorkers(obj){
      console.log(Object.values(this.minersInfo.performance)[0]);
      this.workers = Object.values(this.minersInfo.performance)[1];
    }
  },
};
</script>
