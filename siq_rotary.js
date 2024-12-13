module.exports = {
    params: {
      designator: 'SIQ-02FVS1',
      side: 'F',
      A: {type: 'net', value: 'RE_A'},
      B: {type: 'net', value: 'GND'},
      C: {type: 'net', value: 'RE_C'},
      S: {type: 'net', value: 'RE_S'}
    },
    body: p => {
        return `
            (footprint "siq_rotary" (version 20240108) (generator "pcbnew") (generator_version "8.0")
                (layer "${p.side}.Cu")
                ${p.at}
                (property "Reference" "${p.designator}" (at 0 -10.5 0) (unlocked yes) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.1))))
                
                (pad "" np_thru_hole circle (at -3 4.5) (size 1 1) (drill 1.6) (layers "F&B.Cu" "*.Mask"))
                (pad "" np_thru_hole circle (at 3 4.5) (size 1 1) (drill 1.6) (layers "F&B.Cu" "*.Mask"))
                (pad "" smd roundrect (at -5.4 1.3 ${p.r}) (size 1.2 1.3) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") (roundrect_rratio 0.1) (thermal_bridge_angle 45))
                (pad "" smd roundrect (at 5.4 1.3 ${p.r}) (size 1.2 1.3) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") (roundrect_rratio 0.1) (thermal_bridge_angle 45))
                (pad "" smd roundrect (at -5.4 5.4 ${p.r}) (size 1.2 1.3) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") (roundrect_rratio 0.1) (thermal_bridge_angle 45))
                (pad "" smd roundrect (at 5.4 5.4 ${p.r}) (size 1.2 1.3) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") (roundrect_rratio 0.1) (thermal_bridge_angle 45))
                (pad "A" smd roundrect (at -4 7.7 ${p.r}) (size 1.3 1.2) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") (roundrect_rratio 0.1) (thermal_bridge_angle 45)
                    ${p.A}
                )
                (pad "S" smd roundrect (at -1.475 7.7 ${p.r}) (size 1.3 1.2) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") (roundrect_rratio 0.1) (thermal_bridge_angle 45)
                    ${p.S}
                )
                (pad "C" smd roundrect (at 1.475 7.7 ${p.r}) (size 1.3 1.2) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") (roundrect_rratio 0.1) (thermal_bridge_angle 45)
                    ${p.C}
                )
                (pad "B" smd roundrect (at 4 7.7 ${p.r}) (size 1.3 1.2) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") (roundrect_rratio 0.1) (thermal_bridge_angle 45)
                    ${p.B}
                )
            )
        `
    }
  }