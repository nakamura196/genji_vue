<template>
  <div>
    <Breadcrumbs :items="bh" />
    <v-container id="main" fluid lass="my-5">
      <h2 class="my-5">{{ title }}</h2>
      <!--
      <p class="my-5">
        <nuxt-link
          :to="localePath({ name: 'static-slug', params: { slug: 'face' } })"
          >このページについて</nuxt-link
        >
      </p>
      -->
      <v-simple-table>
        <template #default>
          <thead>
            <tr>
              <th class="text-center py-5">Index</th>
              <th class="text-center py-5">{{ $t('比較') }}（vdiff.js）</th>
              <th v-for="n in items.length" :key="n" class="text-center py-5">
                Book [{{ n }}]: {{ labels[n - 1] }}
              </th>
            </tr>
          </thead>
          <tbody class="text-center">
            <tr v-for="n1 in total" :id="n1" :key="n1">
              <td>[{{ n1 }}]</td>
              <td justify-center>
                <v-img
                  class="mx-auto"
                  contain
                  max-height="200px"
                  max-width="200px"
                  :src="
                    baseUrl +
                    '/data/face/png/' +
                    ('0000' + n1).slice(-4) +
                    '.png'
                  "
                />
                <div class="mt-4">
                  <v-btn
                    color="primary"
                    target="_blank"
                    rounded
                    depressed
                    :href2="getMiradorUrl(n1)"
                    :href="getVDiffUrl(n1, 1, 2)"
                    >{{ $t('比較する') }}
                    <v-icon class="ml-1">mdi-exit-to-app</v-icon
                    >（vdiff.js）</v-btn
                  >
                </div>
              </td>
              <td v-for="n2 in items.length" :key="n2" class="py-5">
                <!-- {{ n1 - 1 < items[n2 - 1].length ? items[n2 - 1][n1 - 1] : '' }} -->

                <small>
                  <v-alert
                    v-if="getItem(n1, n2) && getItem(n1, n2).memo"
                    type="info"
                    >{{ getItem(n1, n2).memo }}</v-alert
                  >
                </small>

                <template v-if="getItem(n1, n2) && getItem(n1, n2)['@id']">
                  <v-img
                    class="mx-auto"
                    contain
                    max-height="200px"
                    max-width="200px"
                    :src="getItem(n1, n2).thumbnail"
                  />
                  <div class="mt-4">
                    <p>
                      <small>{{ getItem(n1, n2)['@id'] }}</small>
                    </p>
                    <a target="_blank" :href="getICVUrl(getItem(n1, n2))"
                      ><!-- {{ getItem(n1, n2).label }}-->
                      {{ $t('閲覧する') }}
                      <v-icon class="primary--text ml-1">mdi-exit-to-app</v-icon
                      >（IIIF Curation Viewer）
                    </a>
                    <small v-if="false">
                      <ul class="mt-2">
                        <template v-for="n3 in items.length">
                          <li
                            v-if="
                              n2 != n3 &&
                              getItem(n1, n3) &&
                              getItem(n1, n3).thumbnail
                            "
                            :key="n3"
                          >
                            <v-tooltip bottom>
                              <template #activator="{ on, attrs }">
                                <a
                                  v-bind="attrs"
                                  :href="getVDiffUrl(n1, n2, n3)"
                                  target="_blank"
                                  v-on="on"
                                >
                                  <!-- {{ labels[n3 - 1] }} と比較（vdiff.js）-->
                                  Book [{{ n3 }}] と比較（vdiff.js）
                                </a>
                              </template>
                              <small>{{ labels[n3 - 1] }}</small>
                            </v-tooltip>
                          </li>
                        </template>
                      </ul>
                    </small>
                  </div>
                </template>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
// import axios from 'axios'
// const { scroller } = require('vue-scrollto/src/scrollTo')
import Breadcrumbs from '~/components/Breadcrumbs.vue'

@Component({
  components: {
    Breadcrumbs,
  },
})
export default class Item extends Vue {
  baseUrl: any = process.env.BASE_URL

  // items: any = []
  // labels: string[] = []
  // total: number = 0

  getItem(n1: number, n2: number) {
    const items = (this as any).items
    return n1 - 1 < items[n2 - 1].length ? items[n2 - 1][n1 - 1] : null
  }

  getICVUrl(member: any) {
    return (
      'http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/?manifest=' +
      member.manifest +
      '&canvas=' +
      member.canvas +
      '&xywh=' +
      member.xywh +
      '&xywh_highlight=border'
    )
  }

  getVDiffUrl(n1: number, n2: number, n3: number) {
    const items = (this as any).items
    const item1 = items[n2 - 1][n1 - 1]
    const item2 = items[n3 - 1][n1 - 1]
    const labels = (this as any).labels
    if (item1 && item1.thumbnail && item2 && item2.thumbnail) {
      return `http://codh.rois.ac.jp/differential-reading/web/?img1=${item1.thumbnail.replace(
        '/200,/',
        '/600,/'
      )}&img1_label=${labels[n2 - 1]}&img2=${item2.thumbnail.replace(
        '/200,/',
        '/600,/'
      )}&img2_label=${labels[n3 - 1]}`
    } else {
      return ''
    }
  }

  getMiradorUrl(n2: number) {
    const items = (this as any).items
    const params: any[] = []
    for (const item of items) {
      if (item.length > n2) {
        const e = item[n2 - 1]
        if (e['@id']) {
          params.push({
            manifest: e.manifest,
            canvas: e['@id'],
          })
        }
      }
    }
    return (
      this.baseUrl +
      '/mirador?params=' +
      encodeURIComponent(JSON.stringify(params)) +
      '&layout=1x' +
      params.length
    )
  }

  async asyncData({ app, $axios }: any): Promise<any> {
    const ids = ['100097415', '100241606']

    const baseUrl = app.context.env.BASE_URL

    const all: any[] = []

    const labels: string[] = []

    let total = 0

    for (const id of ids) {
      const data = await $axios.$get(baseUrl + '/data/face/' + id + '.json')

      const items = []

      labels.push(data.label)

      for (const selection of data.selections) {
        const manifest = selection.within['@id']

        for (const member of selection.members) {
          items.push(member)

          if (!member['@id']) {
            continue
          }

          const spl = member['@id'].split('#xywh=')
          member.canvas = spl[0]
          member.xywh = spl[1]

          member.manifest = manifest
        }
      }

      all.push(items)

      if (items.length > total) {
        total = items.length
      }
    }

    /*
    this.total = total
    this.items = all
    this.labels = labels
    */
    return { total, items: all, labels }
  }

  /*
  async created2() {
    const ids = ['100097415', '100241606']

    const all: any[] = []

    const labels: string[] = []

    let total = 0

    for (const id of ids) {
      const res = await axios.get(this.baseUrl + '/data/face/' + id + '.json')
      const data = res.data
      // console.log({ data })

      const items = []

      labels.push(data.label)

      for (const selection of data.selections) {
        const manifest = selection.within['@id']

        for (const member of selection.members) {
          items.push(member)

          if (!member['@id']) {
            continue
          }

          const spl = member['@id'].split('#xywh=')
          member.canvas = spl[0]
          member.xywh = spl[1]

          member.manifest = manifest
        }
      }

      all.push(items)

      if (items.length > total) {
        total = items.length
      }
    }

    this.total = total
    this.items = all
    this.labels = labels
  }
  */

  get title(): any {
    return this.$t('源氏百人一首（パタパタ顔比較）')
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
        text: this.$t('挿絵画像の比較'),
        disabled: false,
        to: this.localePath({ name: 'picture' }),
        exact: true,
      },
      {
        text: this.title,
      },
    ]
  }
}
</script>
