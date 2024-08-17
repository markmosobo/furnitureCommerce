<template>

<!DOCTYPE html>
<html lang="en">
   
   <body>
      <!-- main -->
      <div>
         <!-- navbar -->
         <Navbar />


         <div class="main-wrapper">
            <!-- sidebar -->
            <!-- sidebar -->
            <Sidebar />

            <!-- main wrapper -->
            <main class="main-content-wrapper">
               <slot></slot>
            </main>
         </div>
      </div>

   </body>

</html>

</template>

<script>
import Navbar from "@/components/dashboard/Navbar.vue";
import Sidebar from "@/components/dashboard/Sidebar.vue";
// import axios from "axios";
// import Swal from 'sweetalert2';


// const toast = Swal.mixin({
//     toast: true,
//     position: 'top-end',
//     showConfirmButton: false,
//     timer: 3000
// });

// window.toast = toast;
export default {
   components : {
       Navbar,
       Sidebar
   },
   data () {
          return {

          }   
       },
       methods: {

    },
    mounted(){
    }
}
</script>