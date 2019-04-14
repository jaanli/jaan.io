require 'html-proofer'

task :test do
  sh "bundle exec jekyll build"
  options = { :assume_extension => true,
              :allow_hash_href => true
            }
  HTMLProofer.check_directory("./_site", options).run
end