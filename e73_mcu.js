module.exports = {
    params: {
      designator: 'E73MCU', // the only semi-required param, for naming components on the PCB
      // and now any other param names, with default values supplied
      // note that the default value also tells Ergogen the param's type
      bool_param: true,
      string_param: 'default',
      number_param: 42,
      array_param: ['a', 'b', 'c'], // regular array
      object_param: {a: 1, b: 2, c: 3}, // regular object
      // expanded definitions, so we know these are not just regular objects
      net_param: {type: 'net', value: 'GND'},
      anchor_param: {type: 'anchor', value: 'existing_point_name'}
    },
    body: parsed_params => {
      // any procedural code returning "filled out" KiCAD footprint
      return `
        (module something (layer something)
          ${parsed_params.at}
          // bla bla bla
          ${parsed_params.any_other_param}
          // bla bla bla
        )
      `
    }
  }