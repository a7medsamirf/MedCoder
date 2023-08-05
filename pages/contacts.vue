<template>
  <div id="contacts" class="py-20">
    <Title
    :SectionTitle="$t('SectionTitle.contacts-Us')"
    />
    <v-container >
      <u-animate-container>
      <v-row>
            <v-col cols="12" lg="4" md="4" sm="6"
                   v-for="(item, index) in ContactData"
                   :key="index"
            >
              <u-animate
                name="fadeIn"
                :delay="(0.4 * index) + 's'"
                duration="1s"
                :iteration="1"
                :offset="0"
                animateClass="animated"
                :begin="false"
              >
                        <ContactCard
                          :avatar="item.avatar"
                          :title="item.title"
                          :description="item.description"
                         />

              </u-animate>
            </v-col>

          </v-row>

        </u-animate-container>

    </v-container>


    <v-container class="mt-16">
        <v-row>
        <v-col cols="12" lg="6" md="6">
            <v-row>
              <v-col cols="12" md="6" class="py-0">
                <v-text-field
                  class="mb-0"
                  :label="$t('contacts.Your-Name')"
                  required
                  outlined
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6" class="py-0">
                <v-text-field
                  class="mb-0"
                  :label="$t('contacts.mail')"
                  required
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="12" class="py-0">
                <v-text-field
                  class="mb-0"
                  :label="$t('contacts.Subject')"
                  required
                  outlined
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="12" class="py-0">
                <v-textarea
                  class="mb-0"
                  name="input-7-1"
                  :label="$t('contacts.Write-message')"
                  outlined
                  required
                ></v-textarea>
              </v-col>

              <v-col cols="12" md="12" class="py-0">
                <buttonV1 />
         <!--        <v-btn
                   outlined
                  x-large
                   color="primary"
                  class="button figs-btn  rounded-0"
                >
                  {{ $t('contacts.Send-Message') }}

                </v-btn> -->
              </v-col>
            </v-row>
          </v-col>

               <!----- Start Map Location ----->
               <v-col class="py-0" cols="12" lg="6" md="6">
                    <div class="map-container fl-wrap">
                      <div id="map-single">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220676.97262028238!2d31.287668169710557!3d30.077765111656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2z2KfZhNmC2KfZh9ix2KnYjCDZhdit2KfZgdi42Kkg2KfZhNmC2KfZh9ix2KnigKw!5e1!3m2!1sar!2seg!4v1684586368164!5m2!1sar!2seg" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                      </div>
                    </div>

                   </v-col>
                         <!----- End Map Location ----->
        </v-row>
      </v-container>


  </div>
</template>

<script>
import buttonV1 from '../components/buttons/button-V1.vue'
import Title from '../components/Title/Title.vue';
import imgAPI from '../static/images/imgAPI';
import ContactCard from "../components/Cards/ContactCard.vue";
export default {
    name: "contacts",
    components: {
        Title,
        ContactCard,
        buttonV1
    },
    data(){
    return {
      title: this.$t('nav.contacts'),
      imgAPI: imgAPI,
      ContactData: [
        { avatar: imgAPI.svg[0], title: 'Mails', description: 'info@medHouse.com', number: '01',},
        {avatar: imgAPI.svg[5],title: 'Phones',description: '0020123456789',number: '02',},
        {avatar: imgAPI.svg[1],title: 'Address',description: 'contacts.location',number: '03',},
      ]
    }
  },
  head() {
  return {
    title: this.title,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Home page description'
      }
    ]
  }
}
}
</script>

<style>
.map-container:before {
    content: '';
    position: absolute;
    bottom: -10px;
    left: -10px;
    width: 50%;
    height: 50%;
    z-index: 1;
    background: var(--custom-text-color);
}
#map-single {
    overflow: hidden;
    z-index: 2;
    position: relative;
}
.fl-wrap {
    position: relative;
}
</style>


