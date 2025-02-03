const fs = require('fs')
const path = require('path')
const axios = require('axios')
require('dotenv').config()

const apikey = process.env.CMS_API_KEY
const baseUrl = process.env.CMS_BASE_URL

async function main() {
  const offset = 0
  const limit = 40

  const langs = {
    ja: '',
    en: 'en/',
  }

  for (const lang of Object.keys(langs)) {
    const items = []
    const taxonomiesUrl = `${baseUrl}/${langs[lang]}jsonapi/node/news?api-key=${apikey}&page[offset]=${offset}&page[limit]=${limit}`

    const response = await axios.get(taxonomiesUrl)
    const data = response.data
    const taxonomies = data.data

    if (taxonomies.length === 0) {
      return items
    }

    for (const taxonomy of taxonomies) {
      // const id = taxonomy.id

      const id = taxonomy.attributes.drupal_internal__nid

      // ディレクトリパスを作成
      const dirPath = path.join(__dirname, `../content/${langs[lang]}news`)
      // ディレクトリが存在しない場合は作成
      fs.mkdirSync(dirPath, { recursive: true })

      // items.push(taxonomy.attributes.name)
      fs.writeFileSync(
        path.join(dirPath, `${id}.md`),
        // JSON.stringify(taxonomy, null, 2)
        `---
title: ${taxonomy.attributes.title}
date: ${taxonomy.attributes.field_date}
---

${taxonomy.attributes.body.processed}
`
      )
    }

    // console.log({ items })
  }

  // return items
}

// 関数を実行
main() // .catch(console.error)
