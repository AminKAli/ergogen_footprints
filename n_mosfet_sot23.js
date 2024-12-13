module.exports = {
    params: {
      designator: 'nfet_sot23',
      side: 'B',
      G: {type: 'net', value: 'FET_G'},
      S: {type: 'net', value: 'FET_S'},
      D: {type: 'net', value: 'FET_D'},
    },
    body: p => {
        return `
            (footprint "nfet_sot23" (version 20240108) (generator "pcbnew") (generator_version "8.0")
                (layer "${p.side}.Cu")
                ${p.at}
                (property "Reference" "${p.designator}" (at 0.000002 -2.499997 360) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))))
                (fp_line (start 0.760001 1.58) (end 0.76 0.649997) (stroke (width 0.12) (type solid)) (layer "${p.side}.SilkS"))
                (fp_line (start 0.760001 1.58) (end -0.700004 1.579998) (stroke (width 0.12) (type solid)) (layer "${p.side}.SilkS"))
                (fp_line (start 0.760001 -1.579998) (end 0.760004 -0.65) (stroke (width 0.12) (type solid)) (layer "${p.side}.SilkS"))
                (fp_line (start 0.760001 -1.579998) (end -2.400003 -1.580001) (stroke (width 0.12) (type solid)) (layer "${p.side}.SilkS"))
                (fp_line (start 2.700004 1.749998) (end -2.699998 1.750001) (stroke (width 0.05) (type solid)) (layer "${p.side}.CrtYd"))
                (fp_line (start 2.699998 -1.750001) (end 2.700004 1.749998) (stroke (width 0.05) (type solid)) (layer "${p.side}.CrtYd"))
                (fp_line (start -2.699998 1.750001) (end -2.700004 -1.749998) (stroke (width 0.05) (type solid)) (layer "${p.side}.CrtYd"))
                (fp_line (start -2.700004 -1.749998) (end 2.699998 -1.750001) (stroke (width 0.05) (type solid)) (layer "${p.side}.CrtYd"))
                (fp_line (start 0.7 -1.519998) (end 0.700004 1.520002) (stroke (width 0.1) (type solid)) (layer "${p.side}.Fab"))
                (fp_line (start -0.149999 -1.52) (end 0.7 -1.519998) (stroke (width 0.1) (type solid)) (layer "${p.side}.Fab"))
                (fp_line (start -0.699999 -0.949999) (end -0.149999 -1.52) (stroke (width 0.1) (type solid)) (layer "${p.side}.Fab"))
                (fp_line (start -0.699999 -0.949999) (end -0.699998 1.5) (stroke (width 0.1) (type solid)) (layer "${p.side}.Fab"))
                (fp_line (start -0.7 1.519998) (end 0.700004 1.520002) (stroke (width 0.1) (type solid)) (layer "${p.side}.Fab"))
                (pad "G" smd rect (at -1.499998 -0.95 ${p.r}) (size 1.9 0.8) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask")
                    ${p.G}
                )
                (pad "S" smd rect (at -1.500002 0.95 ${p.r}) (size 1.9 0.8) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask")
                    ${p.S}
                )
                (pad "D" smd rect (at 1.499999 -0.000005 ${p.r}) (size 1.9 0.8) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask")
                    ${p.D}
                )
            )

        `
    }
  }

  