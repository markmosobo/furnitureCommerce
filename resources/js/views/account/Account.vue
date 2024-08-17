<template>
   <!DOCTYPE html>
<html lang="en">
   

   <body>
      <Header />

      <main>
         <!-- section -->
         <section>
            <div class="container">
               <!-- row -->
               <div class="row">
                  <!-- col -->
                  <div class="col-12">
                     <div class="d-flex justify-content-between align-items-center d-md-none py-4">
                        <!-- heading -->
                        <h3 class="fs-5 mb-0">Account Setting</h3>
                        <!-- button -->
                        <button
                           class="btn btn-outline-gray-400 text-muted d-md-none btn-icon btn-sm ms-3"
                           type="button"
                           data-bs-toggle="offcanvas"
                           data-bs-target="#offcanvasAccount"
                           aria-controls="offcanvasAccount">
                           <i class="bi bi-text-indent-left fs-3"></i>
                        </button>
                     </div>
                  </div>
                  <!-- col -->
                  <SideNav />
                  <div class="col-lg-9 col-md-8 col-12">
                     <slot></slot>
                  </div>
               </div>
            </div>
         </section>
      </main>

      <!-- modal -->

      <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasAccount" aria-labelledby="offcanvasAccountLabel">
         <!-- offcanvas header -->
         <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasAccountLabel">Offcanvas</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
         </div>
         <!-- offcanvas body -->
         <CanvasNav />
      </div>

      <!-- Footer -->
      <!-- footer -->
      <Footer />

   </body>


</html>

</template>


<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import SideNav from '@/views/account/SideNav.vue'
import CanvasNav from '@/views/account/CanvasNav.vue'
    export default {
      name: 'Home',
      components: {
        Header,
        Footer,
        SideNav,
        CanvasNav
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