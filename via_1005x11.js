module.exports = {
    params: {
      designator: 'via_1005x11',
      net1: {type: 'net', value: ''},
      net2: {type: 'net', value: ''},
      net3: {type: 'net', value: ''},
      net4: {type: 'net', value: ''},
      net5: {type: 'net', value: ''},
      net6: {type: 'net', value: ''},
      net7: {type: 'net', value: ''},
      net8: {type: 'net', value: ''},
      net9: {type: 'net', value: ''},
      net10: {type: 'net', value: ''},
      net11: {type: 'net', value: ''},
      covered: false
    },
    body: p => {
      const layers = p.covered ? '(layers "*.Cu")' : '(layers "*.Cu" "*.Mask")'
      var vias = []
      p.net1.name != '' ? vias.push(`(pad "1" thru_hole circle  (at 0 0) (size 1.0 1.0) (drill 0.5) ${layers} ${p.net1})`) : null
      p.net2.name != '' ? vias.push(`(pad "1" thru_hole circle  (at 0 2) (size 1.0 1.0) (drill 0.5) ${layers} ${p.net2})`) : null
      p.net3.name != '' ? vias.push(`(pad "1" thru_hole circle  (at 0 4) (size 1.0 1.0) (drill 0.5) ${layers} ${p.net3})`) : null
      p.net4.name != '' ? vias.push(`(pad "1" thru_hole circle  (at 0 6) (size 1.0 1.0) (drill 0.5) ${layers} ${p.net4})`) : null
      p.net5.name != '' ? vias.push(`(pad "1" thru_hole circle  (at 0 8) (size 1.0 1.0) (drill 0.5) ${layers} ${p.net5})`) : null
      p.net6.name != '' ? vias.push(`(pad "1" thru_hole circle  (at 0 10) (size 1.0 1.0) (drill 0.5) ${layers} ${p.net6})`) : null
      p.net7.name != '' ? vias.push(`(pad "1" thru_hole circle  (at 0 12) (size 1.0 1.0) (drill 0.5) ${layers} ${p.net7})`) : null
      p.net8.name != '' ? vias.push(`(pad "1" thru_hole circle  (at 0 14) (size 1.0 1.0) (drill 0.5) ${layers} ${p.net8})`) : null
      p.net9.name != '' ? vias.push(`(pad "1" thru_hole circle  (at 0 16) (size 1.0 1.0) (drill 0.5) ${layers} ${p.net9})`) : null
      p.net10.name != '' ? vias.push(`(pad "1" thru_hole circle  (at 0 18) (size 1.0 1.0) (drill 0.5) ${layers} ${p.net10})`) : null
      p.net11.name != '' ? vias.push(`(pad "1" thru_hole circle  (at 0 20) (size 1.0 1.0) (drill 0.5) ${layers} ${p.net11})`) : null

      return `
        (footprint "via_1005x11" (version 20240108) (generator "pcbnew") (generator_version "8.0")
          ${p.at}
          ${vias.join('\n')}
        )          
      `
    }
  }
