module Jekyll
  class STLTag < Liquid::Tag
    def initialize(tag_name, filename, tokens)
      super
      @filename = filename.strip
    end

    def render(context)
      full_filename = "#{context.registers[:site].config["baseurl"]}/assets/posts/#{context.registers[:page]["slug"]}/#{@filename}"

      "<div class='stl-container' data-filename='#{full_filename}'><div class='tip'>Interactive 3D Model</div><span class='loading'>Loading...</span></div>"
    end
  end
end

Liquid::Template.register_tag('stl', Jekyll::STLTag)
