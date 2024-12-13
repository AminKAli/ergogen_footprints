module.exports = {
    params: {
      designator: '3mm_kerf_bend_mirrored',
    },
    body: p => {
        return `
            (footprint "3mm_kerf_bend_path" (version 20240108) (generator "pcbnew") (generator_version "8.0")
                ${p.at}
                (fp_line (start -15.317141 -2.98346) (end -18.317141 -2.98346)
                    (stroke (width 0.05) (type default)) (layer "Cmts.User")(uuid "7a38268b-5c52-4cea-81c3-6295c1af271d"))
                (fp_line (start -9.368254 -23.371688) (end -10.817142 -22.98346)
                    (stroke (width 0.05) (type default)) (layer "Cmts.User")(uuid "868a7ef0-8106-4a0d-b122-b8c5e38e2ddc"))
                (fp_line (start -21.317141 -39.48346) (end -21.317141 -2.98346)
                    (stroke (width 0.15) (type default)) (layer "Edge.Cuts")(uuid "6fd371ad-9c6d-4b15-8c40-0aa69201698e"))
                (fp_line (start -18.317141 -2.98346) (end -18.317141 -39.48346)
                    (stroke (width 0.15) (type default)) (layer "Edge.Cuts")(uuid "58268e53-b84f-4ed7-b65d-e9decdacb405"))
                (fp_line (start -15.317141 -22.98346) (end -15.317141 -2.98346)
                    (stroke (width 0.15) (type default)) (layer "Edge.Cuts")(uuid "e865b224-4020-490e-9308-4de1bc1c5118"))
                (fp_line (start -12.317141 -2.98346) (end -12.317141 -22.98346)
                    (stroke (width 0.15) (type default)) (layer "Edge.Cuts")(uuid "7c70c212-4f7d-4a10-917c-82b0cca5cb52"))
                (fp_line (start -9.368254 -23.371688) (end -2.897777 0.776456)
                    (stroke (width 0.15) (type default)) (layer "Edge.Cuts")(uuid "5ab068f1-311d-44ca-bc0e-622fb22c14dd"))
                (fp_line (start 0 0) (end -6.470476 -24.148145)
                    (stroke (width 0.15) (type default)) (layer "Edge.Cuts")(uuid "371f4664-8f6a-422d-a11d-ca776b07982b"))
                (fp_arc (start -15.317141 -22.98346) (mid -11.40451 -27.444962) (end -6.470477 -24.148145)
                    (stroke (width 0.15) (type default)) (layer "Edge.Cuts")(uuid "b6537bb3-dc78-403b-8e7c-c4747ceadf99"))
                (fp_arc (start -15.317141 -2.98346) (mid -16.817141 -1.48346) (end -18.317141 -2.98346)
                    (stroke (width 0.15) (type default)) (layer "Edge.Cuts")(uuid "b2440be1-92c3-4ccb-b34d-5e353ee702c5"))
                (fp_arc (start -12.317141 -22.98346) (mid -11.012931 -24.470628) (end -9.368254 -23.371688)
                    (stroke (width 0.15) (type default)) (layer "Edge.Cuts")(uuid "e9f3d1a4-94a7-4d66-a6e9-83f9de246072"))
                (fp_arc (start -12.317141 -2.98346) (mid -16.817141 1.51654) (end -21.317141 -2.98346)
                    (stroke (width 0.15) (type default)) (layer "Edge.Cuts")(uuid "38599b03-b3ff-411a-b854-f317c424c35b"))
            )
        `
    }
  }