<template>
   <Main>
      <div class="container">
               <div class="row mb-8">
                  <div class="col-md-12">
                     <!-- page header -->
                     <div class="d-flex justify-content-between align-items-center">
                        <div>
                           <h2>Vendors</h2>
                           <!-- breacrumb -->
                           <nav aria-label="breadcrumb">
                              <ol class="breadcrumb mb-0">
                                 <li class="breadcrumb-item"><a href="#" class="text-inherit">Dashboard</a></li>
                                 <li class="breadcrumb-item active" aria-current="page">Vendors</li>
                              </ol>
                           </nav>
                        </div>
                        <!-- button -->
                        <div>
                           <router-link to="/vendors" custom v-slot="{ href, navigate, isActive }">
                              <a
                                :href="href"
                                :class="{ active: isActive }"
                                class="btn btn-primary btn-icon"
                                @click="navigate"
                              >
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-grid" viewBox="0 0 16 16">
                                 <path
                                    d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
                              </svg>
                              </a>
                              </router-link>
                           <router-link to="/sellers" custom v-slot="{ href, navigate, isActive }">
                              <a
                                :href="href"
                                :class="{ active: isActive }"
                                class="btn btn-light btn-icon"
                                @click="navigate"
                              >
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-list-task" viewBox="0 0 16 16">
                                 <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z" />
                                 <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
                                 <path
                                    fill-rule="evenodd"
                                    d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z" />
                              </svg>
                              </a>
                           </router-link>
                        </div>
                     </div>
                  </div>
               </div>
               <!-- row -->
               <div class="row">
                  <div class="col-xl-12 col-12 mb-5">
                     <div class="card h-100 card-lg">
                        <div class="p-6">
                           <div class="row">
                              <!-- search bar -->
                              <div class="col-md-4 col-12">
                                 <form class="d-flex" role="search">
                                    <input class="form-control me-2" type="search" placeholder="Search Seller" aria-label="Search" />
                                 </form>
                              </div>
                           </div>
                        </div>
                        <!-- card body -->
                        <div class="card-body p-0">
                           <!-- table -->
                           <div class="table-responsive">
                              <table class="table table-centered table-hover text-nowrap table-borderless mb-0">
                                 <thead class="bg-light">
                                    <tr>
                                       <th>Seller Id</th>
                                       <th>Store Name</th>
                                       <th>Email</th>
                                       <th>Gross Sale</th>
                                       <th>Earning</th>
                                       <th></th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    <tr>
                                       <td>#010</td>
                                       <td><a href="#" class="text-reset">E-Grocery Super Market</a></td>
                                       <td>egrocery@dayrep.com</td>

                                       <td>$200.00</td>
                                       <td>$60.00</td>
                                       <td>
                                          <div class="dropdown">
                                             <a href="#" class="text-reset" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i class="feather-icon icon-more-vertical fs-5"></i>
                                             </a>
                                             <ul class="dropdown-menu">
                                                <li>
                                                   <a class="dropdown-item" href="#">
                                                      <i class="bi bi-trash me-3"></i>
                                                      Delete
                                                   </a>
                                                </li>
                                                <li>
                                                   <a class="dropdown-item" href="#">
                                                      <i class="bi bi-pencil-square me-3"></i>
                                                      Edit
                                                   </a>
                                                </li>
                                             </ul>
                                          </div>
                                       </td>
                                    </tr>
                                 </tbody>
                              </table>
                           </div>
                        </div>
                        <div class="border-top d-md-flex justify-content-between align-items-center p-6">
                           <span>Showing 1 to 8 of 12 entries</span>
                           <nav class="mt-2 mt-md-0">
                              <ul class="pagination mb-0">
                                 <li class="page-item disabled"><a class="page-link" href="#!">Previous</a></li>
                                 <li class="page-item"><a class="page-link active" href="#!">1</a></li>
                                 <li class="page-item"><a class="page-link" href="#!">2</a></li>
                                 <li class="page-item"><a class="page-link" href="#!">3</a></li>
                                 <li class="page-item"><a class="page-link" href="#!">Next</a></li>
                              </ul>
                           </nav>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
   </Main>
</template>

<script>
import Main from "@/components/dashboard/Main.vue";

export default {
   components : {
      Main
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