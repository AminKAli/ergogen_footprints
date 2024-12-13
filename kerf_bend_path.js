module.exports = {
    params: {
      designator: 'kerf_bend_path',
    },
    body: p => {
        return `
            (footprint "kerf_bend_path" (version 20240108) (generator "pcbnew") (generator_version "8.0")
                ${p.at}
                (fp_line (start 0 0) (end 6.470477 -24.148145)
                    (stroke (width 0.15) (type default)) (layer "Edge.Cuts")(uuid "9fd41b5f-6d9d-4d3d-8518-081b01730c52"))
                (fp_line (start 11.300105 -22.85405) (end 4.82963 1.294096)
                    (stroke (width 0.15) (type default)) (layer "Edge.Cuts")(uuid "e58ff37b-ad40-4d9d-97d5-7db85450a1cd"))
                (fp_line (start 12.971137 -14.507453) (end 12.971137 -22.636557)
                    (stroke (width 0.15) (type default)) (layer "Edge.Cuts")(uuid "2c4cfa80-bd15-4d83-8f94-01d0354161ae"))
                (fp_line (start 17.971137 -22.636557) (end 17.971137 -14.507453)
                    (stroke (width 0.15) (type default)) (layer "Edge.Cuts")(uuid "fcd94af4-f294-487b-ad8e-917c8fbec011"))
                (fp_line (start 19.755625 -14.506203) (end 19.755625 -39.506203)
                    (stroke (width 0.15) (type default)) (layer "Edge.Cuts")(uuid "f4088581-e9fb-4a2c-bbbd-c932572007f9"))
                (fp_line (start 24.755625 -39.506203) (end 24.755625 -14.506203)
                    (stroke (width 0.15) (type default)) (layer "Edge.Cuts")(uuid "d7b28875-c518-4e86-865c-fb1d7f24126e"))
                (fp_arc (start 6.470478 -24.148145) (mid 12.883042 -28.434226) (end 17.971139 -22.637439)
                    (stroke (width 0.15) (type default)) (layer "Edge.Cuts")(uuid "9d174b47-785f-42ae-a765-574b430bfe5d"))
                (fp_arc (start 11.300106 -22.85405) (mid 12.230846 -23.476939) (end 12.971137 -22.636557)
                    (stroke (width 0.15) (type default)) (layer "Edge.Cuts")(uuid "a06bc6b1-0b8f-4459-8a06-bda88a743d2b"))
                (fp_arc (start 19.755625 -14.506203) (mid 18.862755 -13.614585) (end 17.971137 -14.507453)
                    (stroke (width 0.15) (type default)) (layer "Edge.Cuts")(uuid "54142635-29a4-44d1-8812-1e9b772331e8"))
                (fp_arc (start 24.755625 -14.506203) (mid 18.862755 -8.614585) (end 12.971137 -14.507453)
                    (stroke (width 0.15) (type default)) (layer "Edge.Cuts")(uuid "f4ae8626-f1d6-45a3-b912-efaa434a3407"))
            )
        `
    }
  }