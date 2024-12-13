module.exports = {
  params: {
    designator: 'TL3342_RST',
    side: 'F',
    from: {type: 'net', value: 'RST'},
    to: {type: 'net', value: 'GND'},
  },
  body: p => {
      return `
          (footprint "TL3342_RST" (version 20240108) (generator "pcbnew") (generator_version "8.0")
            (layer "${p.side}.Cu")
            ${p.at}
            (property "Reference" "${p.designator}" (at 0 -3.75 0) (layer "${p.side}.SilkS")(effects (font (size 0.7 0.7) (thickness 0.15))))
            (fp_line (start -2.75 -1) (end -2.75 1) (stroke (width 0.12) (type solid)) (layer "F.SilkS"))
            (fp_line (start -1.7 -2.3) (end -1.25 -2.75) (stroke (width 0.12) (type solid)) (layer "F.SilkS"))
            (fp_line (start -1.7 2.3) (end -1.25 2.75)(stroke (width 0.12) (type solid)) (layer "F.SilkS"))
            (fp_line (start -1.25 -2.75) (end 1.25 -2.75) (stroke (width 0.12) (type solid)) (layer "F.SilkS"))
            (fp_line (start -1.25 2.75) (end 1.25 2.75) (stroke (width 0.12) (type solid)) (layer "F.SilkS"))
            (fp_line (start 1.7 -2.3) (end 1.25 -2.75) (stroke (width 0.12) (type solid)) (layer "F.SilkS"))
            (fp_line (start 1.7 2.3) (end 1.25 2.75) (stroke (width 0.12) (type solid)) (layer "F.SilkS"))
            (fp_line (start 2.75 -1) (end 2.75 1) (stroke (width 0.12) (type solid)) (layer "F.SilkS"))
            (fp_line (start -4.25 -3) (end 4.25 -3) (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
            (fp_line (start -4.25 3) (end -4.25 -3) (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
            (fp_line (start 4.25 -3) (end 4.25 3) (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
            (fp_line (start 4.25 3) (end -4.25 3) (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
            (fp_line (start -3.2 -2.1) (end -3.2 -1.6) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
            (fp_line (start -3.2 -1.6) (end -2.2 -1.6) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
            (fp_line (start -3.2 1.6) (end -2.2 1.6) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
            (fp_line (start -3.2 2.1) (end -3.2 1.6) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
            (fp_line (start -2.7 -2.1) (end -2.7 -1.6) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
            (fp_line (start -2.7 2.1) (end -2.7 1.6) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
            (fp_line (start -2.6 -1.2) (end -2.6 1.2) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
            (fp_line (start -2.6 1.2) (end -1.2 2.6) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
            (fp_line (start -2 -1) (end -1 -2) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
            (fp_line (start -2 1) (end -2 -1) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
            (fp_line (start -1.7 -2.1) (end -3.2 -2.1) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
            (fp_line (start -1.7 2.1) (end -3.2 2.1) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
            (fp_line (start -1.2 -2.6) (end -2.6 -1.2) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
            (fp_line (start -1.2 2.6) (end 1.2 2.6) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
            (fp_line (start -1 -2) (end 1 -2) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
            (fp_line (start -1 2) (end -2 1) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
            (fp_line (start 1 -2) (end 2 -1) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
            (fp_line (start 1 2) (end -1 2) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
            (fp_line (start 1.2 -2.6) (end -1.2 -2.6) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
            (fp_line (start 1.2 2.6) (end 2.6 1.2) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
            (fp_line (start 1.7 -2.1) (end 3.2 -2.1) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
            (fp_line (start 1.7 2.1) (end 3.2 2.1) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
            (fp_line (start 2 -1) (end 2 1) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
            (fp_line (start 2 1) (end 1 2) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
            (fp_line (start 2.6 -1.2) (end 1.2 -2.6) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
            (fp_line (start 2.6 1.2) (end 2.6 -1.2) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
            (fp_line (start 2.7 -2.1) (end 2.7 -1.6) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
            (fp_line (start 2.7 2.1) (end 2.7 1.6) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
            (fp_line (start 3.2 -2.1) (end 3.2 -1.6) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
            (fp_line (start 3.2 -1.6) (end 2.2 -1.6) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
            (fp_line (start 3.2 1.6) (end 2.2 1.6) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
            (fp_line (start 3.2 2.1) (end 3.2 1.6) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
            (fp_circle (center 0 0) (end 1 0) (stroke (width 0.1) (type solid)) (fill none) (layer "F.Fab"))
            (pad "1" smd rect (at -3.15 -1.9) (size 1.7 1) (layers "F.Cu" "F.Paste" "F.Mask") ${p.from})
            (pad "1" smd rect (at 3.15 -1.9) (size 1.7 1) (layers "F.Cu" "F.Paste" "F.Mask") ${p.from})
            (pad "2" smd rect (at -3.15 1.9) (size 1.7 1) (layers "F.Cu" "F.Paste" "F.Mask") ${p.to})
            (pad "2" smd rect (at 3.15 1.9) (size 1.7 1) (layers "F.Cu" "F.Paste" "F.Mask") ${p.to})
          )
      `
  }
}


