<template>
    <nav> 
        <!-- header -->
        <v-app-bar dense color="primary" dark app>
            <v-app-bar-nav-icon dark @click="drawer = !drawer" class="third--text"></v-app-bar-nav-icon>
            <h2>Henkel REGHAIA</h2> 
            <v-spacer></v-spacer>
            <h3>Système de Management Intégré</h3>
        </v-app-bar>
        <!-- MENU -->
        <v-navigation-drawer v-model="drawer" app class="primary">
            <v-container fluid fill-height>
              <v-row justify="center" align="center">
                <v-col class="mt-5">
                <v-img class="mx-15" src='../../public/logo.png' max-height="200" max-width="200"></v-img>
                <h4 class="mx-10 list">Test method Viscosity</h4>
              </v-col>
            </v-row>
           <v-list>
            <v-list-item class="lol" dense v-for="link in links" :key="link.text" router :to='link.route'>
                <!-- text -->
                <v-list-item-action>
                    <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
                </v-list-item-action>
            </v-list-item>
           </v-list>
           <!-- ------------------------------------------------------------------------------------------------------------------>
           <v-spacer></v-spacer>
           <span class="mx-10 list"><strong>MOP-QC-ETQ A.1.00</strong> <br> Révision : <strong>00</strong> <br> Date : <strong>20.02.2022</strong></span> 
           </v-container>
        </v-navigation-drawer>
    </nav>
</template>
<script>
export default({
 data () {
      return {
        drawer: true,
        links: [
            {text: '1. Objet'},
            {text: '2. Domaine d\'application'},
             {text: '3. Document de Référence'},
              {text: '4. Définitions et Abréviations'},
              {text: '5. Responsabilités et Autorités'},
               {text: '6. Processus'},
               {text: '7. Annexes'}
                
        ]
      }
    },
})
</script>
<style scoped>
.v-tabs-bar {
    float: left !important;
}
.v-tab {
    text-transform: none !important;
}
.lol:hover {
    background:#96030d ;
  }
.list{
    color: #e6e7e7;
}
</style>