const { series, watch } = require("gulp")
const browsersync = require("browser-sync").create()

function serve(cb) {
  browsersync.init({
    server: {
      baseDir: ".",
    },
  })
  cb()
}

function reload(cb) {
  browsersync.reload()
  cb()
}

function watchForChanges() {
  watch("*.html", reload)
}

exports.default = series(serve, watchForChanges)
