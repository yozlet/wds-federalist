
'use strict';

var $ = require('jquery');
// TODO this is not ideal way to include this but needs cooperation with
// politespace team to fix.
var Politespace = require('../.././node_modules/politespace/src/politespace');

/* globals $: false */

"use strict";

// jQuery Plugin

var componentName = "politespace",
  enhancedAttr = "data-enhanced",
  initSelector = "[data-" + componentName + "]:not([" + enhancedAttr + "])";

$.fn[ componentName ] = function(){
  return this.each( function(){
    var polite = new Politespace( this );
    if( polite.type === "number" ) {
      polite.createProxy();
    }

    $( this )
      .bind( "input keydown", function() {
        polite.updateProxy();
      })
      .bind( "blur", function() {
        $( this ).closest( ".politespace-proxy" ).addClass( "active" );
        polite.update();
        polite.updateProxy();
      })
      .bind( "focus", function() {
        $( this ).closest( ".politespace-proxy" ).removeClass( "active" );
        polite.reset();
      })
      .data( componentName, polite );

    polite.update();
  });
};

// auto-init on enhance (which is called on domready)
$(document).ready(function() {
  $('[data-' + componentName + ']').politespace();
});

