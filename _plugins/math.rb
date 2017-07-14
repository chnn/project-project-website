module Jekyll
  class MathBlockTag < Liquid::Tag
    def render(context)
      '<script type="math/tex; mode=display">'
    end
  end
  class MathInlineTag < Liquid::Tag
    def render(context)
      '<script type="math/tex">'
    end
  end
  class MathEndTag < Liquid::Tag
    def render(context)
      '</script>'
    end
  end
end

Liquid::Template.register_tag('displaymath', Jekyll::MathBlockTag)
Liquid::Template.register_tag('enddisplaymath', Jekyll::MathEndTag)
Liquid::Template.register_tag('math', Jekyll::MathInlineTag)
Liquid::Template.register_tag('endmath', Jekyll::MathEndTag)
Liquid::Template.register_tag('m', Jekyll::MathInlineTag)
Liquid::Template.register_tag('em', Jekyll::MathEndTag)
