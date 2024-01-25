<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent width="600px">
        <v-card>
          <v-card-title>
            <h3 class="my-5">{{ $t('welcome') }}</h3>
          </v-card-title>
          <v-card-text>
            <template v-if="$i18n.locale === 'ja'">
              <p>
                {{ introJa }}
              </p>
              <p>
                {{ noteJa }}
              </p>
            </template>
            <template v-else>
              <p>
                {{ introEn }}
              </p>
              <p>
                {{ noteEn }}
              </p>
            </template>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="secondary" @click="dialog = false">{{
              $t('close')
            }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>

    <section class="mb-5">
      <v-parallax src="assets/hero.jpg" height="300">
        <v-layout column align-center justify-center class="white--text">
          <h1 class="white--text mb-2 display-1 text-center">
            <b>
              {{ $t('digital_genji') }}
              <br /><small>Ver.YUMENOUKIHASHI</small>
            </b>
          </h1>
          <p>{{ $t('subtitle') }}</p>
          <v-btn
            large
            class="mt-5"
            :to="localePath({ name: 'main' })"
            color="primary"
            >{{ $t('browse_image_and_text') }}</v-btn
          >
        </v-layout>
      </v-parallax>
    </section>

    <v-container>
      <v-alert v-if="items.length > 0" type="info" class="mb-5" text prominent>
        {{ items[0].date.split('T')[0] }}:
        <nuxt-link :to="localePath(items[0].to)">{{
          items[0].title
        }}</nuxt-link>
      </v-alert>

      <v-row>
        <v-col cols="12" md="12">
          <v-row>
            <v-col cols="12" md="6">
              <v-card class="mb-5" flat outlined>
                <v-card-title>
                  <h3>{{ $t('welcome') }}</h3>
                </v-card-title>
                <v-card-text>
                  <div class="text--primary">
                    {{ $i18n.locale == 'ja' ? introJa : introEn }}
                  </div>

                  <p class="mt-5">※以下の動画に音声はありません</p>

                  <iframe
                    width="100%"
                    height="400"
                    src="https://www.youtube.com/embed/videoseries?si=5jowsnrpUvqSjHAc&amp;list=PLJ9pNFDdwPxJ9DCzuRgF1EZfoZAdFkHFo"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card class="mb-5" flat outlined>
                <v-card-title>
                  <h3>{{ $t('news') }}</h3>
                </v-card-title>
                <v-card-text>
                  <div class="text--primary">
                    <p>
                      <a
                        href="https://twitter.com/digital_genji"
                        target="_blank"
                      >
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="16" cy="16" r="16" fill="black"></circle>
                          <path
                            d="M17.5646 14.8417L22.9915 8.53333H21.7055L16.9934 14.0108L13.2298 8.53333H8.88889L14.5802 16.8162L8.88889 23.4315H10.175L15.1511 17.6471L19.1258 23.4315H23.4667L17.5643 14.8417H17.5646ZM15.8032 16.8892L15.2265 16.0644L10.6384 9.50147H12.6137L16.3164 14.7979L16.8931 15.6227L21.7062 22.5073H19.7308L15.8032 16.8895V16.8892Z"
                            fill="white"
                          ></path>
                        </svg>
                        <!-- X（旧Twitter）--></a
                      >
                    </p>

                    <News :size="10" />
                    <div class="text-right mt-4">
                      <nuxt-link :to="localePath({ name: 'news' })">{{
                        $t('all')
                      }}</nuxt-link>
                    </div>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col v-if="false" cols="12" md="6">
          <!--
          <v-card class="mb-5" flat outlined>
            <v-card-text>
              
            </v-card-text>
          </v-card>
          -->
          <a
            class="twitter-timeline"
            data-height="900"
            href="https://twitter.com/digital_genji?ref_src=twsrc%5Etfw"
            >Tweets by digital_genji</a
          >
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          ></script>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
          <v-card class="mb-5" flat outlined>
            <v-card-title>
              <h3>{{ $t('活用データ一覧') }}</h3>
            </v-card-title>
            <v-card-text>
              <v-simple-table>
                <template #default>
                  <thead>
                    <tr>
                      <th class="text-left" width="40%">{{ $t('title') }}</th>
                      <th class="text-left" width="30%">
                        {{ $t('organization') }}
                      </th>
                      <th class="text-left" width="30%">{{ $t('license') }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="py-2">
                      <td class="py-2">
                        【{{ $t('image') }}】
                        <a
                          href="https://iiif.dl.itc.u-tokyo.ac.jp/repo/s/genji/"
                          >{{ $t('東京大学総合図書館') }} {{ $t('所蔵') }}
                          {{ $t('源氏物語') }}</a
                        >
                      </td>
                      <td>{{ $t('東京大学総合図書館') }}</td>
                      <td>
                        <a
                          href="https://www.lib.u-tokyo.ac.jp/ja/library/contents/archives-top/reuse"
                          >CC BY {{ $t('eq') }}</a
                        >
                      </td>
                    </tr>
                    <tr>
                      <td class="py-2">
                        【{{ $t('image') }}】
                        <a href="http://hdl.handle.net/2324/411193"
                          >{{ $t('九州大学文学部') }} {{ $t('所蔵') }}
                          {{ $t('源氏物語') }} {{ $t('古活字版') }}</a
                        >
                      </td>
                      <td>{{ $t('九州大学文学部') }}</td>
                      <td>
                        <a href="https://www.lib.kyushu-u.ac.jp/ja/reuse"
                          >Public Domain</a
                        >
                      </td>
                    </tr>
                    <tr>
                      <td class="py-2">
                        【{{ $t('image') }}】
                        <a href="http://hdl.handle.net/2324/411265"
                          >{{ $t('個人蔵') }} {{ $t('源氏物語') }}
                          {{ $t('無跋無刊記整版本') }}</a
                        >
                      </td>
                      <td>
                        {{ $t('個人蔵') }}
                        {{ $t('九州大学附属図書館による画像公開') }}
                      </td>
                      <td>
                        <a href="https://www.lib.kyushu-u.ac.jp/ja/reuse"
                          >Public Domain</a
                        >
                      </td>
                    </tr>
                    <tr>
                      <td class="py-2">
                        【{{ $t('image') }}】
                        <a href="https://kokusho.nijl.ac.jp/biblio/200018258"
                          >{{ $t('国文学研究資料館') }} {{ $t('鵜飼文庫') }}
                          {{ $t('湖月抄') }}</a
                        >
                      </td>
                      <td>{{ $t('国文学研究資料館') }}</td>
                      <td>
                        <a href="http://creativecommons.org/licenses/by-sa/4.0/"
                          >CC BY-SA</a
                        >
                      </td>
                    </tr>

                    <tr>
                      <td class="py-2">
                        【{{ $t('image') }}】
                        <a href="https://kokusho.nijl.ac.jp/biblio/200003803"
                          >{{ $t('国文学研究資料館') }}
                          {{ '絵入源氏物語：大本' }}</a
                        >
                      </td>
                      <td>{{ $t('国文学研究資料館') }}</td>
                      <td>
                        <a href="http://creativecommons.org/licenses/by-sa/4.0/"
                          >CC BY-SA</a
                        >
                      </td>
                    </tr>

                    <tr>
                      <td class="py-2">
                        【{{ $t('image') }}】
                        <a href="https://dl.ndl.go.jp/info:ndljp/pid/2607621"
                          >{{ $t('国立国会図書館') }}
                          {{ '絵入源氏物語：小本' }}</a
                        >
                      </td>
                      <td>{{ $t('国立国会図書館') }}</td>
                      <td>
                        <a
                          href="https://www.ndl.go.jp/jp/use/reproduction/index.html"
                          >Public Domain</a
                        >
                      </td>
                    </tr>

                    <tr>
                      <td class="py-2">
                        【{{ $t('image') }}】
                        <a href="https://dl.ndl.go.jp/info:ndljp/pid/2607789"
                          >{{ $t('国立国会図書館') }}
                          {{ '絵入源氏物語：横本' }}</a
                        >
                      </td>
                      <td>{{ $t('国立国会図書館') }}</td>
                      <td>
                        <a
                          href="https://www.ndl.go.jp/jp/use/reproduction/index.html"
                          >Public Domain</a
                        >
                      </td>
                    </tr>

                    <tr>
                      <td class="py-2">
                        【{{ $t('image') }}】
                        <a href="https://kokusho.nijl.ac.jp/biblio/100097415/"
                          >{{ '大阪公立大学中百舌鳥図書館' }}
                          {{ '源氏百人一首' }}</a
                        >
                      </td>
                      <td>
                        {{
                          '大阪公立大学中百舌鳥図書館所蔵 国文学研究資料館提供'
                        }}
                      </td>
                      <td>
                        <a href="http://creativecommons.org/licenses/by/4.0/"
                          >CC BY</a
                        >
                      </td>
                    </tr>

                    <tr>
                      <td class="py-2">
                        【{{ $t('image') }}】
                        <a href="https://kokusho.nijl.ac.jp/biblio/100241606/"
                          >{{ '奈良女子大学学術情報センター' }}
                          {{ '源氏百人一首' }}</a
                        >
                      </td>
                      <td>
                        {{
                          '奈良女子大学学術情報センター所蔵 国文学研究資料館提供 '
                        }}
                      </td>
                      <td>
                        <a href="http://creativecommons.org/licenses/by-sa/4.0/"
                          >CC BY-SA</a
                        >
                      </td>
                    </tr>

                    <tr>
                      <td class="py-2">
                        【{{ $t('image') }}】
                        <a href="http://dl.ndl.go.jp/info:ndljp/pid/3437686">{{
                          $t('校異源氏物語')
                        }}</a>
                      </td>
                      <td>{{ $t('国立国会図書館') }}</td>
                      <td>
                        <a
                          href="https://www.ndl.go.jp/jp/use/reproduction/index.html"
                          >Public Domain</a
                        >
                      </td>
                    </tr>

                    <tr>
                      <td class="py-2">
                        【{{ $t('text') }}】
                        <a href="https://w3id.org/kouigenjimonogatari/">{{
                          $t('校異源氏物語')
                        }}</a>
                      </td>
                      <td>{{ $t('校異源氏物語テキストDB') }}</td>
                      <td>
                        <a
                          href="http://creativecommons.org/publicdomain/zero/1.0/"
                          >CC0</a
                        >
                      </td>
                    </tr>
                    <tr>
                      <td class="py-2">
                        【{{ $t('modern-translation') }}】{{
                          $t('新編日本古典文学全集')
                        }}（{{ $t('小学館') }}）－ {{ $t('源氏物語') }}
                      </td>
                      <td colspan="2">
                        ※{{
                          $t(
                            'JapanKnowledge（ジャパンナレッジ）上で公開されている資料を利用しています'
                          )
                        }}
                      </td>
                    </tr>
                    <tr>
                      <td class="py-2">
                        【{{ $t('modern-translation') }}】
                        <a
                          href="https://www.aozora.gr.jp/cards/000052/card362.html"
                          >{{ $t('源氏物語') }}（{{ $t('与謝野晶子訳') }}）</a
                        >
                      </td>
                      <td>{{ $t('aozora-buko') }}</td>
                      <td>
                        <a href="https://www.aozora.gr.jp/guide/kijyunn.html">{{
                          $t('free-reuse')
                        }}</a>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
              <br />※ {{ $i18n.locale == 'ja' ? noteJa : noteEn }}
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="mb-5" flat outlined>
            <v-card-title>
              <h3>{{ $t('software_services') }}</h3>
            </v-card-title>
            <v-card-text>
              <v-simple-table>
                <template #default>
                  <thead>
                    <tr>
                      <th class="text-left">{{ $t('title') }}</th>
                      <th class="text-left">{{ $t('organization') }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="py-2">
                      <td class="py-2">
                        <a href="http://codh.rois.ac.jp/icp/"
                          >IIIF Curation Platform</a
                        >
                      </td>
                      <td class="py-2">
                        <a href="http://codh.rois.ac.jp/">{{
                          $t('人文学オープンデータ共同利用センター')
                        }}</a>
                      </td>
                    </tr>
                    <tr class="py-2">
                      <td class="py-2">
                        <a href="http://codh.rois.ac.jp/kuronet/">{{
                          $t('KuroNetくずし字認識サービス')
                        }}</a>
                      </td>
                      <td class="py-2">
                        <a href="http://codh.rois.ac.jp/">{{
                          $t('人文学オープンデータ共同利用センター')
                        }}</a>
                      </td>
                    </tr>
                    <tr class="py-2">
                      <td class="py-2">
                        <a href="https://omeka.org/s/">Omeka S</a>
                      </td>
                      <td class="py-2">
                        <a href="https://rrchnm.org/"
                          >Roy Rosenzweig Center for History and New Media</a
                        >
                      </td>
                    </tr>
                    <tr class="py-2">
                      <td class="py-2">
                        <a href="https://omeka.org/s/modules/Scripto/"
                          >Scripto</a
                        >
                      </td>
                      <td class="py-2">
                        <a href="https://omeka.org/">Omeka Team</a>
                      </td>
                    </tr>
                    <tr class="py-2">
                      <td class="py-2">
                        <a
                          href="https://github.com/TEI-EAJ/parallel_text_viewer/"
                          >Parallel Text Viewer with TEI & IIIF</a
                        >
                      </td>
                      <td class="py-2">
                        <a href="https://tei-c.org/Activities/SIG/EastAsian/">{{
                          $t('TEI-C東アジア/日本語分科会')
                        }}</a>
                      </td>
                    </tr>
                    <tr class="py-2">
                      <td class="py-2">
                        <a href="http://codh.rois.ac.jp/software/vdiffjs/">{{
                          'vdiff.js'
                        }}</a>
                      </td>
                      <td class="py-2">
                        <a href="http://codh.rois.ac.jp/">{{
                          $t('人文学オープンデータ共同利用センター')
                        }}</a>
                      </td>
                    </tr>
                    <tr class="py-2">
                      <td class="py-2">
                        <a
                          href="https://github.com/ndl-lab/tensorflow-deeplab-v3-plus"
                          >{{
                            '図表自動抽出のプログラム(A program that automatically extracts diagrams)'
                          }}</a
                        >
                      </td>
                      <td class="py-2">
                        <a href="https://lab.ndl.go.jp/">{{
                          $t('国立国会図書館') + '・NDLラボ'
                        }}</a>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
          <!-- -->
          <v-card class="mb-5" flat outlined>
            <v-card-title>
              <h3>{{ $t('creator') }}</h3>
            </v-card-title>
            <v-card-text>
              <div class="text--primary">
                <ul>
                  <li>
                    <a href="https://researchmap.jp/tam">{{ $t('田村隆') }}</a>
                    {{ $t('東京大学大学院総合文化研究科准教授') }}
                  </li>
                  <li>
                    <a href="https://researchmap.jp/knagasaki">{{
                      $t('永崎研宣')
                    }}</a>

                    {{ $t('一般財団法人 人文情報学研究所主席研究員') }}
                  </li>
                  <li>
                    <a href="https://researchmap.jp/i2k">{{
                      $t('大向一輝')
                    }}</a>
                    {{ $t('東京大学大学院人文社会系研究科准教授') }}
                  </li>
                  <li>
                    <a href="https://researchmap.jp/nakamura.satoru">{{
                      $t('中村覚')
                    }}</a>
                    {{ $t('東京大学史料編纂所助教') }}
                  </li>
                  <li>
                    {{ $t('東京大学総合図書館職員 有志') }}
                  </li>
                </ul>
              </div>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <!--
          -->
          <v-card class="mb-5" flat outlined>
            <v-card-title>
              <h3>
                {{ $t('contributor') }}
                <small>{{ $t('（所属は協力当時のもの）') }}</small>
              </h3>
            </v-card-title>
            <v-card-text>
              <div class="mb-5">
                {{ $t('「青空文庫でTEI勉強会」参加者') }}
              </div>
              <div class="text--primary">
                <ul>
                  <li>
                    {{ $t('王一凡') }}
                    {{ $t('東京大学') }}
                  </li>
                  <li>
                    <a href="https://researchmap.jp/kzhr/">
                      {{ $t('岡田一祐') }}</a
                    >
                    {{ $t('国文学研究資料館') }}
                  </li>
                  <li>
                    {{ $t('小川潤') }}
                    {{ $t('東京大学') }}
                  </li>
                  <li>
                    <a href="https://researchmap.jp/kano_yasuyuki/">
                      {{ $t('加納靖之') }}</a
                    >
                    {{ $t('東京大学') }}
                  </li>
                  <li>
                    {{ $t('神谷信武') }}
                    {{ $t('チューリッヒ大学') }}
                  </li>

                  <li>
                    {{ $t('金甫榮') }}
                    {{ $t('渋沢栄一記念財団') }}
                  </li>
                  <li>
                    <a href="https://researchmap.jp/knagasaki/">
                      {{ $t('永崎研宣') }}</a
                    >
                    {{ $t('人文情報学研究所') }}
                  </li>
                  <li>
                    <a href="https://researchmap.jp/nakamura.satoru/">
                      {{ $t('中村覚') }}</a
                    >
                    {{ $t('東京大学') }}
                  </li>
                  <li>
                    <a href="https://researchmap.jp/SoMiyagawa/">
                      {{ $t('宮川創') }}</a
                    >
                    {{ $t('京都大学 / ゲッティンゲン大学') }}
                  </li>
                  <li>
                    {{ $t('村田祐菜') }}
                    {{ $t('東京大学') }}
                  </li>
                </ul>
              </div>
              <div class="my-5">
                {{ $t('校異源氏物語の頁数付与') }}
              </div>
              <div class="text--primary">
                <ul>
                  <li>{{ $t('酒寄晴佳') }} {{ $t('東京大学') }}</li>
                </ul>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <br />
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import News from '~/components/news/News.vue'

@Component({
  components: {
    News,
  },
})
export default class Page extends Vue {
  head() {
    return {
      titleTemplate: null,
    }
  }

  items: any = []

  async created() {
    let lang = this.$i18n.locale
    if (lang === 'ja') {
      lang = ''
    } else {
      lang = lang + '/'
    }
    const items = await this.$content(lang + 'news')
      .sortBy('date', 'desc')
      .limit(1)
      .fetch()

    this.items = items
  }

  dialog: boolean = false

  introJa: string =
    '東京大学総合図書館所蔵『源氏物語』の公開（2019年6月）を契機に、有志により「『源氏物語』研究にとって有意義なデジタル機能は何か」という検討が始まりました。（通称「裏源氏勉強会」）その成果の一環として、ここに「デジタル源氏物語 - 源氏物語本文研究プラットフォームを目指して -」を公開しました。当サイトでは『源氏物語』に関する様々な関連データを収集・作成し、それらを結びつけることで、『源氏物語』研究はもちろん、古典籍を利用した教育・研究活動の一助となる環境の提案を目指しています。また研究目的以外でも、『源氏物語』を広く楽しんでもらえるような機能の提供も視野に入れサイトの構築を進めています。'

  introEn: string =
    'Volunteers began to consider "what are the meaningful digital functions for the study of "The Tale of Genji" with the opening of "The Tale of Genji" held by the University of Tokyo Library (June 2019). As part of that achievement, "Digital Tale of Genji - Aiming for a textual research platform for the Tale of Genji - " has been released. This site collects and creates various related data related to "The Tale of Genji" and links them together to propose an environment that helps not only research but also educational and research activities.'

  noteJa: string =
    'テキストデータには、著作権保護期間が満了し画像が公開されている『校異源氏物語』（中央公論社、1942年）を用いました。本文の頁数は戦後の『源氏物語大成』校異篇（中央公論社、1953-1954年）と同じです。'

  noteEn: string =
    'We used "Kōi Genji Monogatari" (Tokyo Chūō Kōron Sha, 1942), whose copyright protection period has expired. The number of pages in "Kōi Genji Monogatari" is the same as "Genji monogatari taisei" (Tokyo Chūō Kōron Sha, 1953-1954).'

  /*
  news: any[] = [
    {
      date: '2021-04-27',
      ja:
        '<a href="https://genji-ai.web.app">デジタル源氏物語「AI画像検索版」</a>を追加しました。',
      en:
        '<a href="https://genji-ai.web.app/en/">Finding Digital Facsimiles Including Parallel Texts with AI</a> released',
    },
    {
      date: '2020-09-03',
      ja: '「Ver.YUMENOUKIHASHI」にアップデートしました。',
      en: 'Updated to "Ver.YUMENOUKIHASHI"',
    },
    {
      date: '2020-05-01',
      ja: '「Ver.OTOME」にアップデートしました。',
      en: 'Updated to "Ver.OTOME"',
    },
    {
      date: '2019-11-29',
      ja: '「Ver.KIRITSUBO」を公開しました。',
      en: 'Released "Ver.YUMENOUKIHASHI"',
    },
  ]
  */

  mounted() {
    /*
    if (!sessionStorage.getItem('genji_intro')) {
      this.dialog = true
      sessionStorage.setItem('genji_intro', 'true')
    }
    */

    if (!localStorage.getItem('genji_intro')) {
      this.dialog = true
      localStorage.setItem('genji_intro', 'true')
    }
  }
}
</script>
