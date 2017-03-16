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

On a mac, use rvm for managing ruby environment.

Bundler, for managing gems:
`gem install bundler`
`bundler install`

## License

Use this for anything you want.
