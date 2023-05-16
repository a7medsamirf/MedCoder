<template>
    <div>
  
      <div id="footer" class="pa-0">
        <div class="pt-20">
          <v-divider class="white--text"></v-divider>
          <v-container>
            <v-row>
              <v-col
                class="lighten-2 text-center"
                cols="12"
              >
             
                <div class="py-4" >
                  {{ $t('footer.Copyright') }}
                  {{ new Date().getFullYear() }} © <strong>MedCoder</strong>. 
                  {{ $t('footer.reserved') }}
                </div>
                </v-col>
  
            </v-row>
          </v-container>
  
        </div>
  
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    components: {  },
    name: "The-Footer",
    data: () => ({

  
    }),
  }
  
  
  </script>
  
  <style scoped lang="scss">

  </style>