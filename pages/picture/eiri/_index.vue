<template>
  <div>
    <Breadcrumbs :items="bh" />
    <v-container id="main" fluid lass="my-5">
      <h2 class="my-5">{{ title }}</h2>
      <p class="my-5">
        <a
          href="https://docs.google.com/document/d/1nTb1pIBTuc3WQwRBltT6r7k8U6_f77Nqnmh1zK2nzMw/edit?usp=sharing"
          target="_blank"
          >このページについて
          <v-icon class="primary--text ml-1">mdi-exit-to-app</v-icon></a
        >
      </p>

      <v-row class="">
        <v-col cols="12" md="4">
          <v-select
            v-model="vol"
            dense
            :items="[]"
            hide-details
            filled
            rounded
            label="巻数・巻号"
          ></v-select>
        </v-col>

        <v-col cols="12" md="4">
          <v-select
            v-model="vol"
            :items="[]"
            dense
            hide-details
            filled
            rounded
            label="錯簡"
          ></v-select>
        </v-col>

        <v-col cols="12" md="4">
          <v-select
            v-model="size"
            :items="[10, 50, total]"
            dense
            hide-details
            filled
            rounded
            label="ResultPerPage"
          ></v-select>
        </v-col>
      </v-row>

      <div class="text-center my-10">
        <v-pagination
          v-model="page"
          :total-visible="7"
          :length="length"
        ></v-pagination>
      </div>

      <v-row>
        <v-col cols="12" md="1" class="text-center"
          >Index<br />（Mirador）</v-col
        >
        <v-col cols="12" md="2" class="text-center">代表番号・巻数・巻名</v-col>
        <v-col v-for="n in items.length" :key="n" cols="12" md="3">
          Book [{{ n }}]: <br />
          <a :href="urls[n - 1]" target="_blank"
            >{{ labels[n - 1] }}
            <v-icon class="primary--text ml-1">mdi-exit-to-app</v-icon></a
          >
        </v-col>
      </v-row>
      <v-row
        v-for="n1 in aaa /*total*/"
        :id="n1"
        :key="n1"
        :style="n1 % 2 === 1 ? 'background-color: #ECEFF1' : ''"
        class="py-4"
      >
        <v-col cols="12" md="1" class="text-center"
          >[{{ n1 }}] <br /><v-btn
            class="mt-4"
            color="primary"
            rounded
            depressed
            target="_blank"
            :href="getMiradorUrl(n1)"
            >{{ $t('比較する') }}
            <v-icon class="ml-1">mdi-exit-to-app</v-icon></v-btn
          ></v-col
        >
        <v-col cols="12" md="2" class="text-center">[1]・1巻・きりつぼ</v-col>
        <v-col v-for="n2 in items.length" :key="n2" cols="12" md="3">
          <v-chip
            v-if="getItem(n1, n2) && getItem(n1, n2).memo"
            class="mb-4"
            text-color="white"
            color="warning"
            small
            >{{ getItem(n1, n2).memo }}</v-chip
          >
          <template v-if="getItem(n1, n2) && getItem(n1, n2)['@id']">
            <div style="height: 200px">
              <v-img
                class="mx-auto"
                contain
                max-height="200px"
                max-width="200px"
                :src="getItem(n1, n2).thumbnail"
              />
            </div>
            <div class="mt-4">
              <p style="word-break: break-all">
                <small>{{ getItem(n1, n2)['@id'] }}</small>
              </p>
              <a target="_blank" :href="getICVUrl(getItem(n1, n2))"
                ><!-- {{ getItem(n1, n2).label }}-->
                {{ $t('閲覧する') }}（IIIF Curation Viewer）
              </a>
              <small>
                <ul class="mt-2">
                  <template v-for="n3 in items.length">
                    <li
                      v-if="
                        n2 != n3 && getItem(n1, n3) && getItem(n1, n3).thumbnail
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
                            {{ $t('比較') }}: Book [{{ n3 }}] （vdiff.js）
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
        </v-col>
        <v-col v-if="false" cols="2" class="text-center"> </v-col>
      </v-row>

      <div class="text-center my-10">
        <v-pagination
          v-model="page"
          :total-visible="7"
          :length="length"
        ></v-pagination>
      </div>

      <v-simple-table v-if="false">
        <template #default>
          <thead>
            <tr>
              <th class="text-center py-5">Index</th>
              <th v-for="n in items.length" :key="n" class="text-center py-5">
                Book [{{ n }}]: {{ labels[n - 1] }}
              </th>
              <th class="text-center py-5">比較（Mirador）</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="n1 in 10 /*total*/" :id="n1" :key="n1">
              <td>[{{ n1 }}]</td>
              <td v-for="n2 in items.length" :key="n2" class="py-5">
                <!-- {{ n1 - 1 < items[n2 - 1].length ? items[n2 - 1][n1 - 1] : '' }} -->

                <v-chip
                  v-if="getItem(n1, n2) && getItem(n1, n2).memo"
                  class="mb-4"
                  text-color="white"
                  color="warning"
                  small
                  >{{ getItem(n1, n2).memo }}</v-chip
                >

                <template v-if="getItem(n1, n2) && getItem(n1, n2)['@id']">
                  <v-img
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
                      拡大して見る（IIIF Curation Viewer）
                    </a>
                    <small>
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
              <td>
                <v-btn color="primary" target="_blank" :href="getMiradorUrl(n1)"
                  >比較</v-btn
                >
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'
import axios from 'axios'
import Breadcrumbs from '~/components/Breadcrumbs.vue'

@Component({
  components: {
    Breadcrumbs,
  },
})
export default class Item extends Vue {
  baseUrl: any = process.env.BASE_URL

  items: any = []
  labels: string[] = []
  total: number = 0

  page: number = 1

  size: number = -1

  vol: any = null

  urls: string[] = [
    'https://kotenseki.nijl.ac.jp/biblio/200003803',
    'https://dl.ndl.go.jp/info:ndljp/pid/2607621',
    'https://dl.ndl.go.jp/info:ndljp/pid/2607789',
  ]

  get length() {
    const length = Math.ceil(this.total / this.size)
    return length
  }

  @Watch('page')
  watchPage(val: any) {
    console.log('watchPage')
    const query = JSON.parse(JSON.stringify(this.$route.query))
    query.page = val

    this.$router.push(
      this.localePath({
        name: 'eiri',
        query,
      })
    )
  }

  @Watch('size')
  watchSize(val: any, oldValue: any) {
    console.log('watchSize')
    // 初期の場合は非対応
    if (oldValue === -1) {
      return
    }
    const query = JSON.parse(JSON.stringify(this.$route.query))
    query.size = val
    query.page = 1

    this.$router.push(
      this.localePath({
        name: 'eiri',
        query,
      })
    )
  }

  @Watch('$route')
  watchRoute(newValue: any, oldValue: any) {
    console.log('watchRoute')
    const n2 = JSON.parse(JSON.stringify(newValue.query))
    const o2 = JSON.parse(JSON.stringify(oldValue.query))
    delete n2.page
    delete o2.page
    if (JSON.stringify(n2) !== JSON.stringify(o2)) {
      this.page = 1
    }

    ;(this as any).$vuetify.goTo(0)
  }

  getItem(n1: number, n2: number) {
    const items = this.items
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
    const items = this.items
    const item1 = items[n2 - 1][n1 - 1]
    const item2 = items[n3 - 1][n1 - 1]
    const labels = this.labels
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
    const items = this.items
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

  async created() {
    const query = this.$route.query

    const size = Number(query.size) || 10
    this.size = size

    const page = Number(query.page) || this.page
    this.page = page

    // ----

    const ids = ['200003803', '2607621', '2607789']

    const all: any[] = []

    const labels: string[] = []

    let total = 0

    for (const id of ids) {
      const res = await axios.get(
        this.baseUrl + '/data/picture/eiri/' + id + '/curation3.json'
      )
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

  /*
  mounted() {
    const hash = this.$route.hash.replace('#', '')
    console.log({ hash })

    const scrollTo = scroller()

    setTimeout(() => {
      console.log('aaa')
      scrollTo(hash, 500, {
        container: '#main',
        y: true,
      })
    }, 1000)
  }
  */

  get title(): any {
    return this.$t('絵入源氏物語の挿絵比較')
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

  get aaa() {
    const size = this.size
    const page = this.page
    const start = size * (page - 1) + 1
    let end = size * page + 1
    const total = this.total
    if (end > total) {
      end = total + 1
    }
    const aaa = []
    for (let i = start; i < end; i++) {
      aaa.push(i)
    }
    return aaa
  }
}
</script>
