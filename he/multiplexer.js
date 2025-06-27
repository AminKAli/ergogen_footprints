module.exports = {
    params: {
      designator: 'HE_MUL',
      MS0: {type: 'net', value: 'MS0'},
      MS1: {type: 'net', value: 'MS1'},
      MS2: {type: 'net', value: 'MS2'},
      MO: {type: 'net', value: 'MO'},
      MI1: {type: 'net', value: 'MI1'},
      MI2: {type: 'net', value: 'MI2'},
      MI3: {type: 'net', value: 'MI3'},
      MI4: {type: 'net', value: 'MI4'},
      MI5: {type: 'net', value: 'MI5'},
      MI6: {type: 'net', value: 'MI6'},
      MI7: {type: 'net', value: 'MI7'},
      MI8: {type: 'net', value: 'MI8'},
      GND: {type: 'net', value: 'GND'},
      VCC: {type: 'net', value: '+3.3VA'},
 
    },
    body: p => {
        return `
            (footprint "Package_SO:TSSOP-16_4.4x5mm_P0.65mm"
                (version 20241229)
                (generator "pcbnew")
                (generator_version "9.0")
                (layer "B.Cu")
                (uuid "afa8ae78-d1b9-410c-a66b-101c580070bc")
                ${p.at}
                (descr "TSSOP, 16 Pin (https://www.jedec.org/document_search?search_api_views_fulltext=MO-153), generated with kicad-footprint-generator ipc_gullwing_generator.py")
                (tags "TSSOP SO JEDEC-MO-153-AB TI-PW0016A Microchip-ST Toshiba-TSSOP16-P-0044-0.65A NXP-SOT403-1 Infineon-P-TSSOP-16-800")
                (property "Reference" "${p.ref}" (at 0 4.4 ${p.r}) (layer "B.SilkS") (uuid "aa8c4cdc-a5ef-42fc-96e9-2b843de96005") (effects (font (size 1 1) (thickness 0.15)) (justify mirror)) )
                (property "Value" "SN74LV4051A" (at 0 -3.45 ${p.r}) (layer "B.Fab") (uuid "a81f49bd-0126-4596-8a47-c0cf759bceca") (effects (font (size 1 1) (thickness 0.15)) (justify mirror)) )
                (property "Datasheet" "http://www.intersil.com/content/dam/Intersil/documents/cd40/cd4051bms-52bms-53bms.pdf" (at 0 0 90) (layer "B.Fab") (hide yes) (uuid "13f3b7c0-22c7-42fa-b47a-98929f58c07a") (effects (font (size 1.27 1.27) (thickness 0.15)) (justify mirror)) )
                (property "Description" "Analog Multiplexer 8 to 1 lins" (at 0 0 ${p.r}) (layer "B.Fab") (hide yes) (uuid "8d9f64d6-5544-4fa5-bc0a-0f55753a7da4") (effects (font (size 1.27 1.27) (thickness 0.15)) (justify mirror)) )
                (attr smd)
                (fp_line (start 0 2.735) (end -2.2 2.735) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (net 256) (uuid "979a1d3e-73b6-497c-9e71-28f50e842a95") )
                (fp_line (start 0 2.735) (end 2.2 2.735) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (net 256) (uuid "b670c11e-a3d9-450d-9a52-10492aa9d9d3") )
                (fp_line (start 0 -2.735) (end -2.2 -2.735) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (net 256) (uuid "756e3372-15b6-4623-8cfe-e1ab7c98777a") )
                (fp_line (start 0 -2.735) (end 2.2 -2.735) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (net 256) (uuid "875da71c-3c11-442d-a7c5-8926a29c0d6b") )
                (fp_poly (pts (xy -3.86 2.275) (xy -4.19 2.035) (xy -4.19 2.515)) (stroke (width 0.12) (type solid)) (fill yes) (layer "B.SilkS") (net 256) (uuid "d7da0245-9097-4745-95d1-01169dcad53a") )
                (fp_rect (start -3.85 2.75) (end 3.85 -2.75) (stroke (width 0.05) (type solid)) (fill no) (layer "B.CrtYd") (net 256) (uuid "b0e590a8-0308-4b1e-91ea-147544f6bae5") )
                (fp_line (start -1.2 2.5) (end 2.2 2.5) (stroke (width 0.1) (type solid)) (layer "B.Fab") (net 256) (uuid "ecb7ee5b-cf54-4b41-a594-9c85f495bc33") )
                (fp_line (start 2.2 2.5) (end 2.2 -2.5) (stroke (width 0.1) (type solid)) (layer "B.Fab") (net 256) (uuid "a71942b5-c06e-4b15-bb05-f8335fea7f8c") )
                (fp_line (start -2.2 1.5) (end -1.2 2.5) (stroke (width 0.1) (type solid)) (layer "B.Fab") (net 256) (uuid "a4f38ae5-9137-451d-b0cb-15bba2bdcf41") )
                (fp_line (start -2.2 -2.5) (end -2.2 1.5) (stroke (width 0.1) (type solid)) (layer "B.Fab") (net 256) (uuid "996729c1-4e92-482b-ba91-81d36b1ae8a8") )
                (fp_line (start 2.2 -2.5) (end -2.2 -2.5) (stroke (width 0.1) (type solid)) (layer "B.Fab") (net 256) (uuid "cc180543-f739-4056-9a71-36f700986dc5") )
                (fp_text user "${p.ref}" (at 0 0 ${p.r}) (layer "B.Fab") (uuid "befcc033-9508-4191-b240-9206812fe0d5") (effects (font (size 1 1) (thickness 0.15)) (justify mirror)) )
                (pad "1" smd roundrect (at -2.8625 2.275 ${p.r}) (size 1.475 0.4) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.MI5} (pinfunction "X4") (pintype "passive") (uuid "10ac8630-ff39-42a4-9a12-6eaddc3c3994") )
                (pad "2" smd roundrect (at -2.8625 1.625 ${p.r}) (size 1.475 0.4) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.MI7} (pinfunction "X6") (pintype "passive") (uuid "6c4083dd-d785-46c9-a8ff-14ea1d0ee2cb") )
                (pad "3" smd roundrect (at -2.8625 0.975 ${p.r}) (size 1.475 0.4) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.MO} (pinfunction "X") (pintype "passive") (uuid "13931b1b-9bc4-4324-bcea-be87665c6e7e") )
                (pad "4" smd roundrect (at -2.8625 0.325 ${p.r}) (size 1.475 0.4) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.MI8} (pinfunction "X7") (pintype "passive") (uuid "c0efb77e-327d-4f6f-a152-c6e73ab23826") )
                (pad "5" smd roundrect (at -2.8625 -0.325 ${p.r}) (size 1.475 0.4) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.MI6} (pinfunction "X5") (pintype "passive") (uuid "3af0ed09-4b07-481a-896b-26aef7bd9073") )
                (pad "6" smd roundrect (at -2.8625 -0.975 ${p.r}) (size 1.475 0.4) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.GND} (pinfunction "Inh") (pintype "input") (uuid "a96d02b7-3356-43df-8315-b7709b6162d2") )
                (pad "7" smd roundrect (at -2.8625 -1.625 ${p.r}) (size 1.475 0.4) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.GND} (pinfunction "VEE") (pintype "power_in") (uuid "a72e6169-3cbe-4045-98ed-51670dbb3164") )
                (pad "8" smd roundrect (at -2.8625 -2.275 ${p.r}) (size 1.475 0.4) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.GND} (pinfunction "VSS") (pintype "power_in") (uuid "af2fe636-fa76-4983-8274-c03317dc1431") )
                (pad "9" smd roundrect (at 2.8625 -2.275 ${p.r}) (size 1.475 0.4) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.MS2} (pinfunction "C") (pintype "input") (uuid "5705fa5c-2de3-4517-b93c-9bd75a0a46ba") )
                (pad "10" smd roundrect (at 2.8625 -1.625 ${p.r}) (size 1.475 0.4) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.MS1} (pinfunction "B") (pintype "input") (uuid "c7171182-cc75-495c-be00-9602c15428ff") )
                (pad "11" smd roundrect (at 2.8625 -0.975 ${p.r}) (size 1.475 0.4) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.MS0} (pinfunction "A") (pintype "input") (uuid "641b1f28-8914-46bd-aa10-9abe79a85f62") )
                (pad "12" smd roundrect (at 2.8625 -0.325 ${p.r}) (size 1.475 0.4) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.MI4} (pinfunction "X3") (pintype "passive") (uuid "742cac55-cca7-4ce7-b4df-5ccb015307cc") )
                (pad "13" smd roundrect (at 2.8625 0.325 ${p.r}) (size 1.475 0.4) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.MI1} (pinfunction "X0") (pintype "passive") (uuid "41d0dbf0-6383-424f-a1ca-d9fbe466102a") )
                (pad "14" smd roundrect (at 2.8625 0.975 ${p.r}) (size 1.475 0.4) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.MI2} (pinfunction "X1") (pintype "passive") (uuid "8f587511-0691-4bd0-93ae-05498869e10f") )
                (pad "15" smd roundrect (at 2.8625 1.625 ${p.r}) (size 1.475 0.4) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.MI3} (pinfunction "X2") (pintype "passive") (uuid "fde21487-f160-4bf7-a18c-095d35817aa4") )
                (pad "16" smd roundrect (at 2.8625 2.275 ${p.r}) (size 1.475 0.4) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.VCC} (pinfunction "VDD") (pintype "power_in") (uuid "68305da5-754d-4088-b363-76a1ce2f3125") )
                (embedded_fonts no)
            )
        `
    }
  }