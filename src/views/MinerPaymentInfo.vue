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
            Miner Payment Info
          </a>
        </li>
      </ol>
    </nav>
    <!-- end nav -->
    <div class="mt-5 w-full">
      <h1 class="text-2xl text-gray-900 dark:text-gray-200 font-medium">
        Miner Payment Info
      </h1>
    </div>
    <div class="grid grid-cols-1 gap-2 dark:text-gray-200">
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
  </div>
</template>

<script>
// @ is an alias to /src
import { Icon } from "@iconify/vue";
//require axios
import axios from "axios";

export default {
  name: "Miner Payment Info",
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
    this.getMinersPaymentInfo();
  },
  methods: {
    getMinersPaymentInfo() {
      //make axios request to http://185.132.38.217:4000/api/pools/novo/performance to get data and set it to genericInfo
      var config = {
        method: 'get',
        url: this.$store.state.api_base_url+'/api/pools/novo/miners/17X3Pe2KxkofMZoCC3FBxoEE2DdJDxcJan/payments',
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
  },
};
</script>
