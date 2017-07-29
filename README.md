This is the [Jekyll](http://jekyllrb.com/) source code for the [Project Project](http://people.reed.edu/~ormsbyk/projectproject/) website.

## Previewing the site locally

1. Change into the website directory:
   
   ```
   cd ~/Dropbox/ProjectProjectWebsite
   ```

2. Run the Jekyll development server:

   ```
   jekyll serve
   ```

3. Preview the site in your web browser at http://localhost:4000/~ormsbyk/projectproject/. The site will be rebuilt as you update files. Refresh the web browser to see the changes.

## Deploying the site

1. If the `jekyll serve` development server is still running, stop it by pressing `Control-C`.

2. From the root of the website directory on your local machine, run the deploy script:

   ```
   ./deploy
   ```

## Miscellaneous notes

* If you want to deploy the site but also have draft posts that aren't ready to be published yet, you can add `published: false` to the draft posts' YAML frontmatter.
* Full documentation for everything that Jekyll is capable of is at http://jekyllrb.com/.

## Setting up Jekyll on macOS

Perhaps you need to set up Jekyll on another Mac. Here are the steps to make the `jekyll` command available in your shell:

1. Install Xcode command line tools by running `xcode-select --install` and following the popup dialog.

2. Install [Homebrew](https://brew.sh/):

   ```
   /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
   ```

3. Add `/usr/local/bin` to your path:

   ```
   echo 'export PATH="/usr/local/bin:$PATH"' >> ~/.bash_profile
   ```

4. Install a newer version of Ruby:

   ```
   brew install ruby
   ```

5. Finally, install Jekyll:

   ```
   gem install jekyll
   ```
