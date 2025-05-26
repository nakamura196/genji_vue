<template>
  <div>
    <Breadcrumbs :items="bh" />
    <v-container id="main" fluid lass="my-5">
      <h2 class="my-5">{{ title }}</h2>
      <p class="my-5">
        <v-btn
          color="primary darken-2"
          rounded
          :to="
            localePath({
              name: 'picture-slug-about',
              params: { slug: 'eiri' },
            })
          "
          depressed
        >
          <!--
                      <nuxt-link :to="localePath(obj.help)">{{
                        
                      }}</nuxt-link>
                      -->
          {{ $t('このページについて') }}
        </v-btn>
      </p>
      <!--
      <p class="my-5">
        <a
          href="https://docs.google.com/document/d/1nTb1pIBTuc3WQwRBltT6r7k8U6_f77Nqnmh1zK2nzMw/edit?usp=sharing"
          target="_blank"
          >{{ $t('このページについて') }}
          <v-icon class="primary--text ml-1">mdi-open-in-new</v-icon></a
        >
      </p>
      -->

      <v-row align="center">
        <v-col cols="6" md="3">
          <v-btn
            fab
            depressed
            :color="isAdvanced ? 'primary' : 'grey lighten-2'"
            x-small
            class="mr-2"
            @click="isAdvanced = !isAdvanced"
            ><v-icon>{{ 'mdi-menu' }}</v-icon></v-btn
          >
          {{ total }}
          <!-- {{ $t('results') }} -->
          / {{ (page - 1) * size + 1 }} -
          {{ Math.min(total, page * size) }}
        </v-col>

        <template v-if="isAdvanced">
          <v-col cols="6" md="5">
            <v-select
              v-model="vol"
              multiple
              :items="options"
              hide-details
              filled
              rounded
              :label="$t('巻数・巻名')"
            ></v-select>
          </v-col>

          <v-col cols="6" md="2">
            <v-select
              v-model="error"
              :items="errors"
              hide-details
              filled
              rounded
              label="錯簡の有無"
            ></v-select>
          </v-col>

          <v-col cols="6" md="2">
            <v-select
              v-model="size"
              :items="[10, 50, 100, { text: $t('all'), value: '250' }]"
              hide-details
              filled
              rounded
              :label="$t('ResultPerPage')"
            ></v-select>
          </v-col>
        </template>
      </v-row>

      <div v-if="isAdvanced" class="text-center my-10">
        <v-pagination
          v-model="page"
          :total-visible="7"
          :length="length"
        ></v-pagination>
      </div>

      <v-row>
        <v-col cols="12" md="3" class="text-center"
          >Index {{ $t('巻数・巻名') }}</v-col
        >
        <!-- <v-col cols="12" md="2" class="text-center"></v-col> -->
        <v-col
          v-for="n in items.length"
          :key="n"
          class="text-center"
          cols="12"
          md="3"
        >
          Book [{{ n }}]:
          <a :href="urls[n - 1]" target="_blank"
            >{{ labels[n - 1] }}
            <v-icon class="primary--text ml-1">mdi-open-in-new</v-icon></a
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
        <v-col cols="12" md="3" class="text-center"
          >[{{ items2[0][n1 - 1].index }}]
          {{ volAndNames[items2[0][n1 - 1].index - 1].vol }}巻・{{
            volAndNames[items2[0][n1 - 1].index - 1].name
          }}<br /><v-btn
            class="mt-4"
            color="primary"
            rounded
            depressed
            target="_blank"
            :href="getMiradorUrl(items2[0][n1 - 1].index)"
            >{{ $t('比較') }}
            <v-icon class="ml-1">mdi-open-in-new</v-icon></v-btn
          >
        </v-col>
        <!-- <v-col cols="12" md="2" class="text-center"> </v-col> -->
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
                {{ $t('閲覧する')
                }}<v-icon class="primary--text ml-1">mdi-open-in-new</v-icon
                >（IIIF Curation Viewer）
              </a>
              <small v-if="false">
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
                            {{ $t('比較する') }}: Book [{{ n3 }}] （vdiff.js）
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

  items2: any = []

  labels: string[] = []
  total: number = 0

  page: number = 1

  size: number = -1

  vol: any = []

  get isMobile(): boolean {
    return ['xs', 'sm', 'md'].includes(this.$vuetify.breakpoint.name)
  }

  isAdvanced: boolean = false

  error: any = 'すべて'
  errors: string[] = ['すべて', '錯簡']

  urls: string[] = [
    'https://kokusho.nijl.ac.jp/biblio/200003803',
    'https://dl.ndl.go.jp/info:ndljp/pid/2607621',
    'https://dl.ndl.go.jp/info:ndljp/pid/2607789',
  ]

  get length() {
    const length = Math.ceil(this.total / this.size)
    return length
  }

  @Watch('page')
  watchPage(val: any) {
    const query = JSON.parse(JSON.stringify(this.$route.query))
    query.page = val

    this.$router.push(
      this.localePath({
        name: 'picture-eiri',
        query,
      })
    )
  }

  @Watch('error')
  watchError(val: any) {
    const query = JSON.parse(JSON.stringify(this.$route.query))
    query.error = val
    query.page = 1

    this.$router.push(
      this.localePath({
        name: 'picture-eiri',
        query,
      })
    )
  }

  @Watch('vol')
  watchVol(val: any) {
    const query = JSON.parse(JSON.stringify(this.$route.query))
    query.vol = val
    query.page = 1

    this.$router.push(
      this.localePath({
        name: 'picture-eiri',
        query,
      })
    )
  }

  @Watch('size')
  watchSize(val: any, oldValue: any) {
    // 初期の場合は非対応
    if (oldValue === -1) {
      return
    }
    const query = JSON.parse(JSON.stringify(this.$route.query))
    query.size = val
    query.page = 1

    this.$router.push(
      this.localePath({
        name: 'picture-eiri',
        query,
      })
    )
  }

  @Watch('$route')
  watchRoute(newValue: any, oldValue: any) {
    const n2 = JSON.parse(JSON.stringify(newValue.query))
    const o2 = JSON.parse(JSON.stringify(oldValue.query))
    delete n2.page
    delete o2.page
    if (JSON.stringify(n2) !== JSON.stringify(o2)) {
      this.page = 1
    }

    ;(this as any).$vuetify.goTo(0)

    this.search()
  }

  getItem(n1: number, n2: number) {
    const items = this.items2
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
      return `http://codh.rois.ac.jp/software/vdiffjs/demo/?img1=${item1.thumbnail.replace(
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
    this.isAdvanced = !this.isMobile

    // ----

    const query = this.$route.query

    const size = Number(query.size) || 10
    this.size = size

    const page = Number(query.page) || this.page
    this.page = page

    const error = query.error || this.error
    this.error = error

    let vol = query.vol || this.vol
    if (typeof vol === 'string') {
      vol = [vol]
    }
    this.vol = vol

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

      const items = []

      labels.push(data.label)

      for (const selection of data.selections) {
        const manifest = selection.within['@id']

        for (let i = 0; i < selection.members.length; i++) {
          const member = selection.members[i]
          items.push(member)

          if (!member['@id']) {
            continue
          }

          const spl = member['@id'].split('#xywh=')
          member.canvas = spl[0]
          member.xywh = spl[1]

          member.index = i + 1

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

    // this.items2 = this.items

    this.search()
  }

  search() {
    const items = JSON.parse(JSON.stringify(this.items))

    const items2 = []

    const indexes: number[] = []

    const error = this.error

    const volsConf: any = this.vols
    let vols: any = this.$route.query.vol || []

    if (typeof vols === 'string') {
      vols = [vols]
    }

    let filterdIndexes: any[] = []
    for (const vol of vols) {
      filterdIndexes = filterdIndexes.concat(volsConf[vol])
    }

    for (const members of items) {
      for (let i = 0; i < members.length; i++) {
        const member = members[i]

        if (error === '錯簡' && !member.memo) {
          continue
        }

        if (filterdIndexes.length !== 0 && !filterdIndexes.includes(i + 1)) {
          continue
        }

        if (!indexes.includes(i)) {
          indexes.push(i)
        }
      }
    }

    if (indexes.length === 0) {
      // items2 = items
    } else {
      for (const members of items) {
        const members2 = []
        for (const i of indexes) {
          const member = members[i]
          members2.push(member)
        }
        items2.push(members2)
      }
    }

    this.items2 = items2

    if (items2.length > 0) {
      this.total = items2[0].length
    } else {
      this.total = 0
    }
  }

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

  volAndNames: any = [
    {
      index: 1,
      vol: 1,
      name: '桐壺',
    },
    {
      index: 2,
      vol: 1,
      name: '桐壺',
    },
    {
      index: 3,
      vol: 1,
      name: '桐壺',
    },
    {
      index: 4,
      vol: 1,
      name: '桐壺',
    },
    {
      index: 5,
      vol: 1,
      name: '桐壺',
    },
    {
      index: 6,
      vol: 2,
      name: '帚木',
    },
    {
      index: 7,
      vol: 2,
      name: '帚木',
    },
    {
      index: 8,
      vol: 2,
      name: '帚木',
    },
    {
      index: 9,
      vol: 2,
      name: '帚木',
    },
    {
      index: 10,
      vol: 2,
      name: '帚木',
    },
    {
      index: 11,
      vol: 2,
      name: '帚木',
    },
    {
      index: 12,
      vol: 2,
      name: '帚木',
    },
    {
      index: 13,
      vol: 2,
      name: '帚木',
    },
    {
      index: 14,
      vol: 3,
      name: '空蝉',
    },
    {
      index: 15,
      vol: 3,
      name: '空蝉',
    },
    {
      index: 16,
      vol: 4,
      name: '夕顔',
    },
    {
      index: 17,
      vol: 4,
      name: '夕顔',
    },
    {
      index: 18,
      vol: 4,
      name: '夕顔',
    },
    {
      index: 19,
      vol: 4,
      name: '夕顔',
    },
    {
      index: 20,
      vol: 4,
      name: '夕顔',
    },
    {
      index: 21,
      vol: 4,
      name: '夕顔',
    },
    {
      index: 22,
      vol: 4,
      name: '夕顔',
    },
    {
      index: 23,
      vol: 5,
      name: '若紫',
    },
    {
      index: 24,
      vol: 5,
      name: '若紫',
    },
    {
      index: 25,
      vol: 5,
      name: '若紫',
    },
    {
      index: 26,
      vol: 5,
      name: '若紫',
    },
    {
      index: 27,
      vol: 5,
      name: '若紫',
    },
    {
      index: 28,
      vol: 5,
      name: '若紫',
    },
    {
      index: 29,
      vol: 5,
      name: '若紫',
    },
    {
      index: 30,
      vol: 5,
      name: '若紫',
    },
    {
      index: 31,
      vol: 6,
      name: '末摘花',
    },
    {
      index: 32,
      vol: 6,
      name: '末摘花',
    },
    {
      index: 33,
      vol: 6,
      name: '末摘花',
    },
    {
      index: 34,
      vol: 6,
      name: '末摘花',
    },
    {
      index: 35,
      vol: 6,
      name: '末摘花',
    },
    {
      index: 36,
      vol: 7,
      name: '紅葉賀',
    },
    {
      index: 37,
      vol: 7,
      name: '紅葉賀',
    },
    {
      index: 38,
      vol: 7,
      name: '紅葉賀',
    },
    {
      index: 39,
      vol: 7,
      name: '紅葉賀',
    },
    {
      index: 40,
      vol: 7,
      name: '紅葉賀',
    },
    {
      index: 41,
      vol: 8,
      name: '花宴',
    },
    {
      index: 42,
      vol: 8,
      name: '花宴',
    },
    {
      index: 43,
      vol: 9,
      name: '葵',
    },
    {
      index: 44,
      vol: 9,
      name: '葵',
    },
    {
      index: 45,
      vol: 9,
      name: '葵',
    },
    {
      index: 46,
      vol: 9,
      name: '葵',
    },
    {
      index: 47,
      vol: 9,
      name: '葵',
    },
    {
      index: 48,
      vol: 9,
      name: '葵',
    },
    {
      index: 49,
      vol: 10,
      name: '賢木',
    },
    {
      index: 50,
      vol: 10,
      name: '賢木',
    },
    {
      index: 51,
      vol: 10,
      name: '賢木',
    },
    {
      index: 52,
      vol: 10,
      name: '賢木',
    },
    {
      index: 53,
      vol: 10,
      name: '賢木',
    },
    {
      index: 54,
      vol: 10,
      name: '賢木',
    },
    {
      index: 55,
      vol: 10,
      name: '賢木',
    },
    {
      index: 56,
      vol: 10,
      name: '賢木',
    },
    {
      index: 57,
      vol: 11,
      name: '花散里',
    },
    {
      index: 58,
      vol: 12,
      name: '須磨',
    },
    {
      index: 59,
      vol: 12,
      name: '須磨',
    },
    {
      index: 60,
      vol: 12,
      name: '須磨',
    },
    {
      index: 61,
      vol: 12,
      name: '須磨',
    },
    {
      index: 62,
      vol: 12,
      name: '須磨',
    },
    {
      index: 63,
      vol: 12,
      name: '須磨',
    },
    {
      index: 64,
      vol: 12,
      name: '須磨',
    },
    {
      index: 65,
      vol: 12,
      name: '須磨',
    },
    {
      index: 66,
      vol: 13,
      name: '明石',
    },
    {
      index: 67,
      vol: 13,
      name: '明石',
    },
    {
      index: 68,
      vol: 13,
      name: '明石',
    },
    {
      index: 69,
      vol: 13,
      name: '明石',
    },
    {
      index: 70,
      vol: 13,
      name: '明石',
    },
    {
      index: 71,
      vol: 13,
      name: '明石',
    },
    {
      index: 72,
      vol: 13,
      name: '明石',
    },
    {
      index: 73,
      vol: 14,
      name: '澪標',
    },
    {
      index: 74,
      vol: 14,
      name: '澪標',
    },
    {
      index: 75,
      vol: 14,
      name: '澪標',
    },
    {
      index: 76,
      vol: 14,
      name: '澪標',
    },
    {
      index: 77,
      vol: 14,
      name: '澪標',
    },
    {
      index: 78,
      vol: 15,
      name: '蓬生',
    },
    {
      index: 79,
      vol: 15,
      name: '蓬生',
    },
    {
      index: 80,
      vol: 15,
      name: '蓬生',
    },
    {
      index: 81,
      vol: 16,
      name: '関屋',
    },
    {
      index: 82,
      vol: 17,
      name: '絵合',
    },
    {
      index: 83,
      vol: 17,
      name: '絵合',
    },
    {
      index: 84,
      vol: 18,
      name: '松風',
    },
    {
      index: 85,
      vol: 18,
      name: '松風',
    },
    {
      index: 86,
      vol: 18,
      name: '松風',
    },
    {
      index: 87,
      vol: 19,
      name: '薄雲',
    },
    {
      index: 88,
      vol: 19,
      name: '薄雲',
    },
    {
      index: 89,
      vol: 19,
      name: '薄雲',
    },
    {
      index: 90,
      vol: 20,
      name: '朝顔',
    },
    {
      index: 91,
      vol: 20,
      name: '朝顔',
    },
    {
      index: 92,
      vol: 20,
      name: '朝顔',
    },
    {
      index: 93,
      vol: 21,
      name: '少女',
    },
    {
      index: 94,
      vol: 21,
      name: '少女',
    },
    {
      index: 95,
      vol: 21,
      name: '少女',
    },
    {
      index: 96,
      vol: 21,
      name: '少女',
    },
    {
      index: 97,
      vol: 21,
      name: '少女',
    },
    {
      index: 98,
      vol: 21,
      name: '少女',
    },
    {
      index: 99,
      vol: 22,
      name: '玉鬘',
    },
    {
      index: 100,
      vol: 22,
      name: '玉鬘',
    },
    {
      index: 101,
      vol: 22,
      name: '玉鬘',
    },
    {
      index: 102,
      vol: 22,
      name: '玉鬘',
    },
    {
      index: 103,
      vol: 22,
      name: '玉鬘',
    },
    {
      index: 104,
      vol: 23,
      name: '初音',
    },
    {
      index: 105,
      vol: 23,
      name: '初音',
    },
    {
      index: 106,
      vol: 24,
      name: '胡蝶',
    },
    {
      index: 107,
      vol: 24,
      name: '胡蝶',
    },
    {
      index: 108,
      vol: 24,
      name: '胡蝶',
    },
    {
      index: 109,
      vol: 25,
      name: '蛍',
    },
    {
      index: 110,
      vol: 25,
      name: '蛍',
    },
    {
      index: 111,
      vol: 26,
      name: '常夏',
    },
    {
      index: 112,
      vol: 26,
      name: '常夏',
    },
    {
      index: 113,
      vol: 26,
      name: '常夏',
    },
    {
      index: 114,
      vol: 27,
      name: '篝火',
    },
    {
      index: 115,
      vol: 28,
      name: '野分',
    },
    {
      index: 116,
      vol: 28,
      name: '野分',
    },
    {
      index: 117,
      vol: 29,
      name: '行幸',
    },
    {
      index: 118,
      vol: 29,
      name: '行幸',
    },
    {
      index: 119,
      vol: 29,
      name: '行幸',
    },
    {
      index: 120,
      vol: 30,
      name: '藤袴',
    },
    {
      index: 121,
      vol: 30,
      name: '藤袴',
    },
    {
      index: 122,
      vol: 31,
      name: '真木柱',
    },
    {
      index: 123,
      vol: 31,
      name: '真木柱',
    },
    {
      index: 124,
      vol: 31,
      name: '真木柱',
    },
    {
      index: 125,
      vol: 31,
      name: '真木柱',
    },
    {
      index: 126,
      vol: 32,
      name: '梅枝',
    },
    {
      index: 127,
      vol: 32,
      name: '梅枝',
    },
    {
      index: 128,
      vol: 33,
      name: '藤裏葉',
    },
    {
      index: 129,
      vol: 33,
      name: '藤裏葉',
    },
    {
      index: 130,
      vol: 33,
      name: '藤裏葉',
    },
    {
      index: 131,
      vol: 34,
      name: '若菜上',
    },
    {
      index: 132,
      vol: 34,
      name: '若菜上',
    },
    {
      index: 133,
      vol: 34,
      name: '若菜上',
    },
    {
      index: 134,
      vol: 34,
      name: '若菜上',
    },
    {
      index: 135,
      vol: 34,
      name: '若菜上',
    },
    {
      index: 136,
      vol: 34,
      name: '若菜上',
    },
    {
      index: 137,
      vol: 34,
      name: '若菜上',
    },
    {
      index: 138,
      vol: 34,
      name: '若菜上',
    },
    {
      index: 139,
      vol: 34,
      name: '若菜上',
    },
    {
      index: 140,
      vol: 35,
      name: '若菜下',
    },
    {
      index: 141,
      vol: 35,
      name: '若菜下',
    },
    {
      index: 142,
      vol: 35,
      name: '若菜下',
    },
    {
      index: 143,
      vol: 35,
      name: '若菜下',
    },
    {
      index: 144,
      vol: 35,
      name: '若菜下',
    },
    {
      index: 145,
      vol: 35,
      name: '若菜下',
    },
    {
      index: 146,
      vol: 35,
      name: '若菜下',
    },
    {
      index: 147,
      vol: 36,
      name: '柏木',
    },
    {
      index: 148,
      vol: 36,
      name: '柏木',
    },
    {
      index: 149,
      vol: 36,
      name: '柏木',
    },
    {
      index: 150,
      vol: 36,
      name: '柏木',
    },
    {
      index: 151,
      vol: 37,
      name: '横笛',
    },
    {
      index: 152,
      vol: 37,
      name: '横笛',
    },
    {
      index: 153,
      vol: 38,
      name: '鈴虫',
    },
    {
      index: 154,
      vol: 38,
      name: '鈴虫',
    },
    {
      index: 155,
      vol: 39,
      name: '夕霧',
    },
    {
      index: 156,
      vol: 39,
      name: '夕霧',
    },
    {
      index: 157,
      vol: 39,
      name: '夕霧',
    },
    {
      index: 158,
      vol: 39,
      name: '夕霧',
    },
    {
      index: 159,
      vol: 39,
      name: '夕霧',
    },
    {
      index: 160,
      vol: 39,
      name: '夕霧',
    },
    {
      index: 161,
      vol: 39,
      name: '夕霧',
    },
    {
      index: 162,
      vol: 40,
      name: '御法',
    },
    {
      index: 163,
      vol: 40,
      name: '御法',
    },
    {
      index: 164,
      vol: 41,
      name: '幻',
    },
    {
      index: 165,
      vol: 41,
      name: '幻',
    },
    {
      index: 166,
      vol: 41,
      name: '幻',
    },
    {
      index: 167,
      vol: 42,
      name: '匂宮',
    },
    {
      index: 168,
      vol: 43,
      name: '紅梅',
    },
    {
      index: 169,
      vol: 44,
      name: '竹河',
    },
    {
      index: 170,
      vol: 44,
      name: '竹河',
    },
    {
      index: 171,
      vol: 44,
      name: '竹河',
    },
    {
      index: 172,
      vol: 44,
      name: '竹河',
    },
    {
      index: 173,
      vol: 44,
      name: '竹河',
    },
    {
      index: 174,
      vol: 45,
      name: '橋姫',
    },
    {
      index: 175,
      vol: 45,
      name: '橋姫',
    },
    {
      index: 176,
      vol: 45,
      name: '橋姫',
    },
    {
      index: 177,
      vol: 45,
      name: '橋姫',
    },
    {
      index: 178,
      vol: 45,
      name: '橋姫',
    },
    {
      index: 179,
      vol: 45,
      name: '橋姫',
    },
    {
      index: 180,
      vol: 46,
      name: '椎本',
    },
    {
      index: 181,
      vol: 46,
      name: '椎本',
    },
    {
      index: 182,
      vol: 46,
      name: '椎本',
    },
    {
      index: 183,
      vol: 46,
      name: '椎本',
    },
    {
      index: 184,
      vol: 46,
      name: '椎本',
    },
    {
      index: 185,
      vol: 47,
      name: '総角',
    },
    {
      index: 186,
      vol: 47,
      name: '総角',
    },
    {
      index: 187,
      vol: 47,
      name: '総角',
    },
    {
      index: 188,
      vol: 47,
      name: '総角',
    },
    {
      index: 189,
      vol: 47,
      name: '総角',
    },
    {
      index: 190,
      vol: 47,
      name: '総角',
    },
    {
      index: 191,
      vol: 47,
      name: '総角',
    },
    {
      index: 192,
      vol: 47,
      name: '総角',
    },
    {
      index: 193,
      vol: 47,
      name: '総角',
    },
    {
      index: 194,
      vol: 48,
      name: '早蕨',
    },
    {
      index: 195,
      vol: 48,
      name: '早蕨',
    },
    {
      index: 196,
      vol: 48,
      name: '早蕨',
    },
    {
      index: 197,
      vol: 48,
      name: '早蕨',
    },
    {
      index: 198,
      vol: 49,
      name: '宿木',
    },
    {
      index: 199,
      vol: 49,
      name: '宿木',
    },
    {
      index: 200,
      vol: 49,
      name: '宿木',
    },
    {
      index: 201,
      vol: 49,
      name: '宿木',
    },
    {
      index: 202,
      vol: 49,
      name: '宿木',
    },
    {
      index: 203,
      vol: 49,
      name: '宿木',
    },
    {
      index: 204,
      vol: 49,
      name: '宿木',
    },
    {
      index: 205,
      vol: 49,
      name: '宿木',
    },
    {
      index: 206,
      vol: 49,
      name: '宿木',
    },
    {
      index: 207,
      vol: 49,
      name: '宿木',
    },
    {
      index: 208,
      vol: 50,
      name: '東屋',
    },
    {
      index: 209,
      vol: 50,
      name: '東屋',
    },
    {
      index: 210,
      vol: 50,
      name: '東屋',
    },
    {
      index: 211,
      vol: 50,
      name: '東屋',
    },
    {
      index: 212,
      vol: 50,
      name: '東屋',
    },
    {
      index: 213,
      vol: 50,
      name: '東屋',
    },
    {
      index: 214,
      vol: 50,
      name: '東屋',
    },
    {
      index: 215,
      vol: 51,
      name: '浮舟',
    },
    {
      index: 216,
      vol: 51,
      name: '浮舟',
    },
    {
      index: 217,
      vol: 51,
      name: '浮舟',
    },
    {
      index: 218,
      vol: 51,
      name: '浮舟',
    },
    {
      index: 219,
      vol: 51,
      name: '浮舟',
    },
    {
      index: 220,
      vol: 51,
      name: '浮舟',
    },
    {
      index: 221,
      vol: 51,
      name: '浮舟',
    },
    {
      index: 222,
      vol: 51,
      name: '浮舟',
    },
    {
      index: 223,
      vol: 51,
      name: '浮舟',
    },
    {
      index: 224,
      vol: 52,
      name: '蜻蛉',
    },
    {
      index: 225,
      vol: 52,
      name: '蜻蛉',
    },
    {
      index: 226,
      vol: 52,
      name: '蜻蛉',
    },
    {
      index: 227,
      vol: 52,
      name: '蜻蛉',
    },
    {
      index: 228,
      vol: 52,
      name: '蜻蛉',
    },
    {
      index: 229,
      vol: 52,
      name: '蜻蛉',
    },
    {
      index: 230,
      vol: 53,
      name: '手習',
    },
    {
      index: 231,
      vol: 53,
      name: '手習',
    },
    {
      index: 232,
      vol: 53,
      name: '手習',
    },
    {
      index: 233,
      vol: 53,
      name: '手習',
    },
    {
      index: 234,
      vol: 53,
      name: '手習',
    },
    {
      index: 235,
      vol: 53,
      name: '手習',
    },
    {
      index: 236,
      vol: 54,
      name: '夢浮橋',
    },
    {
      index: 237,
      vol: 54,
      name: '夢浮橋',
    },
    {
      index: 238,
      vol: 54,
      name: '夢浮橋',
    },
  ]

  get vols(): any {
    const vols: any = {}

    for (const obj of this.volAndNames) {
      const vol = obj.vol

      if (!vols[vol]) {
        vols[vol] = []
      }

      vols[vol].push(Number(obj.index))
    }

    return vols
  }

  get options() {
    const items: any = {}

    for (const obj of this.volAndNames) {
      const vol = obj.vol
      items[vol] = obj.name
    }

    const res = []
    for (const vol in items) {
      res.push({
        text: vol + '巻・' + items[vol],
        value: vol,
      })
    }
    return res
  }
}
</script>
