module.exports = {
    params: {
      designator: 'via_1005x11',
      gnd: {type: 'net', value: 'GND'},
      ms0: {type: 'net', value: 'MS0'},
      ms1: {type: 'net', value: 'MS1'},
      ms2: {type: 'net', value: 'MS2'},
      mo: {type: 'net', value: 'MO'},
      covered: true
    },
    body: p => {
      return `
        (footprint "multiplexer_vias" (version 20240108) (generator "pcbnew") (generator_version "8.0")
          ${p.at}
          (pad "1" thru_hole circle (at 4.577633 0.216496) (size 0.6 0.6) (drill 0.3) (layers "F.Cu" "B.Cu") ${p.ms0})
          (pad "1" thru_hole circle (at 5.227636 -0.79369) (size 0.6 0.6) (drill 0.3) (layers "F.Cu" "B.Cu") ${p.ms1})
          (pad "1" thru_hole circle (at 5.885392 0.216496) (size 0.6 0.6) (drill 0.3) (layers "F.Cu" "B.Cu") ${p.ms2})
          (pad "1" thru_hole circle (at 0 0) (size 0.6 0.6) (drill 0.3) (layers "F.Cu" "B.Cu") ${p.gnd})
          (pad "1" thru_hole circle (at 2.61538 -2.93462) (size 0.6 0.6) (drill 0.3) (layers "F.Cu" "B.Cu") ${p.mo})
          (pad "1" thru_hole circle (at 5.25 -5.8) (size 0.6 0.6) (drill 0.3) (layers "F.Cu" "B.Cu") ${p.gnd})
        )          
      `
    }
  }
