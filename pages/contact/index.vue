<template>
  <div>
    <Breadcrumbs :items="bh" />
    <v-container>
      <v-card class="my-5" flat>
        <v-card-title>
          <h2>
            {{ $t('contact') }}
          </h2>
        </v-card-title>
        <v-card-text>
          <div class="text--primary">
            <p>{{ $t('contact_desc1') }}</p>
            <p>{{ $t('contact_desc2') }}</p>
            <p>{{ $t('contact_desc3') }}</p>
          </div>
        </v-card-text>
        <v-card-title>
          <h3>{{ $t('お問い合わせ先') }}</h3>
        </v-card-title>
        <v-card-text>
          <div class="text--primary">
            <p>{{ $t('裏源氏勉強会') }}</p>
            <p>
              <a href="mailto:digital-genji-public@googlegroups.com"
                >digital-genji-public@googlegroups.com</a
              >
            </p>
            <p>{{ $t('裏源氏勉強会説明') }}</p>
          </div>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Breadcrumbs from '~/components/Breadcrumbs.vue'

@Component({
  components: {
    Breadcrumbs,
  },
})
export default class Page extends Vue {
  title: any = this.$t('contact')

  head() {
    return {
      title: this.title,
    }
  }

  baseUrl: string = process.env.BASE_URL || ''

  get bh(): any[] {
    return [
      {
        text: this.$t('top'),
        disabled: false,
        to: this.localePath({ name: 'index' }),
        exact: true,
      },
      {
        text: this.title,
      },
    ]
  }
}
</script>
