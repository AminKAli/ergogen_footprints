module.exports = {
    params: {
      designator: 'HE_SENSOR',
      P1: {type: 'net', value: '+3.3VA'},
      P2: {type: 'net', value: 'RE_C'},
      P3: {type: 'net', value: 'GND'},
    },
    body: p => {
        const generateCirclePolygon = (radius = 0.75, sides = 16) => {
            const degToRad = deg => deg * Math.PI / 180;
            const angle = degToRad(p.r || 0);
            const cx = p.x || 0;
            const cy = p.y || 0;

            let pts = [];
            for (let i = 0; i < sides; i++) {
                const theta = (2 * Math.PI * i) / sides;
                const x0 = radius * Math.cos(theta);
                const y0 = radius * Math.sin(theta);
                const x = +(cx + x0 * Math.cos(angle) - y0 * Math.sin(angle)).toFixed(4);
                const y = +(cy + x0 * Math.sin(angle) + y0 * Math.cos(angle)).toFixed(4);
                pts.push(`(xy ${x} ${y})`);
            }
        return `(polygon (pts ${pts.join(' ')}))`;
        };

        const makePolygonRect = (width, height) => {
            const degToRad = deg => deg * Math.PI / 180;
            const rotate = ([x, y], angle) => {
                const a = degToRad(angle);
                return [
                x * Math.cos(a) - y * Math.sin(a),
                x * Math.sin(a) + y * Math.cos(a)
                ];
            };
            const transform = ([x, y]) => {
                const [xr, yr] = rotate([x, y], p.r || 0);
                return [(xr + p.x).toFixed(4), (yr + p.y).toFixed(4)];
            };

            const hw = width / 2;
            const hh = height / 2;

            const corners = [
                [-hw, -hh],
                [ hw, -hh],
                [ hw,  hh],
                [-hw,  hh]
            ].map(transform);

            return `(polygon (pts
                (xy ${corners[0][0]} ${corners[0][1]})
                (xy ${corners[1][0]} ${corners[1][1]})
                (xy ${corners[2][0]} ${corners[2][1]})
                (xy ${corners[3][0]} ${corners[3][1]})))`;
            };

        return `
            (footprint "Package_TO_SOT_SMD:SOT-23-3"
                (version 20241229)
                (generator "pcbnew")
                (generator_version "9.0")
                (layer "B.Cu")
                (uuid "bda92730-ea0d-41ae-a199-1d0efdbe26de")
                ${p.at}
                (descr "SOT, 3 Pin (JEDEC MO-178 inferred 3-pin variant https://www.jedec.org/document_search?search_api_views_fulltext=MO-178), generated with kicad-footprint-generator ipc_gullwing_generator.py")
                (tags "SOT TO_SOT_SMD")
                (property "Reference" "${p.ref}" (at -2.8 0 0) (layer "B.SilkS") (hide yes) (uuid "731d3c43-c7c0-47c8-a54f-8a916d796ee6") (effects 	(font (size 1 1) (thickness 0.15)) 	(justify mirror) )\)
                (property "Value" "OH49E-S" (at 0 -2.4 0) (layer "B.Fab") (uuid "82025bef-7eca-489b-86a9-d60b8362fe99") (effects 	(font (size 1 1) (thickness 0.15)) 	(justify mirror) )\)
                (property "Datasheet" "https://ohhallsensor.com/wp-content/uploads/2020/08/OH49E-OH49E-S-Hall-effect-linear-IC.pdf" (at 0 0 0) (layer "B.Fab") (hide yes) (uuid "ae2f2618-5e27-4f1f-b805-0bd4b7fabfd5") (effects 	(font (size 1.27 1.27) (thickness 0.15)) 	(justify mirror) )\)
                (property "Description" "" (at 0 0 0) (layer "B.Fab") (hide yes) (uuid "cfdddb40-4d7b-4afb-b6bf-614796a64e52") (effects 	(font (size 1.27 1.27) (thickness 0.15)) 	(justify mirror) )\)
                (path "/733b8dc1-0fe5-437a-a7ef-ad450f0ab345")
                (attr smd)
                (fp_line (start 0 1.56) (end -0.8 1.56) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "d5fdcf94-fe75-4380-98ae-1559b709678d")\)
                (fp_line (start 0 1.56) (end 0.8 1.56) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "2a078a0e-91bf-4d4d-8a35-756012e73fe5")\)
                (fp_line (start 0 -1.56) (end -0.8 -1.56) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "ed9f8b07-661b-4f7a-b4dd-0ca278649916")\)
                (fp_line (start 0 -1.56) (end 0.8 -1.56) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (uuid "371ea285-e5ad-452c-a4a6-fb2200b9c308")\)
                (fp_poly (pts 	(xy -1.3 1.51) (xy -1.54 1.84) (xy -1.06 1.84) ) (stroke (width 0.12) (type solid)) (fill yes) (layer "B.SilkS") (uuid "9db09b04-0e34-4684-abaa-4c278c7e27c4")\)
                (fp_rect (start -2.05 1.7) (end 2.05 -1.7) (stroke (width 0.05) (type solid)) (fill no) (layer "B.CrtYd") (uuid "44c8101a-6ceb-4a72-be18-88c934f90e99")\)
                (fp_line (start -0.4 1.45) (end 0.8 1.45) (stroke (width 0.1) (type solid)) (layer "B.Fab") (uuid "bf94b3d1-35e3-4b2b-bb72-0c5ff0817581")\)
                (fp_line (start 0.8 1.45) (end 0.8 -1.45) (stroke (width 0.1) (type solid)) (layer "B.Fab") (uuid "06fd10cb-ae9d-4bf1-b09f-cefbe4465fc4")\)
                (fp_line (start -0.8 1.05) (end -0.4 1.45) (stroke (width 0.1) (type solid)) (layer "B.Fab") (uuid "d96139ab-a334-4bb7-9453-c7f611a02abb")\)
                (fp_line (start -0.8 -1.45) (end -0.8 1.05) (stroke (width 0.1) (type solid)) (layer "B.Fab") (uuid "787323c1-3bda-419e-a222-540fa4e54853")\)
                (fp_line (start 0.8 -1.45) (end -0.8 -1.45) (stroke (width 0.1) (type solid)) (layer "B.Fab") (uuid "3e15dfb3-a688-404f-a370-dbc3c669c82d")\)
                (fp_text user "${p.ref}" (at 0 0 0) (layer "B.Fab") (uuid "a6261f83-1328-440c-9c9b-cdba15f448a5") (effects 	(font (size 0.4 0.4) (thickness 0.06)) 	(justify mirror) )\)
                (pad "1" smd roundrect (at -1.1375 0.95 ${p.r}) (size 1.325 0.6) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.P1} (pinfunction "VCC") (pintype "power_in") (uuid "29504539-a974-453a-87b9-54ea46eee00d")\)
                (pad "2" smd roundrect (at -1.1375 -0.95 ${p.r}) (size 1.325 0.6) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.P2} (pinfunction "OUT") (pintype "output") (uuid "b55ac934-2a3c-4970-97a5-b967f5b0a337")\)
                (pad "3" smd roundrect (at 1.1375 0 ${p.r}) (size 1.325 0.6) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.P3} (pinfunction "GND") (pintype "power_in") (uuid "aa268fa9-b9f7-4d72-865f-c1febcb263b1")\)
                (embedded_fonts no)
                (zone
                    (net 0)
                    (net_name "")
                    (layers "F.Cu" "B.Cu")
                    (uuid "b178540a-ba15-4091-8d1a-af086e046fed")
                    (hatch edge 0.5)
                    (connect_pads (clearance 0))
                    (min_thickness 0.25)
                    (filled_areas_thickness no)
                    (keepout (tracks allowed) (vias not_allowed) (pads allowed) (copperpour not_allowed) (footprints allowed))
                    (placement (enabled no) (sheetname "/"))
                    (fill (thermal_gap 0.5) (thermal_bridge_width 0.5))`+generateCirclePolygon(1.8, 16)+`
                )
            )
        `
    }
  }