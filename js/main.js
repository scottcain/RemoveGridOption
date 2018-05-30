
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
        //get the current value of gridlines_major and minor
        //var gridline_minor = style || lang.hitch( this, 'getStyle' );
        //var gridline_major = this.style.gridline_major.border;

        //get all of the gridline divs

        console.log(query('.gridline').style('border-style').at(0,1));

        if (array.some(query('.gridline').style('border-style'), function(item) { return item == 'none none none solid' ; })) {
            query('.gridline').style('border-style', 'none none none none'); 
        }
        else {
            query('.gridline').style('border-style', 'none none none solid');
        }
 
        //query('.gridline').style('border-style', 'none none none none');
        //console.log(nl);
        //domClass.add(win.body(), 'gridline_major');
        //console.log(win.body());
        //console.log(lang.hitch(this.browser.config, 'getStyle'));
        //console.log(gridline_minor);        

        //invert them
    }

});
});
