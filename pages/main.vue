<template>
  <div>
    <Breadcrumbs :items="bh" />

    <v-container>
      <v-row>
        <v-col
          v-for="(obj, index) in items"
          :key="index"
          :lg="4"
          :md="6"
          :sm="12"
          class="pa-5"
        >
          <v-card>
            <v-img
              height="200px"
              contain
              :src="obj.thumbnail"
              style="background-color: lightgray"
            >
            </v-img>

            <v-card-title
              ><b>{{ obj.vol }}: {{ obj.title }}</b></v-card-title
            >

            <v-card-text>
              <v-btn
                v-if="obj.main"
                class="ma-2"
                color="primary"
                target="_blank"
                :href="obj.main"
                link
              >
                {{ $t('browse_image_and_text') }}
              </v-btn>

              <v-btn
                class="ma-2"
                :to="
                  localePath({
                    name: 'search-id-vol',
                    params: { id: 'taisei', vol: obj.vol },
                  })
                "
                link
              >
                {{ $t('browse_by_page') }}:
                {{ $t('校異源氏物語') }}
              </v-btn>

              <v-btn
                v-if="obj.zenshu"
                class="ma-2"
                :to="
                  localePath({
                    name: 'search-id-vol',
                    params: { id: 'zenshu', vol: obj.vol },
                  })
                "
                link
              >
                {{ $t('browse_by_page') }}:
                {{ $t('新編日本古典文学全集') }}
              </v-btn>
            </v-card-text>

            <v-divider class="my-3"></v-divider>

            <v-card-title>{{ $t('progress') }}</v-card-title>

            <v-card-text>
              <v-simple-table>
                <template #default>
                  <tbody>
                    <tr v-for="item in obj.status" :key="item.label">
                      <td>{{ item.label }}</td>
                      <td v-if="item.label != $t('対照可能な画像リスト')">
                        <template v-if="item.value">
                          <v-chip class="ma-2" color="success">
                            <v-avatar left>
                              <v-icon>mdi-checkbox-marked-circle</v-icon>
                            </v-avatar>
                            {{ $t('済') }}
                          </v-chip>
                        </template>
                        <template v-else>
                          <v-chip class="ma-2" color="warning">
                            <v-avatar left>
                              <v-icon>mdi-close-circle</v-icon>
                            </v-avatar>
                            {{ $t('未') }}
                          </v-chip>
                        </template>
                      </td>
                      <td v-else>
                        <template v-for="(value, key) in item.value">
                          <v-chip :key="key" small chip class="ma-1">{{
                            value
                          }}</v-chip>
                        </template>
                      </td>
                      <td>{{ item.description }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card-text>

            <v-divider class="my-4"></v-divider>

            <v-card-title>{{ $t('related_links') }}</v-card-title>

            <v-card-text>
              <v-simple-table>
                <template #default>
                  <tbody>
                    <tr v-for="item in obj.links" :key="item.label">
                      <td><img width="30px" :src="item.thumbnail" /></td>
                      <td>
                        <template v-if="item.value">
                          <a target="_blank" :href="item.value">{{
                            item.label
                          }}</a>
                        </template>
                        <template v-else>
                          {{ item.label }}
                        </template>
                      </td>
                      <td>{{ item.description }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import axios from 'axios'

import Breadcrumbs from '~/components/Breadcrumbs.vue'
@Component({
  components: {
    Breadcrumbs,
  },
})
export default class MainPage extends Vue {
  title: any = this.$t('browse_image_and_text')

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

  async asyncData({ payload /*, context, app */ }: any) {
    payload = false
    if (payload) {
      return payload
    } else {
      const statusMap: any = await axios
        .get(process.env.BASE_URL + '/data/status.json')
        .then((data) => {
          return data.data
        })

      const result: any = await axios
        .get(process.env.BASE_URL + '/data/info.json')
        .then((data) => {
          return data.data
        })

      return {
        result,
        statusMap,
      }
    }
  }

  baseUrl: string = process.env.BASE_URL || ''

  get items() {
    // @ts-ignore
    const result = this.result
    // @ts-ignore
    const statusMap = this.statusMap

    const selections = result.selections

    const data = []

    for (let j = 0; j < selections.length; j++) {
      const selection = selections[j]

      for (let i = 0; i < selection.members.length; i++) {
        const member = selection.members[i]
        const metadata = member.metadata
        const metadataObj: any = {}
        for (let k = 0; k < metadata.length; k++) {
          const obj = metadata[k]
          metadataObj[obj.label] = obj.value
        }
        const vol = metadataObj.vol

        const status = statusMap[('0000000000' + vol).slice(-2)]

        data.push({
          main: status.text
            ? 'https://tei-eaj.github.io/parallel_text_viewer/app/#/' +
              (vol === 100 ? '' : 'v2') +
              '?u=' +
              (vol === 100
                ? process.env.BASE_URL + '/data/pt/config.json'
                : process.env.BASE_URL +
                  '/data/vol/' +
                  ('0000000000' + vol).slice(-2) +
                  '/config.json')
            : null,
          title: member.label,
          thumbnail: metadataObj.thumbnail_utokyo, // member.thumbnail,
          curation:
            process.env.BASE_URL +
            '/data/vol/' +
            ('0000000000' + vol).slice(-2) +
            '/curation.json',
          vol,
          links: [
            {
              thumbnail: this.baseUrl + '/assets/ndl.ico',
              label:
                this.$t('校異源氏物語') +
                '（' +
                this.$t('国立国会図書館') +
                '）',
              value: metadataObj.ndl,
              description: '',
            },
            {
              thumbnail: this.baseUrl + '/assets/json-ld-logo.png',
              label:
                this.$t('校異源氏物語') +
                ' ' +
                this.$t('text') +
                '（' +
                this.$t('校異源氏物語テキストDB') +
                '）',
              value: status.text
                ? 'https://kouigenjimonogatari.github.io#' + vol
                : null,
              description: status.text ? '' : '作成中',
            },
            {
              thumbnail: this.baseUrl + '/assets/aozora.ico',
              label:
                this.$t('modern-translation') +
                '（' +
                this.$t('aozora-buko') +
                '）',
              value: metadataObj.aozora,
              description: '',
            },
            {
              thumbnail: this.baseUrl + '/assets/tei.png',
              label: this.$t('modern-translation') + '（' + 'TEI' + '）',
              value: metadataObj.tei,
              description: '',
            },
            {
              thumbnail: this.baseUrl + '/assets/jk.ico',
              label:
                this.$t('新編日本古典文学全集') + '（ジャパンナレッジ Lib）',
              value: metadataObj.jk,
              description: '',
            },
            {
              thumbnail: this.baseUrl + '/assets/jk.ico',
              label:
                this.$t('新編日本古典文学全集') +
                '（ジャパンナレッジ Personal）',
              value: metadataObj.jk.replace('/lib/', '/psnl/'),
              description: '',
            },
          ],
          status: [
            {
              label: this.$t('校異源氏物語と現代語訳の対応づけ'),
              value: status.tei,
              description: '',
            },
            {
              label: this.$t('対照可能な画像リスト'),
              value: status.orgs,
              description: '',
            },
          ],
          taisei: status.taisei,
          zenshu: status.saga,
        })
      }
    }

    return data
  }
}
</script>
