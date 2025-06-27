module.exports = {
    params: {
      designator: '1U_HE_MARKER',
    },
    body: p => {
        return `
            (footprint "1.5U_MARKER"
                (version 20241229)
                (generator "pcbnew")
                (generator_version "9.0")
                (layer "F.Cu")
                (uuid "e6f6406d-c8a1-4b9c-8fdb-42a493311b70")
                ${p.at}
                (property "Reference" "${p.designator}" (at 0 3.175 ${p.r}) (layer "Dwgs.User") (uuid "3f01703e-f499-4641-92e4-f39e32b6c0d8") (effects (font (size 1 1) (thickness 0.15)) ))
                (property "Value" "1.5U" (at 0 -7.9375 ${p.r}) (layer "Dwgs.User") (uuid "4dd32c69-1e41-42de-aab7-b02a444af546") (effects (font (size 1 1) (thickness 0.15)) ))
                (property "Datasheet" "" (at 0 0 ${p.r}) (layer "F.Fab") (hide yes) (uuid "24d47946-eb6c-451c-a5fe-f74d57e823fd") (effects (font (size 1.27 1.27) (thickness 0.15)) ))
                (property "Description" "Mounting Hole without connection" (at 0 0 ${p.r}) (layer "F.Fab") (hide yes) (uuid "34fae24c-584f-4ec9-a891-06605cf5962b") (effects (font (size 1.27 1.27) (thickness 0.15)) ))
                (path "/c7eebadb-9c91-4a54-901e-8f37c8744944")
                (attr through_hole exclude_from_bom)
                (fp_poly (pts (xy 7.0250 4.0143) (xy 4.0143 7.0250) (xy -4.0143 7.0250) (xy -7.0250 4.0143) (xy -7.0250 -4.0143) (xy -4.0143 -7.0250) (xy 4.0143 -7.0250) (xy 7.0250 -4.0143)) (layer "F.SilkS") (width 0.5) (fill no))
                (fp_line (start -14.2875 -9.525) (end 14.2875 -9.525) (stroke (width 0.15) (type solid)) (layer "Dwgs.User") (uuid "fc72a4cd-9fa8-4f50-97e6-c1f515a47d40"))
                (fp_line (start -14.2875 9.525) (end -14.2875 -9.525) (stroke (width 0.15) (type solid)) (layer "Dwgs.User") (uuid "23be3409-f1d2-4889-9cb6-9bfd81eab6dc"))
                (fp_line (start -14.2875 9.525) (end 14.2875 9.525) (stroke (width 0.15) (type solid)) (layer "Dwgs.User") (uuid "901e2430-777f-42aa-8427-94fc96686659"))
                (fp_line (start -7 -7) (end -7 -5) (stroke (width 0.15) (type solid)) (layer "Dwgs.User") (uuid "d7d554c3-4b7a-47fc-8ae2-f66283fa6a50"))
                (fp_line (start -7 5) (end -7 7) (stroke (width 0.15) (type solid)) (layer "Dwgs.User") (uuid "43b4a9d8-3fab-4037-91f1-f4136b281d69"))
                (fp_line (start -7 7) (end -5 7) (stroke (width 0.15) (type solid)) (layer "Dwgs.User") (uuid "a0079aca-b31c-4f0b-aede-783ce01ebb5a"))
                (fp_line (start -5 -7) (end -7 -7) (stroke (width 0.15) (type solid)) (layer "Dwgs.User") (uuid "408d2279-dfb8-4834-b0ca-c027ff9e46d3"))
                (fp_line (start 5 -7) (end 7 -7) (stroke (width 0.15) (type solid)) (layer "Dwgs.User") (uuid "df93b1e8-424a-4777-a3fa-890af09c2cf5"))
                (fp_line (start 5 7) (end 7 7) (stroke (width 0.15) (type solid)) (layer "Dwgs.User") (uuid "64f7498c-1bd8-4188-b88d-e771af3c4ea3"))
                (fp_line (start 7 -7) (end 7 -5) (stroke (width 0.15) (type solid)) (layer "Dwgs.User") (uuid "2a347636-fd5e-4c29-8d9e-3d1d23272452"))
                (fp_line (start 7 7) (end 7 5) (stroke (width 0.15) (type solid)) (layer "Dwgs.User") (uuid "955ca16b-c46d-4075-b76e-d94dd7ac8a75"))
                (fp_line (start 14.2875 -9.525) (end 14.2875 9.525) (stroke (width 0.15) (type solid)) (layer "Dwgs.User") (uuid "d3d0183f-1ed1-4859-b2ec-9e76a09ac5ad"))
                (pad "" np_thru_hole circle (at -5.08 0 ${p.r}) (size 1.75 1.75) (drill 1.75) (layers "*.Cu" "*.Mask") (uuid "b807f780-a3bd-49c1-87ef-d5d125bfb989"))
                (pad "" np_thru_hole circle (at 5.08 0 ${p.r}) (size 1.75 1.75) (drill 1.75) (layers "*.Cu" "*.Mask") (uuid "b9341e89-a1f6-4794-b400-0d49bed62f44"))
                (pad "" np_thru_hole circle (at 0 0 ${p.r}) (size 5.2 5.2) (drill 5.2) (layers "*.Cu" "*.Mask"))
                (embedded_fonts no)
            )
        `
    }
  }