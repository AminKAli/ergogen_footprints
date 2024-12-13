module.exports = {
    params: {
      designator: 'kerf_bend_path_mirrored',
    },
    body: p => {
        return `
            (footprint "kerf_bend_path_mirrored" (version 20240108) (generator "pcbnew") (generator_version "8.0")
                ${p.at}
                (fp_line (start -24.755625 -39.506203) (end -24.755625 -14.506203)
                    (stroke (width 0.15) (type default)) (layer "Edge.Cuts")(uuid "8bdf7c3d-ad55-4eb6-a6f2-4bfcccdf7670"))
                (fp_line (start -19.755625 -14.506203) (end -19.755625 -39.506203)
                    (stroke (width 0.15) (type default)) (layer "Edge.Cuts")(uuid "feb0a261-f37d-4f3a-92ea-98c466f66a09"))
                (fp_line (start -17.971137 -22.636557) (end -17.971137 -14.507453)
                    (stroke (width 0.15) (type default)) (layer "Edge.Cuts")(uuid "053541e8-66c3-4028-81d0-b5fe7135712f"))
                (fp_line (start -12.971137 -14.507453) (end -12.971137 -22.636557)
                    (stroke (width 0.15) (type default)) (layer "Edge.Cuts")(uuid "7908d209-6547-403f-9368-98f337417b69"))
                (fp_line (start -11.300105 -22.85405) (end -4.82963 1.294096)
                    (stroke (width 0.15) (type default)) (layer "Edge.Cuts")(uuid "47cc7d37-fc96-4962-afa9-63a427ed4baf"))
                (fp_line (start 0 0) (end -6.470477 -24.148145)
                    (stroke (width 0.15) (type default)) (layer "Edge.Cuts")(uuid "3c3fb7d7-4d29-4ac7-ace8-08272267e1fc"))
                (fp_arc (start -17.971139 -22.637439) (mid -12.883042 -28.434226) (end -6.470478 -24.148145)
                    (stroke (width 0.15) (type default)) (layer "Edge.Cuts")(uuid "02249acf-ced3-418a-80ee-4994c40293c4"))
                (fp_arc (start -17.971137 -14.507453) (mid -18.862756 -13.614587) (end -19.755625 -14.506203)
                    (stroke (width 0.15) (type default)) (layer "Edge.Cuts")(uuid "02965eb4-4175-4567-9560-726f1afa4d17"))
                (fp_arc (start -12.971137 -22.636557) (mid -12.230847 -23.476941) (end -11.300106 -22.85405)
                    (stroke (width 0.15) (type default)) (layer "Edge.Cuts")(uuid "e573424a-1626-4a6d-9d83-d2c53dfb0780"))
                (fp_arc (start -12.971137 -14.507453) (mid -18.862756 -8.614587) (end -24.755625 -14.506203)
                    (stroke (width 0.15) (type default)) (layer "Edge.Cuts")(uuid "46429488-3f6e-4208-a23b-ec8f5e998b9c"))
            )
        `
    }
  }