/*
 * File: app/view/GridSelectionModel.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Sencha.view.GridSelectionModel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.grid2',

    height: 300,
    width: 600,
    animCollapse: false,
    collapsible: true,
    iconCls: 'icon-grid',
    title: 'Framed with Checkbox Selection and Horizontal Scrolling',
    columnLines: true,
    store: 'Companies',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'company',
                    flex: 1,
                    text: 'Company'
                },
                {
                    xtype: 'gridcolumn',
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                        return Ext.util.Format.usMoney(value);
                    },
                    dataIndex: 'price',
                    text: 'Price'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'change',
                    text: 'Change'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'pctChange',
                    text: '% Change'
                },
                {
                    xtype: 'datecolumn',
                    dataIndex: 'lastChange',
                    text: 'Last Updated',
                    format: 'm/d/Y'
                }
            ],
            viewConfig: {

            },
            selModel: Ext.create('Ext.selection.CheckboxModel', {

            })
        });

        me.callParent(arguments);
    }

});