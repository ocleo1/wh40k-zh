# 战锤40K中文资料集 (wh40k-zh)

A non-commercial, fan-made archive of Chinese-language Warhammer 40,000
reference material, published as a [VuePress](https://vuepress.vuejs.org/) 1.x
site.

> **This is a fan archive, not an official product.** Warhammer 40,000 and all
> associated text, artwork, names and trademarks belong to Games Workshop /
> Black Library / Forge World and to the original translators and sources. This
> project is not affiliated with or endorsed by them. The MIT license covers
> **only the code** in this repository — it does **not** cover the articles,
> translations or images under `src/`. See [NOTICE.md](NOTICE.md) for the full
> rights statement, sources and takedown information.
>
> 本资料集为非商业性爱好者资料汇编，与 Games Workshop 无任何关联；资料版权归原作者、
> 译者及版权方所有，MIT 许可仅适用于本项目代码。

## Contents

| Path | Description |
| --- | --- |
| `src/volume1/` – `src/volume4/` | 450+ archived Chinese articles and translations with their images |
| `src/README.md` | Site homepage, rendered by VuePress |
| `src/.vuepress/config.js`, `sidebar.js`, `styles/` | Site configuration, navigation and styles |
| `src/.vuepress/markdown-it-*` | Vendored markdown-it plugins (their own MIT licenses) |
| `bin/` | One-off `htm` → Markdown conversion scripts and per-volume TOC data |

## Build locally

Requires Node.js >= 18 and npm >= 7.

```bash
npm install
npm run dev      # start the development server
npm run build    # output to src/.vuepress/dist (gitignored)
```

## License

- **Code** (`bin/`, `src/.vuepress/`): [MIT](LICENSE) — see `LICENSE`.
- **Content** (`src/volumeN/`, `src/images/`, `src/*.md`): **not** licensed
  under MIT; see [NOTICE.md](NOTICE.md).
- **Vendored plugins**: their own MIT licenses, in their respective directories.
