<template>
  <div>
    <Breadcrumbs :items="bh" />

    <v-container class="my-5">
      <div class="mt-5 mb-5 pb-5">
        <h2>{{ title }}</h2>
      </div>

      <div v-if="items.length > 0">
        <v-row class="mb-10">
          <v-col v-for="(obj, key) in items" :key="key" cols="12" md="6">
            <v-card flat no-body class="mb-4">
              <template v-if="obj.href">
                <a :href="obj.href" target="_blank">
                  <div class="text-center grey lighten-2 pa-10">
                    <v-icon size="50">{{ obj.icon }}</v-icon>
                  </div>
                </a>
                <div class="pa-4">
                  <a :href="obj.href" target="_blank">
                    <h4>{{ obj.label }}</h4>
                  </a>

                  <p v-if="obj.description" class="mt-2 mb-0">
                    {{ obj.description }}
                  </p>

                  <p v-if="obj.help">
                    <nuxt-link :to="obj.help">このページについて</nuxt-link>
                  </p>
                </div>
              </template>
              <template v-else>
                <nuxt-link :to="localePath(obj.path)">
                  <div class="text-center grey lighten-2 pa-10">
                    <v-icon size="50">{{ obj.icon }}</v-icon>
                  </div>
                </nuxt-link>
                <div class="pa-4">
                  <nuxt-link :to="localePath(obj.path)">
                    <h4>{{ obj.label }}</h4>
                  </nuxt-link>

                  <p v-if="obj.description" class="mt-2 mb-0">
                    {{ obj.description }}
                  </p>

                  <p v-if="obj.help" class="mt-2 text-right">
                    <v-btn
                      color="primary darken-2"
                      rounded
                      :to="localePath(obj.help)"
                      depressed
                    >
                      <!--
                      <nuxt-link :to="localePath(obj.help)">{{
                        
                      }}</nuxt-link>
                      -->
                      {{ $t('このページについて') }}
                    </v-btn>
                  </p>
                </div>
              </template>
            </v-card>
          </v-col>
        </v-row>
      </div>
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

  get lang() {
    return this.$i18n.locale
  }

  title: any = this.$t('挿絵画像の比較')

  // items: any = process.env.mainData

  head() {
    const title = this.title
    return {
      titleTemplate: null,
      title,
    }
  }

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

  get items(): any[] {
    return [
      {
        label: this.$t('絵入源氏物語の挿絵比較'),
        path: {
          name: 'picture-eiri',
        },
        description: '「絵入源氏物語」の大本・小本・横本を一覧できます。',
        icon: 'mdi-image',
        help: {
          name: 'picture-slug-about',
          params: {
            slug: 'eiri',
          },
        },
      },
      {
        label: this.$t('源氏百人一首（パタパタ顔比較）'),
        path: {
          name: 'picture-face',
        },
        description: '「源氏百人一首」を対象として、画像の違いを比較できます。',
        icon: 'mdi-face-man',
        help: {
          name: 'picture-slug-about',
          params: {
            slug: 'face',
          },
        },
      },
    ]
  }
}
</script>
