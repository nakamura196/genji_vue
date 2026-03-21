<template>
  <div>
    <Breadcrumbs :items="bh" />
    <v-container>
      <v-card class="my-5" flat>
        <v-card-title>
          <h2>
            {{ $t('about') }}
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
              Genji" that are open to the public on the Internet to build the
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
            <template v-if="$i18n.locale == 'ja'">
              このサイトの翻刻文は、国立国会図書館デジタルコレクションで公開されている
              <a href="http://dl.ndl.go.jp/info:ndljp/pid/3437686"
                >『校異源氏物語』</a
              >（インターネット公開（保護期間満了））の画像をOCR処理し、作成したものです。このサイトで提供する翻刻文へのリンクは、『校異源氏物語』の頁単位を基準に設置されています。
              また、この頁番号は『源氏物語大成』の頁番号とも同一であるため、研究書との比較においても参照することが可能です。
              <br />画像は、東京大学総合図書館所蔵『源氏物語』、九州大学文学部所蔵『源氏物語』（古活字版）、個人蔵『源氏物語』（無跋無刊記整版本,
              九州大学附属図書館による画像公開）、国文学研究資料館所蔵『湖月抄』を利用しています。九州大学が公開する二点の『源氏物語』には『源氏物語大成』の頁番号が付与されていたこと、いずれもパブリックドメインの画像として公開されていたことから、本サイトでの活用データとしました。
            </template>
            <template v-else>
              The transcriptions on this site were created by OCR processing the images of
              <a href="http://dl.ndl.go.jp/info:ndljp/pid/3437686"
                ><i>Kōi Genji Monogatari</i> (Collated Tale of Genji)</a
              >, which are available on the National Diet Library Digital Collection (publicly available, copyright expired). Links to the transcriptions provided on this site are organized by page units of <i>Kōi Genji Monogatari</i>.
              Since these page numbers are identical to those in <i>Genji Monogatari Taisei</i>, they can also be referenced for comparison with research publications.
              <br />The images used include the <i>Tale of Genji</i> held by the General Library of the University of Tokyo, the <i>Tale of Genji</i> (old movable type edition) held by the Faculty of Literature of Kyushu University, a privately owned <i>Tale of Genji</i> (block-printed edition without colophon, images provided by Kyushu University Library), and <i>Kogetsushō</i> held by the National Institute of Japanese Literature. The two copies of the <i>Tale of Genji</i> published by Kyushu University were adopted as data for this site because they had been assigned page numbers from <i>Genji Monogatari Taisei</i> and were released as public domain images.
            </template>
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
            <template v-if="$i18n.locale == 'ja'">
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
            </template>
            <template v-else>
              <ul>
                <li>
                  Published images of the <i>Tale of Genji</i> are displayed on the left side of the screen. The upper part of the right side shows the transcription (<i>Kōi Genji Monogatari</i>), and the lower part shows the modern Japanese translation (by Akiko Yosano).
                </li>
                <li>
                  Clicking the IIIF icon in the transcription opens the corresponding image.
                </li>
                <li>
                  Blue marks displayed on the images are links to <i>Shinpen Nihon Koten Bungaku Zenshū</i> (New Complete Collection of Japanese Classical Literature). Orange marks are links to the transcription images (National Diet Library Digital Collection).
                </li>
                <li>
                  Red triangle marks on the Todai-bon (University of Tokyo copy) images indicate locations where binding errors or omissions have been identified. (See "<nuxt-link
                    :to="
                      localePath({
                        name: 'ds',
                      })
                    "
                    >{{ $t('東大本・脱文錯簡リスト') }}</nuxt-link
                  >")
                </li>
                <li>
                  Transcriptions and modern translations will be published as linking work is completed.
                </li>
                <li>
                  To use the text data of <i>Kōi Genji Monogatari</i>, please visit the "<a
                    href="https://kouigenjimonogatari.github.io/index-en.html"
                    >{{ $t('校異源氏物語テキストDB') }}</a
                  >" website.
                </li>
              </ul>
            </template>
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
            <template v-if="$i18n.locale == 'ja'">
              <ul>
                <li>
                  「頁数でさがす」では、『校異源氏物語』あるいはジャパンナレッジ上の「新編日本古典文学全集」の頁番号から、該当箇所を参照することができます。
                </li>
                <li>
                  その他、IIIF対応で画像が一般公開されている『源氏物語』のリストも提供しています。
                </li>
              </ul>
            </template>
            <template v-else>
              <ul>
                <li>
                  In "Search by Page Number," you can look up specific passages by page number from <i>Kōi Genji Monogatari</i> or <i>Shinpen Nihon Koten Bungaku Zenshū</i> on JapanKnowledge.
                </li>
                <li>
                  We also provide a list of IIIF-compatible <i>Tale of Genji</i> manuscripts whose images are publicly available.
                </li>
              </ul>
            </template>
          </div>
        </v-card-text>
      </v-card>

      <v-divider />

      <v-card class="my-5" flat>
        <v-card-text>
          <div class="text--primary">
            <template v-if="$i18n.locale == 'ja'">
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
            </template>
            <template v-else>
              <div>
                <p>
                  The version name of this site has been updated based on the status of data publication.
                </p>
                <ul>
                  <li>
                    Assignment and publication of <i>Kōi Genji Monogatari</i> page numbers for both the <i>Tale of Genji</i> held by the General Library of the University of Tokyo and the two copies published by Kyushu University Library.
                  </li>
                  <li>Publication of text data from <i>Kōi Genji Monogatari</i>.</li>
                </ul>
                <p class="mt-4">
                  Among the chapters that meet both conditions above, the name of the last chapter is used as the version name.<br />
                  Starting from Ver.KIRITSUBO, Ver.YUMENOUKIHASHI was released in September 2020.<br />
                  We will continue to work on assigning page numbers from <i>Kōi Genji Monogatari</i> and <i>Shinpen Nihon Koten Bungaku Zenshū</i> to the University of Tokyo copies, creating text data, adding additional manuscripts, and linking with <i>Kogetsushō</i>.
                </p>
              </div>
              <p>
                If you have any comments or suggestions about the features of this site or the Digital Tale of Genji project in general, please contact us at
                <a href="mailto:digital-genji-public@googlegroups.com"
                  >digital-genji-public@googlegroups.com</a
                >.
              </p>
              <p>
                The <i>Tale of Genji</i> held by the General Library of the University of Tokyo was digitized through the "<a
                  href="https://www.lib.u-tokyo.ac.jp/ja/library/contents/archives-top"
                  >University of Tokyo Digital Archives Project</a
                >" (Secretariat: University of Tokyo Library).
              </p>
            </template>
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
