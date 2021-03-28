<template>
  <v-row
    class="ma-0 pa-0"
    style="position:relative;width:100%;height:70%"
    align="center"
  >
    <v-row
      class="ma-0 pa-0"
      style="width:100%"
    >
      <v-text-field
        :disabled="this.disable"
        :rules="[rules.required, rules.email]"
        class="email"
        label="Email"
        color="#707070"
        outlined
        background-color="#EDEDED"
        width="100%"
        solo
        flat
        v-model="email"
      ></v-text-field>
    </v-row>
    <v-row
      class="ma-0 pa-0"
      style="width:100%"
      align="center"
    >
      <v-textarea
        :disabled="this.disable"
        :rules="[rules.required]"
        v-model="message"
        label="Comentario"
        no-resize
        outlined
        color="#707070"
        background-color="#EDEDED"
        solo
        rows="8"
        row-height="15"
        flat
      ></v-textarea>
    </v-row>

    <v-row
      class="ma-0 pa-0"
      style="width:100%"
    >
      <v-spacer></v-spacer>
        <v-btn
          class="submit"
          :width="this.width"
          v-bind:style="{ color: computedColor }"
          style="text-transform:none;font-size:20px;font-family:Montserrat;letter-spacing: 0px;transition: ease .5s"
          :text="this.text"
          color="#EDEDED"
          @click="sendEmail()"
          depressed
          tile
          v-ripple="false"
        >
          {{this.boton}}
        </v-btn>

    </v-row>

  </v-row>
</template>

<script>
  import emailjs from 'emailjs-com';
  import{ init } from 'emailjs-com';
  init("user_uRTEJMp7CqTbbwVm6yYMz");

  export default {
    data: () => ({
      width: "150px",
      color: '#707070',
      disable: false,
      text: false,
      open: true,
      boton: "Enviar",
      email: null,
      message: null,
      rules: {
        required: value => !!value || 'Requerido',
        counter: value => value.length <= 20 || 'Max 20 characters',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Correo electrónico inválido'
        },
      }
    }),
    computed: {
      computedColor: function () {
        return this.color;
      }
    },
    methods: {
      sleep(sec) {
        return new Promise((resolve) => {
          setTimeout(resolve, sec);
        });
      },
      validateEmail: function (value) {
        var input = document.createElement('input');

        input.type = 'email';
        input.required = true;
        input.value = value;

        return typeof input.checkValidity === 'function' ? input.checkValidity() : /\S+@\S+\.\S+/.test(value);
      },
      async tantan(templateParams) {
        var r = await emailjs.send('service_8etpp5j', 'template_h955ycq', templateParams)
          .then(function(response) {
            console.log(response)
            return true
          }, function(error) {
            console.log(error)
            return false
          });
        return r
      },
      async sendEmail () {

        if (this.validateEmail(this.email) == true && this.message && this.open == true) {
          this.width = "250px"
          this.boton = "Enviando mensaje"
          this.text = true
          var templateParams = {
            email: this.email,
            message: this.message
          };

          var results = await this.tantan(templateParams);
          if (results == true) {
            this.width = "250px"
            this.boton = "Mensaje recibido"
            this.open = false
            this.text = true
            this.color = "green"
            this.disable = true
          } else {
            this.width = "350px"
            this.boton = "Error. Por favor intenta otra vez."
            this.text = false
            this.color = "red"
            await this.sleep(5000)
            this.width = "150px"
            this.open = true
            this.color = "#707070"
            this.text = false
            this.boton = "Enviar"
          }

        } else if (this.open == true) {
          this.width = "250px"
          this.color = "red"
          this.text = true
          this.boton = "Error en los datos"
          await this.sleep(2000)
          this.width = "150px"
          this.color = "#707070"
          this.text = false
          this.boton = "Enviar"
        }
      }
    }
  }
</script>

<style lang="sass">

  .submit
    text-transform: none
    font-size: 20px
    font-family: Montserrat
    letter-spacing: 0px


  .v-input
    color: red !important
    font-family: Montserrat !important
    font-size: 20px !important
    border-radius: 0px !important


  .v-text-field--outlined fieldset
    color: #EDEDED !important
    border-radius: 0px !important
    opacity: .6 !important

  .v-text-field--outlined textarea
    color: #707070 !important
    border-radius: 0px !important


  .cafe
    margin-left: 40px


  .v-label
    color: #707070 !important
    font-family: Montserrat !important
    opacity: .6 !important

</style>
