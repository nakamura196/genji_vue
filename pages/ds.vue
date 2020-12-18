<template>
  <div>
    <v-container>
      <v-card flat>
        <v-card-title>
          <h2 class="my-5">{{ $t('東大本・脱文錯簡リスト') }}</h2>
        </v-card-title>

        <template v-if="$i18n.locale === 'ja'">
          <p>
            東大本の画像に『校異源氏物語』及び『新編日本古典文学全集』の頁番号を付与していく過程で、
            これら両書の本文との比較において、東大本に本文の脱落や錯簡（綴じ違いなどで、頁の順序が乱れていること）が起こっていると判断される箇所が複数見つかりました。
            以下がその一覧です。なお、該当箇所の画像にも赤色三角のアイコンを表示し、説明を付しています。
          </p>
        </template>
        <template v-else>
          <p>
            We found some binding errors and ommisions in "Todaibon", in the
            process of assigning the page numbers of "Kōi Genji Monogatari" and
            "Shinpen Nihon koten bungaku zenshū". Below is a list. In addition,
            a red triangle icon is also displayed on the image of the relevant
            part with its explanation.
          </p>
        </template>

        <v-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="-1"
          class="mt-5"
        >
          <template v-slot:item.description="{ item }">
            <div class="py-2" v-html="item.description" />
          </template>
          <template v-slot:item.url="{ item }">
            <a
              target="_blank"
              :href="
                //'http://universalviewer.io/examples/uv/uv.html#?manifest=' +
                item.url
              "
            >
              <img
                class="m-2"
                src="https://iiif.dl.itc.u-tokyo.ac.jp/images/mirador.png"
              />
            </a>
          </template>
        </v-data-table>

        <v-divider class="my-5" />

        <v-card-title>
          <v-spacer></v-spacer>
          <v-btn
            target="_blank"
            class="ma-2"
            small
            :href="
              'http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/?curation=' +
              url +
              '&mode=annotation'
            "
          >
            {{ $t('Curation Viewerでみる') }}
            <i class="mdi mdi-open-in-new"></i>
          </v-btn>
        </v-card-title>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import axios from 'axios'

@Component
export default class List extends Vue {
  head() {
    return {
      title: this.$t('東大本・脱文錯簡リスト'),
    }
  }

  get headers(): any[] {
    return [
      { text: this.$t('volume'), value: 'vol' },
      { text: this.$t('title'), value: 'title' },
      { text: this.$t('imageNum'), value: 'imageNum' },
      { text: this.$t('explanation'), value: 'description', width: '40%' },
      { text: this.$t('type'), value: 'type' },
      { text: this.$t('画像をみる'), value: 'url' },
    ]
  }

  url: string = process.env.BASE_URL + '/data/ds.json'

  async asyncData() {
    const curation = await axios
      .get(process.env.BASE_URL + '/data/ds.json')
      .then((data) => {
        return data.data
      })

    const selections = curation.selections

    const desserts = []

    for (let i = 0; i < selections.length; i++) {
      const selection = selections[i]
      const members = selection.members

      for (let j = 0; j < members.length; j++) {
        const member = members[j]

        let memberId = member['@id']
        const tmp = memberId.split('#xywh=')
        const canvas = tmp[0]
        const xywh = tmp[1].split(',')
        const y = Number(xywh[1]) - 150
        const h = Number(xywh[3]) + 150
        memberId =
          canvas + '#xywh=' + xywh[0] + ',' + y + ',' + xywh[2] + ',' + h

        const metadata = member.metadata
        const map: any = {}

        for (let k = 0; k < metadata.length; k++) {
          const m = metadata[k]
          map[m.label] = m.value
        }

        const param = [
          {
            manifest:
              process.env.BASE_URL +
              '/data/iiif/org/東大本/' +
              ('00' + Number(map.Vol)).slice(-2) +
              '/manifest.json',
            canvas: memberId,
          },
        ]

        desserts.push({
          vol: map.Vol,
          title: map.Title,
          imageNum: map.Page,
          description: map.Text,
          type: map.Type,
          url:
            process.env.BASE_URL +
            '/mirador3/?params=' +
            encodeURIComponent(JSON.stringify(param)) +
            '&annotationState=on', // data.url,
        })
      }
    }

    return {
      desserts,
    }
  }
}
</script>
