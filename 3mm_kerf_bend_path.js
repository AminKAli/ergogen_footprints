module.exports = {
    params: {
      designator: '3mm_kerf_bend',
    },
    body: p => {
        return `
            (footprint "3mm_kerf_bend_path" (version 20240108) (generator "pcbnew") (generator_version "8.0")
                ${p.at}
                (fp_line (start 9.368254 -23.371688) (end 10.817142 -22.98346)
                    (stroke (width 0.05) (type default)) (layer "Cmts.User")(uuid "39848fb3-b9d8-41d9-8c6c-ff799afa0e03"))
                (fp_line (start 15.317141 -2.98346) (end 18.317141 -2.98346)
                    (stroke (width 0.05) (type default)) (layer "Cmts.User")(uuid "9db100f8-31db-4230-acee-9a395de5b51d"))
                (fp_line (start 0 0) (end 6.470476 -24.148145)
                    (stroke (width 0.15) (type default)) (layer "Edge.Cuts")(uuid "54afbaa0-ce90-4327-af36-91999e13093f"))
                (fp_line (start 9.368254 -23.371688) (end 2.897777 0.776456)
                    (stroke (width 0.15) (type default)) (layer "Edge.Cuts")(uuid "e7835a58-ff8d-4f69-9c96-1a4c00d92b65"))
                (fp_line (start 12.317141 -2.98346) (end 12.317141 -22.98346)
                    (stroke (width 0.15) (type default)) (layer "Edge.Cuts")(uuid "c3ca421c-e7da-4bed-9065-b65e75849707"))
                (fp_line (start 15.317141 -22.98346) (end 15.317141 -2.98346)
                    (stroke (width 0.15) (type default)) (layer "Edge.Cuts")(uuid "1c6c47ef-079c-44f9-badd-f87f550594c3"))
                (fp_line (start 18.317141 -2.98346) (end 18.317141 -39.48346)
                    (stroke (width 0.15) (type default)) (layer "Edge.Cuts")(uuid "05b439d8-aea9-42b7-ad4f-4b5762262c58"))
                (fp_line (start 21.317141 -39.48346) (end 21.317141 -2.98346)
                    (stroke (width 0.15) (type default)) (layer "Edge.Cuts")(uuid "7c435343-f54e-4d2a-888b-f6145b56d272"))
                (fp_arc (start 6.470477 -24.148145) (mid 11.404509 -27.444961) (end 15.317141 -22.98346)
                    (stroke (width 0.15) (type default)) (layer "Edge.Cuts")(uuid "97af6f95-8a7d-4fde-b170-3f8731ec883b"))
                (fp_arc (start 9.368254 -23.371688) (mid 11.012929 -24.470625) (end 12.317141 -22.98346)
                    (stroke (width 0.15) (type default)) (layer "Edge.Cuts")(uuid "51ba134b-022d-45e7-bdea-7bb37b7f1653"))
                (fp_arc (start 18.317141 -2.98346) (mid 16.817141 -1.48346) (end 15.317141 -2.98346)
                    (stroke (width 0.15) (type default)) (layer "Edge.Cuts")(uuid "6dc2b8fe-d23e-474b-9084-930e2baf766d"))
                (fp_arc (start 21.317141 -2.98346) (mid 16.817141 1.51654) (end 12.317141 -2.98346)
                    (stroke (width 0.15) (type default)) (layer "Edge.Cuts")(uuid "8038942f-39ae-4795-a38c-aa002f25a475"))
            )
        `
    }
  }