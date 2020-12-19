<template>
  <div>
    <v-container>
      <v-card class="my-5" flat>
        <v-card-title>
          <h2>
            {{ $t('contact') }}
            <template v-if="$i18n.locale == 'en'"
              >(Written in Japanese)</template
            >
          </h2>
        </v-card-title>
        <v-card-text>
          <div class="text--primary">
            <p>
              データ連携や作業協力を検討されている方は、下記の問い合わせ先までご連絡をお願いいたします。
            </p>
            <p>
              お問合せの内容によっては回答できない場合や時間を要する場合があること、また、ご要望に沿えない場合もあることを、あらかじめご了承ください。
            </p>
            <p>
              入力していただいた個人情報は、今回の問合せ手続のみに使用し、他の目的には使用しません。
            </p>
          </div>
        </v-card-text>
        <v-card-title>
          <h3>
            お問い合わせ先
          </h3>
        </v-card-title>
        <v-card-text>
          <div class="text--primary">
            <p>
              裏源氏勉強会
            </p>
            <a href="mailto:digital-genji-public@googlegroups.com"
              >digital-genji-public@googlegroups.com</a
            >
          </div>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Page extends Vue {
  head() {
    return {
      title: this.$t('contact'),
    }
  }

  baseUrl: string = process.env.BASE_URL || ''
}
</script>
