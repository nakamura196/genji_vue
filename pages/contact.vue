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
              お問い合わせの内容によっては回答できない場合や時間を要する場合があること、また、ご要望に沿えない場合もあることを、あらかじめご了承ください。
            </p>
            <p>
              入力していただいた個人情報は、今回のお問い合わせ手続のみに使用し、他の目的には使用しません。
            </p>
          </div>
        </v-card-text>
        <v-card-title>
          <h3>お問い合わせ先</h3>
        </v-card-title>
        <v-card-text>
          <div class="text--primary">
            <p>裏源氏勉強会</p>
            <p>
              <a href="mailto:digital-genji-public@googlegroups.com"
                >digital-genji-public@googlegroups.com</a
              >
            </p>
            <p>
              この勉強会は、東京大学総合図書館所蔵『源氏物語』の公開を契機に始まりました。東京大学総合図書館所蔵『源氏物語』の公開を「表（オモテ）源氏」とするなら、その可能性をいろいろと検討する私たちの取組は「裏（ウラ）源氏」という意味から、「裏源氏勉強会」を通称としています。
            </p>
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
