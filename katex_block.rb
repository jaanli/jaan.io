require 'execjs'

module Jekyll
    module Tags
        class KatexBlock < Liquid::Block

            def initialize(tag, markup, tokens)
                super
                @tag = tag
                @tokens = tokens
                @markup = markup

                @centred = markup.include? 'centred'
            end

            # Config defaults
            PATH_TO_JS = "./public/js/katex.min.js"

            def render(context)
                # Take config from global `_config.yml', if it exists
                katex_config = context.registers[:site].config['katex'] || {}

                @config = {}

                # Take path to KaTeX javascript from site config or default
                @config['path_to_js'] = katex_config['path_to_js'] || PATH_TO_JS

                import_js(@config['path_to_js'])

                latex_source = super

                if @centred
                    return katexify_centred(latex_source)
                end

                katexify_inline(latex_source)
            end

            def import_js(path)
                katexsrc = open(path).read
                @katex = ExecJS.compile(katexsrc)
            end

            def katexify_inline(content)
                eqn_to_html(content)
            end

            def katexify_centred(content)
                style = "text-align: center; margin-top: 0.5em; margin-bottom: 0.5em;"
                div_open = "<div style='#{style}'>"
                div_close = "</div>"

                s = "\\displaystyle " + content

                return div_open + eqn_to_html(s) + div_close
            end

            def eqn_to_html(string)
                return @katex.call("katex.renderToString", string)
            end
        end
    end
end

Liquid::Template.register_tag('latex', Jekyll::Tags::KatexBlock)
