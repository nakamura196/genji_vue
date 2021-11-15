<template>
  <div>
    <Breadcrumbs :items="bh" />
    <v-container class="my-5">
      <h1 class="mb-5">
        {{ page.title }}
      </h1>
      <p>
        <nuxt-link :to="localePath(page.to)">
          {{ $t('ページをみる') }}
        </nuxt-link>
      </p>
      <nuxt-content :document="page" />
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
export default class Item extends Vue {
  baseUrl: any = process.env.BASE_URL

  async asyncData({ app, $content, params }: any): Promise<any> {
    let lang = app.i18n.locale
    if (lang === 'ja') {
      lang = ''
    } else {
      lang = lang + '/'
    }

    try {
      const page = await $content(lang + 'static/' + params.slug).fetch()
      return {
        page,
      }
    } catch (e) {
      const page = await $content('static/' + params.slug).fetch()
      return {
        page,
      }
    }
  }

  get title() {
    return (this as any).page.title
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
        text: this.$t('about_'),
        // disabled: false,
        // to: this.localePath({ name: 'news' }),
        // exact: true,
      },
      {
        text: this.title,
      },
    ]
  }
}
</script>
