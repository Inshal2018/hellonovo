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
            Dashboard
          </a>
        </li>
      </ol>
    </nav>
    <!-- end nav -->
    <div class="mt-5 w-full">
      <h1 class="text-2xl text-gray-900 dark:text-gray-200 font-medium">
        Dashboard
      </h1>
    </div>
    <!-- grid wrapper card -->
    <!--    <div-->
    <!--        class="wrapper-card grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-2 mt-5"-->
    <!--    >-->
    <!--      &lt;!&ndash; card  &ndash;&gt;-->
    <!--      <div-->
    <!--          class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 shadow flex"-->
    <!--      >-->
    <!--        <div class="p-2 max-w-sm">-->
    <!--          <div-->
    <!--              class="bg-orange-200 rounded-full w-14 h-14 text-lg p-3 text-orange-600 mx-auto"-->
    <!--          >-->
    <!--            <span class="">-->
    <!--              <svg-->
    <!--                  xmlns="http://www.w3.org/2000/svg"-->
    <!--                  aria-hidden="true"-->
    <!--                  role="img"-->
    <!--                  width="30px"-->
    <!--                  height="30px"-->
    <!--                  preserveAspectRatio="xMidYMid meet"-->
    <!--                  viewBox="0 0 24 24"-->
    <!--              >-->
    <!--                <path-->
    <!--                    fill="currentColor"-->
    <!--                    d="M10 16V8a2 2 0 0 1 2-2h9V5c0-1.1-.9-2-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-1h-9a2 2 0 0 1-2-2zm3-8c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h9V8h-9zm3 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"-->
    <!--                />-->
    <!--              </svg>-->
    <!--            </span>-->
    <!--          </div>-->
    <!--        </div>-->

    <!--        <div class="block p-2 w-full">-->
    <!--          <p class="font-semibold text-gray-900 dark:text-gray-200 text-xl">-->
    <!--            Rp.2 300 908-->
    <!--          </p>-->
    <!--          <h2 class="font-normal text-gray-400 text-md mt-1">Total Payouts</h2>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      &lt;!&ndash; end card &ndash;&gt;-->
    <!--      <div-->
    <!--          class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 shadow flex"-->
    <!--      >-->
    <!--        <div class="p-2 max-w-sm">-->
    <!--          <div-->
    <!--              class="bg-green-200 rounded-full w-14 h-14 text-lg p-3 text-green-600 mx-auto"-->
    <!--          >-->
    <!--            <span class="">-->
    <!--              <svg-->
    <!--                  xmlns="http://www.w3.org/2000/svg"-->
    <!--                  aria-hidden="true"-->
    <!--                  role="img"-->
    <!--                  width="30px"-->
    <!--                  height="30px"-->
    <!--                  preserveAspectRatio="xMidYMid meet"-->
    <!--                  viewBox="0 0 24 24"-->
    <!--              >-->
    <!--                <path-->
    <!--                    fill="currentColor"-->
    <!--                    d="M5 22h14a2 2 0 0 0 2-2V9a1 1 0 0 0-1-1h-3v-.777c0-2.609-1.903-4.945-4.5-5.198A5.005 5.005 0 0 0 7 7v1H4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2zm12-12v2h-2v-2h2zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm-2 3h2v2H7v-2z"-->
    <!--                />-->
    <!--              </svg>-->
    <!--            </span>-->
    <!--          </div>-->
    <!--        </div>-->

    <!--        <div class="block p-2 w-full">-->
    <!--          <p class="font-semibold text-gray-900 dark:text-gray-200 text-xl">-->
    <!--            256-->
    <!--          </p>-->
    <!--          <h2 class="font-normal text-gray-400 text-md mt-1">Total Sales</h2>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      &lt;!&ndash; end card &ndash;&gt;-->
    <!--      <div-->
    <!--          class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 shadow flex"-->
    <!--      >-->
    <!--        <div class="p-2 max-w-sm">-->
    <!--          <div-->
    <!--              class="bg-red-200 rounded-full w-14 h-14 text-lg p-3 text-red-600 mx-auto"-->
    <!--          >-->
    <!--            <span class="">-->
    <!--              <svg-->
    <!--                  xmlns="http://www.w3.org/2000/svg"-->
    <!--                  aria-hidden="true"-->
    <!--                  role="img"-->
    <!--                  width="30px"-->
    <!--                  height="30px"-->
    <!--                  preserveAspectRatio="xMidYMid meet"-->
    <!--                  viewBox="0 0 32 32"-->
    <!--              >-->
    <!--                <path-->
    <!--                    fill="none"-->
    <!--                    d="M8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0ZM20.5 12.5A4.5 4.5 0 1 1 16 8a4.5 4.5 0 0 1 4.5 4.5Z"-->
    <!--                />-->
    <!--                <path-->
    <!--                    fill="currentColor"-->
    <!--                    d="M26.749 24.93A13.99 13.99 0 1 0 2 16a13.899 13.899 0 0 0 3.251 8.93l-.02.017c.07.084.15.156.222.239c.09.103.187.2.28.3c.28.304.568.596.87.87c.092.084.187.162.28.242c.32.276.649.538.99.782c.044.03.084.069.128.1v-.012a13.901 13.901 0 0 0 16 0v.012c.044-.031.083-.07.128-.1c.34-.245.67-.506.99-.782c.093-.08.188-.159.28-.242c.302-.275.59-.566.87-.87c.093-.1.189-.197.28-.3c.071-.083.152-.155.222-.24ZM16 8a4.5 4.5 0 1 1-4.5 4.5A4.5 4.5 0 0 1 16 8ZM8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0Z"-->
    <!--                />-->
    <!--              </svg>-->
    <!--            </span>-->
    <!--          </div>-->
    <!--        </div>-->

    <!--        <div class="block p-2 w-full">-->
    <!--          <p class="font-semibold text-gray-900 dark:text-gray-200 text-xl">-->
    <!--            3569-->
    <!--          </p>-->
    <!--          <h2 class="font-normal text-gray-400 text-md mt-1">-->
    <!--            Total Customers-->
    <!--          </h2>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      &lt;!&ndash; end card &ndash;&gt;-->
    <!--      <div-->
    <!--          class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 shadow flex"-->
    <!--      >-->
    <!--        <div class="p-2 max-w-sm">-->
    <!--          <div-->
    <!--              class="bg-purple-200 rounded-full w-14 h-14 text-lg p-3 text-purple-600 mx-auto"-->
    <!--          >-->
    <!--            <span class="">-->
    <!--              <svg-->
    <!--                  xmlns="http://www.w3.org/2000/svg"-->
    <!--                  aria-hidden="true"-->
    <!--                  role="img"-->
    <!--                  width="30px"-->
    <!--                  height="30px"-->
    <!--                  preserveAspectRatio="xMidYMid meet"-->
    <!--                  viewBox="0 0 16 16"-->
    <!--              >-->
    <!--                <g fill="currentColor">-->
    <!--                  <path d="M15 13v1H1.5l-.5-.5V0h1v13h13Z" />-->
    <!--                  <path-->
    <!--                      d="M13 3.207L7.854 8.354h-.708L5.5 6.707l-3.646 3.647l-.708-.708l4-4h.708L7.5 7.293l5.146-5.147h.707l2 2l-.707.708L13 3.207Z"-->
    <!--                  />-->
    <!--                </g>-->
    <!--              </svg>-->
    <!--            </span>-->
    <!--          </div>-->
    <!--        </div>-->

    <!--        <div class="block p-2 w-full">-->
    <!--          <p class="font-semibold text-gray-900 dark:text-gray-200 text-xl">-->
    <!--            7 230-->
    <!--          </p>-->
    <!--          <h2 class="font-normal text-gray-400 text-md mt-1">Total Visit</h2>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      &lt;!&ndash; end card &ndash;&gt;-->
    <!--    </div>-->

    <div class="grid grid-cols-2 gap-2 dark:text-gray-200">
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
            Last Payment Link: <a :href="minersInfo.lastPaymentLink" target="_blank">Click here to visit</a>
          </p>
          <div>
            Performance Workers :
          <ul class="ml-14">
            <li class="border-b-2 border-t-2" v-for="worker in workers">
              Hashrate: {{worker.hashrate}}<br>
              Shares Per Second: {{worker.sharesPerSecond}}
            </li>
          </ul>
          </div>
        </div>
      </div>
      <div class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 shadow mt-4">
        <h2 class="px-1 py-5 text-2xl">Miner's Payment Information</h2>
        <div>
          <p class="py-3">
            Coin: {{minersPaymentInfo.coin}}
          </p>
          <p class="my-2">
            Address: {{minersPaymentInfo.address}}
          </p>
          <p class="my-2">
            AddressInfoLink: {{minersPaymentInfo.addressInfoLink}}
          </p>
          <p class="my-2">
            Amount: {{minersPaymentInfo.amount}}
          </p>
          <p class="my-2">
            Transaction Confirmation Data: {{minersPaymentInfo.transactionConfirmationData}}
          </p>
          <p class="my-2">
            Transaction Info Link: {{minersPaymentInfo.transactionInfoLink}}
          </p>
        </div>
      </div>
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
  name: "Dashboard",
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
    this.getMinersInfo();
    this.getMinersPaymentInfo();
    console.log(this.genericInfo);
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
    async getMinersInfo() {
      var config = {
        method: 'get',
        url: 'http://185.132.38.217:4000/api/pools/novo/miners/17X3Pe2KxkofMZoCC3FBxoEE2DdJDxcJan',
        headers: { }
      };
      await axios(config)
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
        url: 'http://185.132.38.217:4000/api/pools/novo/miners/17X3Pe2KxkofMZoCC3FBxoEE2DdJDxcJan/payments',
        headers: { }
      };

      axios(config)
          .then((response)=> {
            this.minersPaymentInfo = response.data[0];
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
