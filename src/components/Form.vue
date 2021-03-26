<template>
  <v-row
    class="ma-0 pa-0"
    style="width:100%;height:70%"
    align="center"
  >
    <v-row
      class="ma-0 pa-0"
      style="width:100%"
    >
      <v-text-field
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
    >
      <v-textarea
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
        style="text-transform:none;font-size:20px;font-family:Montserrat;letter-spacing: 0px"
        text
        color="#707070"
        @click="sendEmail()"
      >
        Enviar
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
    methods: {
      validateEmail: function (value) {
        var input = document.createElement('input');

        input.type = 'email';
        input.required = true;
        input.value = value;

        return typeof input.checkValidity === 'function' ? input.checkValidity() : /\S+@\S+\.\S+/.test(value);
      },
      sendEmail: function () {
        if (this.validateEmail(this.email) == true && this.message) {
          var templateParams = {
            email: this.email,
            message: this.message
          };

          emailjs.send('service_8etpp5j', 'template_h955ycq', templateParams)
            .then(function(response) {
               console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
               console.log('FAILED...', error);
            });
        }
      }
    }
  }
</script>

<style lang="sass">

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
