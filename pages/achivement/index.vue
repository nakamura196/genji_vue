<template>
  <div>
    <Breadcrumbs :items="bh" />
    <v-container class="my-5">
      <h1 class="mb-5">{{ title }}</h1>

      <div v-html="page.attributes.body.processed"></div>
    </v-container>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import { Component, Vue } from 'nuxt-property-decorator'
import Breadcrumbs from '~/components/Breadcrumbs.vue'

@Component({
  components: {
    Breadcrumbs,
  },
})
export default class Item extends Vue {
  baseUrl: any = process.env.BASE_URL

  async asyncData({ app }: any): Promise<any> {
    const apikey = process.env.CMS_API_KEY
    const baseUrl = process.env.CMS_BASE_URL

    const lang = app.i18n.locale || 'ja'

    const langs: {
      [key: string]: string
    } = {
      ja: '',
      en: 'en/',
    }

    const url = `${baseUrl}/${langs[lang]}jsonapi/node/page?api-key=${apikey}&filter[field_id]=achivement`

    try {
      const response = await axios.get(url)
      const data = response.data
      const page = data.data

      if (page.length > 0) {
        return {
          page: page[0],
        }
      }
      return {
        page: {},
      }
    } catch (error) {
      return {
        page: {},
      }
    }
  }

  get title() {
    return (this as any).page.attributes.title
  }

  head() {
    const title = this.title
    return {
      title,
    }
  }

  get bh() {
    return [
      {
        text: this.$t('top'),
        disabled: false,
        to: this.localePath({ name: 'index' }),
        exact: true,
      },
      {
        text: this.$t('news'),
        disabled: false,
        to: this.localePath({ name: 'news' }),
        exact: true,
      },
      {
        text: this.title,
      },
    ]
  }
}
</script>
