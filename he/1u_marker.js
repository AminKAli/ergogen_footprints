module.exports = {
    params: {
      designator: '1U_HE_MARKER',
    },
    body: p => {
        return `
            (footprint "1U_MARKER"
                (version 20241229)
                (generator "pcbnew")
                (generator_version "9.0")
                (layer "F.Cu")
                (uuid "efac4dac-bc3a-401c-91cf-be56d71cdb10")
                ${p.at}
                (property "Reference" "${p.designator}" (at 0 3.175 ${p.r}) (layer "Dwgs.User") (uuid "f5a43f60-bf20-43ab-bed2-3a93152df807") (effects 	(font (size 1 1) (thickness 0.15)) )\)
                (property "Value" "1U" (at 0 -7.9375 ${p.r}) (layer "Dwgs.User") (uuid "bff6c386-3009-4521-b4be-3bd6259619ab") (effects 	(font (size 1 1) (thickness 0.15)) )\)
                (property "Datasheet" "" (at 0 0 ${p.r}) (layer "F.Fab") (hide yes) (uuid "c1bf1d13-42b6-45ec-8766-8f7a2dc0a4df") (effects 	(font (size 1.27 1.27) (thickness 0.15)) )\)
                (property "Description" "Mounting Hole without connection" (at 0 0 ${p.r}) (layer "F.Fab") (hide yes) (uuid "3842b0b6-4c0e-4b4d-9381-e7eb6f06d090") (effects 	(font (size 1.27 1.27) (thickness 0.15)) )\)
                (path "/3ff8f7aa-28f7-4a66-9072-7ebd235ddfa0")
                (attr through_hole exclude_from_bom)
                (fp_poly (pts (xy 7.0250 4.0143) (xy 4.0143 7.0250) (xy -4.0143 7.0250) (xy -7.0250 4.0143) (xy -7.0250 -4.0143) (xy -4.0143 -7.0250) (xy 4.0143 -7.0250) (xy 7.0250 -4.0143)) (layer "F.SilkS") (width 0.5) (fill no))
                (fp_line (start -9.525 -9.525) (end 9.525 -9.525) (stroke (width 0.15) (type solid)) (layer "Dwgs.User") (uuid "0a9a6a48-e293-4d99-b6a3-43cfb7a4f8cf")\)
                (fp_line (start -9.525 9.525) (end -9.525 -9.525) (stroke (width 0.15) (type solid)) (layer "Dwgs.User") (uuid "608f1ef5-c0b2-499e-98a3-4fb0a02692b8")\)
                (fp_line (start -7 -7) (end -7 -5) (stroke (width 0.15) (type solid)) (layer "Dwgs.User") (uuid "97accb74-4b8b-4706-9d86-17d27099017b")\)
                (fp_line (start -7 5) (end -7 7) (stroke (width 0.15) (type solid)) (layer "Dwgs.User") (uuid "ddc2d91f-0386-4e99-bb50-dd6bd059b693")\)
                (fp_line (start -7 7) (end -5 7) (stroke (width 0.15) (type solid)) (layer "Dwgs.User") (uuid "997891ce-4970-4e19-9094-b252ac6a69a6")\)
                (fp_line (start -5 -7) (end -7 -7) (stroke (width 0.15) (type solid)) (layer "Dwgs.User") (uuid "6062299b-46c8-4cdf-b81b-41e3fc2e7c18")\)
                (fp_line (start 5 -7) (end 7 -7) (stroke (width 0.15) (type solid)) (layer "Dwgs.User") (uuid "285a1719-68f0-4706-a126-2c5db6c25051")\)
                (fp_line (start 5 7) (end 7 7) (stroke (width 0.15) (type solid)) (layer "Dwgs.User") (uuid "7a211293-1bee-4717-8b44-13cab90c0101")\)
                (fp_line (start 7 -7) (end 7 -5) (stroke (width 0.15) (type solid)) (layer "Dwgs.User") (uuid "549daa96-21f2-438e-a18b-a9000809eda6")\)
                (fp_line (start 7 7) (end 7 5) (stroke (width 0.15) (type solid)) (layer "Dwgs.User") (uuid "88c036c3-974c-41a1-8768-d1f361fb2ea6")\)
                (fp_line (start 9.525 -9.525) (end 9.525 9.525) (stroke (width 0.15) (type solid)) (layer "Dwgs.User") (uuid "30fa6c8e-8bc9-4791-9328-41a4800d6047")\)
                (fp_line (start 9.525 9.525) (end -9.525 9.525) (stroke (width 0.15) (type solid)) (layer "Dwgs.User") (uuid "4b6c9237-8e8d-4f7d-8748-a863657878d8")\)
                (pad "" np_thru_hole circle (at -5.08 0 ${p.r}) (size 1.75 1.75) (drill 1.75) (layers "*.Cu" "*.Mask") (uuid "1b85efcd-921b-4705-82a4-dc00d5eef34a")\)
                (pad "" np_thru_hole circle (at 5.08 0 ${p.r}) (size 1.75 1.75) (drill 1.75) (layers "*.Cu" "*.Mask") (uuid "f0eda4d0-d0b5-48fd-b960-9b0c0077bb5f")\)
                (pad "" np_thru_hole circle (at 0 0 ${p.r}) (size 5.2 5.2) (drill 5.2) (layers "*.Cu" "*.Mask")\)
                (embedded_fonts no)
            )
        `
    }
  }