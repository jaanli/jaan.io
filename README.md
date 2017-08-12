# [jaan.io (Preview here)](https://jaan.io)

This Jekyll theme powers my personal website.

This is forked from [Cole Townsend](http://coletownsend.com)'s [Balzac](https://github.com/ColeTownsend/Balzac-for-Jekyll) theme with heavy inspiration from his website.

Some improvements were introduced by following [Michael Rose](http://mademistakes.com)'s [So Simple](https://github.com/mmistakes/so-simple-theme) themes for Jekyll (such as Bing Verification, Twitter Cards, Google Analytics, Authorship, and Webmaster Tools support).

Thanks to [Amédée d'Aboville](http://amedee.daboville.com/) for the nifty javascript hover-over in the title.

Setup and settings are similar to [Balzac](https://github.com/ColeTownsend/Balzac-for-Jekyll)'s. Please file an issue if something is not clear or you have any questions.

![jaan.io](http://i.imgur.com/wEM5sod.png)

## Testing locally

`jekyll serve --config _config.yml,_config_dev.yml --watch`

`scss -t compress assets/sass/i.scss assets/css/i.css`

## Deploying

Deploy with [s3_website](https://github.com/laurilehmijoki/s3_website).
`jekyll build`
`s3_website push`

### Managing ruby on a mac
Use rbenv. As in [this guide](https://gorails.com/setup/osx/10.12-sierra).

On a mac, use rvm for managing ruby environment.

Use bundler for managing gems:
`gem install bundler`
Run from root of the repo:
`bundler install`
Important: need to rehash to create symbolic links to gems like jekyll -
`rbenv rehash`
Then run jekyll commands:
`jekyll build`


### Workflow for creating vector graphics for blog posts
* Use keynote to make figures. 
* Export to pdf. 
* Crop in preview. 
* Use inkscape to convert to svg: `inkscape --without-gui --file=in.pdf --export-plain-svg=out.svg`
* Put in `_svg` folder, include using `{% asset out.svg %}`

## License

Use this for anything you want.

## TODO
* papers.md:
  * add conversion of .bib files as in https://github.com/bamos/cv to papers.yml
  * add bibtex, pdf, code crossrefs from talks & bib file
