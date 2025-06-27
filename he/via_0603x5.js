module.exports = {
    params: {
      designator: 'via_0603x5',
      net1: {type: 'net', value: ''},
      net2: {type: 'net', value: ''},
      net3: {type: 'net', value: ''},
      net4: {type: 'net', value: ''},
      net5: {type: 'net', value: ''},

      covered: false
    },
    body: p => {
      const layers = p.covered ? '(layers "*.Cu")' : '(layers "*.Cu" "*.Mask")'
      var vias = []
      p.net1.name != '' ? vias.push(`(pad "1" thru_hole circle  (at 0 -2.5) (size 0.6 0.6) (drill 0.3) ${layers} ${p.net1})`) : null
      p.net2.name != '' ? vias.push(`(pad "1" thru_hole circle  (at 0 -1.25) (size 0.6 0.6) (drill 0.3) ${layers} ${p.net2})`) : null
      p.net3.name != '' ? vias.push(`(pad "1" thru_hole circle  (at 0 0) (size 0.6 0.6) (drill 0.3) ${layers} ${p.net3})`) : null
      p.net4.name != '' ? vias.push(`(pad "1" thru_hole circle  (at 0 1.25) (size 0.6 0.6) (drill 0.3) ${layers} ${p.net4})`) : null
      p.net5.name != '' ? vias.push(`(pad "1" thru_hole circle  (at 0 2.5) (size 0.6 0.6) (drill 0.3) ${layers} ${p.net5})`) : null
      return `
        (footprint "via_0603x5" (version 20240108) (generator "pcbnew") (generator_version "8.0")
          ${p.at}
          ${vias.join('\n')}
        )          
      `
    }
  }
