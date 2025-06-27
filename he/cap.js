module.exports = {
    params: {
      designator: 'HE_C',
      P1: {type: 'net', value: '+3.3VA'},
      P2: {type: 'net', value: 'GND'},
    },
    body: p => {
        return `
            (footprint "Capacitor_SMD:C_0402_1005Metric"
                (version 20241229)
                (generator "pcbnew")
                (generator_version "9.0")
                (layer "B.Cu")
                (uuid "5abd4356-f3bd-4104-896a-d2e0951dd576")
                ${p.at}
                (descr "Capacitor SMD 0402 (1005 Metric), square (rectangular) end terminal, IPC-7351 nominal, (Body size source: IPC-SM-782 page 76, https://www.pcb-3d.com/wordpress/wp-content/uploads/ipc-sm-782a_amendment_1_and_2.pdf), generated with kicad-footprint-generator")
                (tags "capacitor")
                (property "Reference" "${p.ref}" (at -1.6 -0.8 ${p.r}) (layer "B.SilkS") (hide yes) (uuid "76da2937-555e-46d1-812e-f0c9669898f9") (effects 	(font (size 1 1) (thickness 0.15)) 	(justify left mirror) )\)
                (property "Value" "100n" (at 0 -1.16 ${p.r}) (layer "B.Fab") (uuid "d809d836-5f43-4384-9a55-a22c5f6759a4") (effects 	(font (size 1 1) (thickness 0.15)) 	(justify mirror) )\)
                (property "Datasheet" "" (at 0 0 ${p.r}) (layer "B.Fab") (hide yes) (uuid "f74a2664-0d8e-45dc-97bd-3651fbfca4c0") (effects 	(font (size 1.27 1.27) (thickness 0.15)) 	(justify mirror) )\)
                (property "Description" "Unpolarized capacitor" (at 0 0 ${p.r}) (layer "B.Fab") (hide yes) (uuid "df2e00c2-9d5f-4646-a056-462a8a1833c4") (effects 	(font (size 1.27 1.27) (thickness 0.15)) 	(justify mirror) )\)
                (path "/885e0bbf-2066-4017-bdf7-dc5164776b91")
                (attr smd)
                (fp_line (start -0.107836 0.36) (end 0.107836 0.36) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "948ba29e-3386-457e-82b4-e4aee641850d")\)
                (fp_line (start -0.107836 -0.36) (end 0.107836 -0.36) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "bc3cfd57-2b53-451b-b3af-37bf59839591")\)
                (fp_line (start -0.91 0.46) (end 0.91 0.46) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "339c3df0-3073-4136-bc6e-53824512702f")\)
                (fp_line (start 0.91 0.46) (end 0.91 -0.46) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "32a95e95-c711-49c8-9628-5b62f109e19a")\)
                (fp_line (start -0.91 -0.46) (end -0.91 0.46) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "eb934856-ac17-471c-bd5c-d84cbb110148")\)
                (fp_line (start 0.91 -0.46) (end -0.91 -0.46) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "96fdbe31-e5be-414c-8983-0f936dd22410")\)
                (fp_line (start -0.5 0.25) (end 0.5 0.25) (stroke (width 0.1) (type solid)) (layer "B.Fab") (uuid "4e368bab-9da2-43d2-a376-a4998530eec5")\)
                (fp_line (start 0.5 0.25) (end 0.5 -0.25) (stroke (width 0.1) (type solid)) (layer "B.Fab") (uuid "9c7ed21a-dbc1-42ba-90ec-355080171e23")\)
                (fp_line (start -0.5 -0.25) (end -0.5 0.25) (stroke (width 0.1) (type solid)) (layer "B.Fab") (uuid "783906c9-d233-4086-97d9-50da563cbe7d")\)
                (fp_line (start 0.5 -0.25) (end -0.5 -0.25) (stroke (width 0.1) (type solid)) (layer "B.Fab") (uuid "d52b5149-50ab-477d-8e31-83ca418ebc53")\)
                (fp_text user "${p.ref}" (at 0 0 ${p.r}) (layer "B.Fab") (uuid "289de3b2-3811-4107-bae8-5a53f69d6a21") (effects 	(font (size 0.25 0.25) (thickness 0.04)) 	(justify mirror) )\)
                (pad "1" smd roundrect (at -0.48 0 ${p.r}) (size 0.56 0.62) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.P1} (pintype "passive") (uuid "b5225ce9-5d48-412d-821a-479a481428d2")\)
                (pad "2" smd roundrect (at 0.48 0 ${p.r}) (size 0.56 0.62) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.P2} (pintype "passive") (uuid "ce06915d-51a3-43bf-ba8c-97bcf839625d")\)
                (embedded_fonts no)
            )
        `
    }
  }