// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Tea_app = require("../src-ocaml/tea_app.js");
var Tea_json = require("../src-ocaml/tea_json.js");
var Tea_html2 = require("../src-ocaml/tea_html2.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");

function set_value(param_0) {
  return /* Set_value */[param_0];
}

function update(model, param) {
  if (param) {
    return param[0];
  } else {
    return model + 1 | 0;
  }
}

function view(model) {
  var clientX = Tea_json.Decoder[/* field */11]("clientX", Tea_json.Decoder[/* int */3]);
  var init = Tea_html2.Events[/* defaultOptions */4];
  return Tea_html2.div(/* None */0, /* None */0, /* [] */0, List.map((function (e) {
                    return Tea_html2.div(/* None */0, /* None */0, /* [] */0, /* :: */[
                                e,
                                /* [] */0
                              ]);
                  }), /* :: */[
                  /* Text */Block.__(1, [String(model)]),
                  /* :: */[
                    Tea_html2.button(/* None */0, /* None */0, /* :: */[
                          Tea_html2.Events[/* onClick */8](/* Click */0),
                          /* [] */0
                        ], /* :: */[
                          /* Text */Block.__(1, ["onClick"]),
                          /* [] */0
                        ]),
                    /* :: */[
                      Tea_html2.button(/* None */0, /* None */0, /* :: */[
                            Curry._2(Tea_html2.Events[/* on */2], "click", Tea_json.Decoder[/* succeed */24](/* Click */0)),
                            /* [] */0
                          ], /* :: */[
                            /* Text */Block.__(1, ["on \"click\""]),
                            /* [] */0
                          ]),
                      /* :: */[
                        Tea_html2.a(/* None */0, /* None */0, /* :: */[
                              Tea_html2.Attributes[/* href */41]("https://www.google.com"),
                              /* [] */0
                            ], /* :: */[
                              /* Text */Block.__(1, ["a normal link"]),
                              /* [] */0
                            ]),
                        /* :: */[
                          Tea_html2.a(/* None */0, /* None */0, /* :: */[
                                Tea_html2.Attributes[/* href */41]("https://www.google.com"),
                                /* :: */[
                                  Curry._3(Tea_html2.Events[/* onWithOptions */3], "click", /* record */[
                                        /* stopPropagation */init[/* stopPropagation */0],
                                        /* preventDefault */true
                                      ], Tea_json.Decoder[/* succeed */24](/* Click */0)),
                                  /* [] */0
                                ]
                              ], /* :: */[
                                /* Text */Block.__(1, ["a link with prevent default"]),
                                /* [] */0
                              ]),
                          /* :: */[
                            Tea_html2.button(/* None */0, /* None */0, /* :: */[
                                  Curry._2(Tea_html2.Events[/* on */2], "click", Tea_json.Decoder[/* map */16](set_value, clientX)),
                                  /* [] */0
                                ], /* :: */[
                                  /* Text */Block.__(1, ["on \"click\", use clientX value"]),
                                  /* [] */0
                                ]),
                            /* :: */[
                              Tea_html2.input$prime(/* None */0, /* None */0, /* :: */[
                                    Tea_html2.Attributes[/* type' */8]("text"),
                                    /* :: */[
                                      Curry._2(Tea_html2.Events[/* on */2], "input", Tea_json.Decoder[/* map */16]((function (v) {
                                                  return /* Set_value */[Caml_format.caml_int_of_string(v)];
                                                }), Tea_html2.Events[/* targetValue */5])),
                                      /* [] */0
                                    ]
                                  ], /* [] */0),
                              /* [] */0
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]
                ]));
}

var partial_arg = /* record */[
  /* model */0,
  /* update */update,
  /* view */view
];

function main(param, param$1) {
  return Tea_app.beginnerProgram(partial_arg, param, param$1);
}

var click = /* Click */0;

exports.click = click;
exports.set_value = set_value;
exports.update = update;
exports.view = view;
exports.main = main;
/* Tea_html2 Not a pure module */
