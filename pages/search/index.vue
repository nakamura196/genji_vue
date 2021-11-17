<template>
  <div>
    <Breadcrumbs :items="bh" />
    <v-container class="my-5">
      <h2>
        {{ $t(title) }}
      </h2>

      <v-row class="my-5">
        <v-col cols="12" md="6">
          <v-card no-body flat>
            <nuxt-link
              :to="
                localePath({
                  name: 'search-id-vol',
                  params: {
                    id: 'taisei',
                    vol: 1,
                  },
                })
              "
            >
              <div class="text-center grey lighten-2 pa-10">
                <v-icon size="50">{{ 'mdi-book-open' }}</v-icon>
              </div>
            </nuxt-link>
            <div class="pa-4">
              <nuxt-link
                :to="
                  localePath({
                    name: 'search-id-vol',
                    params: {
                      id: 'taisei',
                      vol: 1,
                    },
                  })
                "
              >
                <h4>{{ $t('校異源氏物語') }}</h4>
              </nuxt-link>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card no-body flat>
            <nuxt-link
              :to="
                localePath({
                  name: 'search-id-vol',
                  params: {
                    id: 'zenshu',
                    vol: 1,
                  },
                })
              "
            >
              <div class="text-center grey lighten-2 pa-10">
                <v-icon size="50">{{ 'mdi-book-open' }}</v-icon>
              </div>
            </nuxt-link>
            <div class="pa-4">
              <nuxt-link
                :to="
                  localePath({
                    name: 'search-id-vol',
                    params: {
                      id: 'zenshu',
                      vol: 1,
                    },
                  })
                "
              >
                <h4>{{ $t('新編日本古典文学全集') }}</h4>
              </nuxt-link>
            </div>
          </v-card>
        </v-col>
      </v-row>
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
export default class List extends Vue {
  title: any = this.$t('browse_by_page')
  head() {
    return {
      title: this.title,
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
}
</script>
