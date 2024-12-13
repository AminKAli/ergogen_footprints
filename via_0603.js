module.exports = {
    params: {
      designator: 'via_0603',
      net: {type: 'net', value: ''},
      covered: false
    },
    body: p => {
      const layers = p.covered ? '(layers "*.Cu")' : '(layers "*.Cu" "*.Mask")'
        return `
          (footprint "via_0603" (version 20240108) (generator "pcbnew") (generator_version "8.0")
            ${p.at}
            (pad "1" thru_hole circle  (size 0.6 0.6) (drill 0.3) ${layers} ${p.net})
          )
          
        `
    }
  }
