const React = require('react')
const themeProvider = require('./lib/theme-provider')

exports.wrapRootElement = themeProvider

exports.onRenderBody = ({ setPostBodyComponents }) => {
  const logger =
    process.env.NODE_ENV === 'production' ? (
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html:
            "console.log('Wondering how this site was made? Check out the colophon. https://lowmess.com/colophon')",
        }}
      />
    ) : (
      ''
    )

  setPostBodyComponents([logger])
}