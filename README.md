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

Check for broken internal and external links:
`rake test`

## Deploying

Deploy with [s3_website](https://github.com/laurilehmijoki/s3_website). Use the `.env` file to set the `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` environment variables.
Build with `bundle exec jekyll build`, deploy to S3 with `s3_website push`.

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

### Images in posts
* use style="max-width: 38%" in html tags

### Updating google metadata
* Update index.md, about.md, home.html

## License

Use this for anything you want.

## Wishlist
* fix copy to bibtex button; overriding CSS with `-webkit-appearance: none;` does not seem to work.
* figure out how to use `markdownify` liquid filter in paper template, to support markdown in `paper.description`
