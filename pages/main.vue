<template>
  <v-container>
    <v-row>
      <template>
        <v-col
          v-for="(obj, index) in data"
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
              style="background-color: lightgray;"
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
                <template v-slot:default>
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
                        {{ item.value ? item.value.join(', ') : '' }}
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
                <template v-slot:default>
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
      </template>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  components: {},
  data: () => ({
    baseUrl: process.env.BASE_URL,
    data: [],
  }),
  mounted() {
    axios.get(process.env.BASE_URL + '/data/status.json').then((response) => {
      const statusMap = response.data

      axios.get(process.env.BASE_URL + '/data/info.json').then((response) => {
        const result = response.data
        const selections = result.selections

        for (let j = 0; j < selections.length; j++) {
          const selection = selections[j]

          for (let i = 0; i < selection.members.length; i++) {
            const member = selection.members[i]
            const metadata = member.metadata
            const metadataObj = {}
            for (let k = 0; k < metadata.length; k++) {
              const obj = metadata[k]
              metadataObj[obj.label] = obj.value
            }
            const vol = metadataObj.vol

            const status = statusMap[('0000000000' + vol).slice(-2)]

            this.data.push({
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
                  label: this.$t('新編日本古典文学全集') + '（JK）',
                  value: metadataObj.jk,
                  description: '',
                },
              ],
              status: [
                /*
                {
                  label: '校異源氏物語の頁数付与',
                  value: status.taisei,
                  description: status.taisei ? '' : '九大本のみ対応済み',
                },
                {
                  label: '新編日本古典文学全集の頁数付与（東大本のみ）',
                  value: status.saga,
                  description: '',
                },
                {
                  label: '校異源氏物語のテキストデータ作成',
                  value: status.text,
                  description: '',
                },
                */
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
      })
    })
  },
}
</script>
