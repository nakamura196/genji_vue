<template>
  <div>
    <Breadcrumbs :items="bh" />
    <v-container>
      <v-card class="my-5" flat>
        <v-card-title>
          <h2>
            {{ $t('about') }}
            <template v-if="$i18n.locale == 'en'"
              >(Written in Japanese)</template
            >
          </h2>
        </v-card-title>
        <v-card-text>
          <div class="text--primary">
            <template v-if="$i18n.locale == 'ja'">
              デジタル源氏物語では、インターネット上に一般公開されている『源氏物語』の画像や関連データを用い、以下のシステムを構築しています。
              <img
                width="100%"
                :src="baseUrl + '/assets/overview.png'"
                class="my-5"
              />
            </template>
            <template v-else>
              Digital Tale of Genji uses the images and related data of "Tale of
              Genji " that are open to the public on the Internet to build the
              following system.
              <img
                width="100%"
                :src="baseUrl + '/assets/overview.png'"
                class="my-5"
              />
            </template>
          </div>
        </v-card-text>
      </v-card>

      <v-card class="my-5" flat>
        <v-card-title>
          <h3>
            {{ $t('overview') }}
          </h3>
        </v-card-title>
        <v-card-text>
          <div class="text--primary">
            このサイトの翻刻文は、国立国会図書館デジタルコレクションで公開されている
            <a href="http://dl.ndl.go.jp/info:ndljp/pid/3437686"
              >『校異源氏物語』</a
            >（インターネット公開（保護期間満了））の画像をOCR処理し、作成したものです。このサイトで提供する翻刻文へのリンクは、『校異源氏物語』の頁単位を基準に設置されています。
            また、この頁番号は『源氏物語大成』の頁番号とも同一であるため、研究書との比較においても参照することが可能です。
            <br />画像は、東京大学総合図書館所蔵『源氏物語』、九州大学文学部所蔵『源氏物語』（古活字版）、個人蔵『源氏物語』（無跋無刊記整版本,
            九州大学附属図書館による画像公開）、国文学研究資料館所蔵『湖月抄』を利用しています。九州大学が公開する二点の『源氏物語』には『源氏物語大成』の頁番号が付与されていたこと、いずれもパブリックドメインの画像として公開されていたことから、本サイトでの活用データとしました。
          </div>
        </v-card-text>
      </v-card>

      <v-card class="my-5" flat>
        <v-card-title>
          <h3>
            {{ $t('browse_image_and_text') }}
          </h3>
        </v-card-title>
        <v-card-text>
          <div class="text--primary">
            <ul>
              <li>
                画面左側に『源氏物語』の公開画像が並びます。画面右側の上段は翻刻文（『校異源氏物語』）が、下段は現代語訳（与謝野晶子訳）が表示されます。
              </li>
              <li>
                翻刻文にあるIIIFアイコンをクリックすると、該当箇所の画像が開きます。
              </li>
              <li>
                画像上に表示される青色のマークは、「新編日本古典文学全集」へのリンクです。同じくオレンジ色のマークは翻刻文の画像（国立国会図書館デジタルコレクション）へのリンクです。
              </li>
              <li>
                東大本の画像上に表示される赤色三角のマークは、脱文・錯簡が認められる箇所です。（「<nuxt-link
                  :to="
                    localePath({
                      name: 'ds',
                    })
                  "
                  >東大本・脱文錯簡リスト</nuxt-link
                >」）
              </li>
              <li>
                翻刻文と現代語訳は、リンク付け作業が完了したものから随時公開していきます。
              </li>
              <li>
                『校異源氏物語』のテキストデータを活用したい場合は、「<a
                  href="https://w3id.org/kouigenjimonogatari/"
                  >校異源氏物語テキストDB</a
                >」のサイトをご利用ください。
              </li>
            </ul>
          </div>
        </v-card-text>
      </v-card>

      <v-card class="my-5" flat>
        <v-card-title>
          <h3>
            {{ $t('other') }}
          </h3>
        </v-card-title>
        <v-card-text>
          <div class="text--primary">
            <ul>
              <li>
                「頁数でさがす」では、『校異源氏物語』あるいはジャパンナレッジ上の「新編日本古典文学全集」の頁番号から、該当箇所を参照することができます。
              </li>
              <li>
                その他、IIIF対応で画像が一般公開されている『源氏物語』のリストも提供しています。
              </li>
            </ul>
          </div>
        </v-card-text>
      </v-card>

      <v-divider />

      <v-card class="my-5" flat>
        <v-card-text>
          <div class="text--primary">
            <div>
              <p>
                なお、このサイトのバージョン名は、データの公開状況によって更新させてきました。
              </p>
              <ul>
                <li>
                  東京大学総合図書館所蔵『源氏物語』及び九州大学附属図書館公開の二種類の『源氏物語』のいずれにも『校異源氏物語』の頁番号付与・公開
                </li>
                <li>『校異源氏物語』のテキストデータ公開</li>
              </ul>
              <p class="mt-4">
                上記2つの条件を満たす帖のうち、最も後段の名称をバージョン名としています。<br />
                Ver.KIRITSUBOから始まり2020年9月にはVer.YUMENOUKIHASHI
                を公開しました。<br />
                今後も、東京大学総合図書館所蔵本の『校異源氏物語』および『新編日本古典文学全集』の頁番号付けやテキストデータ作成、諸本の追加や『湖月抄』とのリンクなどの作業を進めていきます。
              </p>
            </div>
            <p>
              このサイトの機能について、また「デジタル源氏物語」の取組全般に関してご意見等ありましたら、<a
                href="mailto:digital-genji-public@googlegroups.com"
                >digital-genji-public@googlegroups.com</a
              >
              までご連絡ください。
            </p>
            <p>
              東京大学総合図書館所蔵『源氏物語』は、東京大学が実施している「<a
                href="https://www.lib.u-tokyo.ac.jp/ja/library/contents/archives-top"
                >東京大学デジタルアーカイブズ構築事業</a
              >」（事務局：東京大学附属図書館）によりデジタル化されました。
            </p>
          </div>
        </v-card-text>
      </v-card>

      <v-divider />

      <v-card class="my-5" flat>
        <v-card-text>
          <div class="text--primary">
            <p>
              {{ $t('acknowledgement') }}
            </p>
          </div>
        </v-card-text>
      </v-card>
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
export default class Page extends Vue {
  title: any = this.$t('about')

  head() {
    return {
      title: this.title,
    }
  }

  baseUrl: string = process.env.BASE_URL || ''

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
