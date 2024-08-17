<template>
   <Account>
   <div class="py-6 p-md-6 p-lg-10">
      <!-- heading -->
      <h2 class="mb-6">Your Orders</h2>

      <div class="table-responsive-xxl border-0">
         <!-- Table -->
         <table class="table mb-0 text-nowrap table-centered">
            <!-- Table Head -->
            <thead class="bg-light">
               <tr>
                  <th>&nbsp;</th>
                  <th>Product</th>
                  <th>Order</th>
                  <th>Date</th>
                  <th>Items</th>
                  <th>Status</th>
                  <th>Amount</th>

                  <th></th>
               </tr>
            </thead>
            <tbody>
               <!-- Table body -->
               <tr>
                  <td class="align-middle border-top-0 w-0">
                     <a href="#"><img src="../assets/images/products/product-img-1.jpg" alt="Ecommerce" class="icon-shape icon-xl" /></a>
                  </td>
                  <td class="align-middle border-top-0">
                     <a href="#" class="fw-semibold text-inherit">
                        <h6 class="mb-0">Haldiram's Nagpur Aloo Bhujia</h6>
                     </a>
                     <span><small class="text-muted">400g</small></span>
                  </td>
                  <td class="align-middle border-top-0">
                     <a href="#" class="text-inherit">#14899</a>
                  </td>
                  <td class="align-middle border-top-0">March 5, 2023</td>
                  <td class="align-middle border-top-0">1</td>
                  <td class="align-middle border-top-0">
                     <span class="badge bg-warning">Processing</span>
                  </td>
                  <td class="align-middle border-top-0">$15.00</td>
                  <td class="text-muted align-middle border-top-0">
                     <a href="#" class="text-inherit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="View"><i class="feather-icon icon-eye"></i></a>
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>
   </Account>


</template>


<script>
import Account from '@/views/account/Account.vue'
    export default {
      name: 'Orders',
      components: {
        Account,

      },
      data(){
        return {


        }
      },
      methods: {

      },
      mounted(){

      }
    }
   
</script>