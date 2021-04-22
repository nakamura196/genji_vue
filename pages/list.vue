<template>
  <div>
    <v-container>
      <v-card class="my-5" flat>
        <v-card-title>
          <h2>
            {{ $t('iiif_genji_collection') }}
          </h2>
        </v-card-title>

        <v-card-text class="mt-5">
          <template v-if="$i18n.locale === 'ja'">
            <p>
              各機関がインターネット上で公開している『源氏物語』へのリンク集です。
              <br />「デジタル源氏物語」作成メンバーが確認した画像のほか、国文学研究資料館の「新日本古典籍総合データベース」の著作「源氏物語」（著作ID:2357）のもとに公開されている画像のうち、以下の条件に該当するものをリスト化しました。
            </p>

            <ul>
              <li>50帖以上が公開されている画像。</li>
              <li>
                IIIF (International Image Interoperability
                Framework)で公開されている画像。
              </li>
            </ul>
            <br />
            <p>
              ※画像の利用条件は公開機関によって異なっています。リンク先の画像をご利用の際は、必ず各条件をご確認ください。
            </p>
            <p>
              このリストに掲載すべき画像がありましたら、<a
                href="mailto:digital-genji-public@googlegroups.com"
                >digital-genji-public@googlegroups.com</a
              >までご連絡ください。
            </p>
          </template>
          <template v-else>
            <p>
              This is a collection of links to "The Tale of Genji" published by
              each institution on the Internet.
              <br />The items that meet the following conditions are listed.
            </p>
            <ul>
              <li>Images with more than 50 volumes</li>
              <li>
                Images compliant with IIIF (International Image Interoperability
                Framework)
              </li>
            </ul>
            <br />
            <p>
              ※Usage conditions vary depending on the organizations. Please
              confirm each condition when using the linked images.
            </p>
            <p>
              If you have any images that should be included in this list,
              please contact the UTokyo Academic Archives Project Office at the
              bottom of the page.
            </p>
          </template>
        </v-card-text>
        <v-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="-1"
          class="mt-5"
        >
          <template #[`item.url`]="{ item }">
            <a
              target="_blank"
              :href="
                'http://universalviewer.io/examples/uv/uv.html#?manifest=' +
                item.url
              "
            >
              <img
                class="m-2"
                src="https://iiif.dl.itc.u-tokyo.ac.jp/images/uv.png"
              />
            </a>
          </template>
          <template #[`item.license`]="{ item }">
            <a target="_blank" :href="item.license">
              {{ item.license }}
            </a>
          </template>
        </v-data-table>

        <v-divider class="my-5" />

        <v-card-title>
          <v-spacer></v-spacer>
          <v-btn
            small
            target="_blank"
            :href="
              'https://www.kanzaki.com/works/2016/pub/image-annotator?u=' + url
            "
          >
            {{ $t('Image Annotatorでみる') }}
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
      title: this.$t('iiif_genji_collection'),
    }
  }

  get headers(): any[] {
    return [
      { text: this.$t('所蔵機関'), value: 'attribution' },
      { text: this.$t('刊写'), value: 'type' },
      { text: this.$t('冊数'), value: 'volume' },
      { text: this.$t('備考'), value: 'note' },
      { text: this.$t('利用条件'), value: 'license' },
      { text: this.$t('画像をみる'), value: 'url' },
    ]
  }

  url: string = process.env.BASE_URL + '/iiif/collection/top.json'

  async asyncData() {
    const result = await axios
      .get(process.env.BASE_URL + '/iiif/collection/top.json')
      .then((data) => {
        return data.data
      })

    const desserts = []

    const collections = result.collections
    for (let i = 0; i < collections.length; i++) {
      const obj = collections[i]
      desserts.push({
        attribution: obj.description,
        type: obj.type,
        volume: obj.volume,
        note: obj.note,
        license: obj.license,
        url: obj['@id'],
      })
    }

    return {
      desserts,
    }
  }
}
</script>
