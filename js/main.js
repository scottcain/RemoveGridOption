
define([
           'dojo/_base/declare',
           'dojo/_base/lang',
           'dojo/dom-class',
           'dojo/_base/array',
           'dojo/query',
           'dojo/_base/window',
           'dojo/Deferred',
           'dijit/MenuItem',
           'JBrowse/Plugin'
       ],
       function(
           declare,
           lang,
           domClass,
           array,
           query,
           win,
           Deferred,
           dijitMenuItem,
           JBrowsePlugin
       ) {
return declare( JBrowsePlugin,
{
    constructor: function( args ) {

        this.browser.afterMilestone('initView', function() {
            this.browser.addGlobalMenuItem( 'view', new dijitMenuItem(
                                           {
                                               label: 'Toggle grid lines',
                                               iconClass: 'dijitIconBookmark',
                                               onClick: lang.hitch(this, 'toggleGridLines')
                                           }));
        }, this );
        console.log('RemoveGridOption starting');
    },

    toggleGridLines: function() {

        query('.jbrowse').toggleClass('nogrid_gridline_minor');
        query('.jbrowse').toggleClass('nogrid_gridline_major');
        console.log(query('.jbrowse'));
    }
});
});
