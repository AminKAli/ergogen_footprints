module.exports = {
    params: {
      designator: 'EN652812A03',
      side: 'F',
      A: {type: 'net', value: 'RE_A'},
      B: {type: 'net', value: 'GND'},
      C: {type: 'net', value: 'RE_C'},
    },
    body: p => {
        return `
            (footprint "kailh_mouse_rotary" (version 20240108) (generator "pcbnew") (generator_version "8.0")
                (layer "${p.side}.Cu")
                ${p.at}
                (property "Reference" "${p.designator}" (at 0 -10.5 0) (unlocked yes) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.1))))
                (pad "A" smd roundrect (at -2 3.85 ${p.r}) (size 1.3 1.3) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") (roundrect_rratio 0.1) (thermal_bridge_angle 45)
                    ${p.A}
                )
                (pad "B" smd roundrect (at 0 3.85 ${p.r}) (size 1.3 1.3) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") (roundrect_rratio 0.1) (thermal_bridge_angle 45)
                    ${p.B}
                )
                (pad "C" smd roundrect (at 2 3.85 ${p.r}) (size 1.3 1.3) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") (roundrect_rratio 0.1) (thermal_bridge_angle 45)
                    ${p.C}
                )
                (pad "4" smd roundrect (at -3.95 0 ${p.r}) (size 1.7 2.6) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") (roundrect_rratio 0.1) (thermal_bridge_angle 45))
                (pad "5" smd roundrect (at 3.95 0 ${p.r}) (size 1.7 2.6) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") (roundrect_rratio 0.1) (thermal_bridge_angle 45))
                (pad "6" thru_hole circle (at -1 2.1 ${p.r}) (size 0.9 0.9) (drill 0.9) (layers "*.Cu" "*.Mask")(remove_unused_layers no))
                (pad "7" thru_hole circle (at 1 -1.4 ${p.r}) (size 0.7 0.7) (drill 0.7) (layers "*.Cu" "*.Mask")(remove_unused_layers no))
            )
        `
    }
  }