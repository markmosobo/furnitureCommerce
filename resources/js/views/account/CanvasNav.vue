<template>
<div class="offcanvas-body">
            <ul class="nav flex-column nav-pills nav-pills-dark">
               <!-- nav item -->
               <li class="nav-item">
                  <router-link to="/accountorders" custom v-slot="{ href, navigate, isActive }">
                  <a
                    :href="href"
                    :class="{ active: isActive }"
                    class="nav-link"
                    aria-current="page"
                    @click="navigate"
                  >
                     <i class="feather-icon icon-shopping-bag me-2"></i>
                     Your Orders
                  </a>
                  </router-link>
               </li>
               <!-- nav item -->
               <li class="nav-item">
                  <router-link to="/accountsettings" custom v-slot="{ href, navigate, isActive }">
                  <a
                    :href="href"
                    :class="{ active: isActive }"
                    class="nav-link"
                    aria-current="page"
                    @click="navigate"
                  >
                     <i class="feather-icon icon-settings me-2"></i>
                     Settings
                  </a>
                  </router-link>
               </li>
               <!-- nav item -->
               <li class="nav-item">
                  <router-link to="/accountaddress" custom v-slot="{ href, navigate, isActive }">
                  <a
                    :href="href"
                    :class="{ active: isActive }"
                    class="nav-link"
                    aria-current="page"
                    @click="navigate"
                  >
                     <i class="feather-icon icon-map-pin me-2"></i>
                     Address
                  </a>
                  </router-link>
               </li>
               <!-- nav item -->
               <li class="nav-item">
                  <router-link to="/accountpayment" custom v-slot="{ href, navigate, isActive }">
                  <a
                    :href="href"
                    :class="{ active: isActive }"
                    class="nav-link"
                    aria-current="page"
                    @click="navigate"
                  >
                     <i class="feather-icon icon-credit-card me-2"></i>
                     Payment Method
                  </a>
                  </router-link>
               </li>
               <!-- nav item -->
               <li class="nav-item">
                  <router-link to="/accountnotification" custom v-slot="{ href, navigate, isActive }">
                  <a
                    :href="href"
                    :class="{ active: isActive }"
                    class="nav-link"
                    aria-current="page"
                    @click="navigate"
                  >
                     <i class="feather-icon icon-bell me-2"></i>
                     Notification
                  </a>
                  </router-link>
               </li>
            </ul>
            <hr class="my-6" />
            <div>
               <!-- nav  -->
               <ul class="nav flex-column nav-pills nav-pills-dark">
                  <!-- nav item -->
                  <li class="nav-item">
                     <a class="nav-link" href="../index.html">
                        <i class="feather-icon icon-log-out me-2"></i>
                        Log out
                     </a>
                  </li>
               </ul>
            </div>
         </div>
</template>


<script>

export default {
  name: "CanvasNav",
  data(){
    return {

    }
  },
  methods: {
    
  },
  mounted(){
  }

};	
</script>