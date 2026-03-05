ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:8908").setExtent([444509.793022, 1120003.324814, 472513.885814, 1137053.206209]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_territorio_car_1 = new ol.format.GeoJSON();
var features_territorio_car_1 = format_territorio_car_1.readFeatures(json_territorio_car_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:8908'});
var jsonSource_territorio_car_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_territorio_car_1.addFeatures(features_territorio_car_1);
var lyr_territorio_car_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_territorio_car_1, 
                style: style_territorio_car_1,
                popuplayertitle: 'territorio_car',
                interactive: false,
                title: '<img src="styles/legend/territorio_car_1.png" /> territorio_car'
            });
var format_distritos_car_2 = new ol.format.GeoJSON();
var features_distritos_car_2 = format_distritos_car_2.readFeatures(json_distritos_car_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:8908'});
var jsonSource_distritos_car_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_distritos_car_2.addFeatures(features_distritos_car_2);
var lyr_distritos_car_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_distritos_car_2, 
                style: style_distritos_car_2,
                popuplayertitle: 'distritos_car',
                interactive: false,
                title: '<img src="styles/legend/distritos_car_2.png" /> distritos_car'
            });
var format_postes_01_2026_car_3 = new ol.format.GeoJSON();
var features_postes_01_2026_car_3 = format_postes_01_2026_car_3.readFeatures(json_postes_01_2026_car_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:8908'});
var jsonSource_postes_01_2026_car_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_postes_01_2026_car_3.addFeatures(features_postes_01_2026_car_3);
var lyr_postes_01_2026_car_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_postes_01_2026_car_3, 
                style: style_postes_01_2026_car_3,
                popuplayertitle: 'postes_01_2026_car',
                interactive: false,
                title: '<img src="styles/legend/postes_01_2026_car_3.png" /> postes_01_2026_car'
            });
var format_control_vegetacion_car_4 = new ol.format.GeoJSON();
var features_control_vegetacion_car_4 = format_control_vegetacion_car_4.readFeatures(json_control_vegetacion_car_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:8908'});
var jsonSource_control_vegetacion_car_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_control_vegetacion_car_4.addFeatures(features_control_vegetacion_car_4);
var lyr_control_vegetacion_car_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_control_vegetacion_car_4, 
                style: style_control_vegetacion_car_4,
                popuplayertitle: 'control_vegetacion_car',
                interactive: true,
                title: '<img src="styles/legend/control_vegetacion_car_4.png" /> control_vegetacion_car'
            });
var format_Red_BT_car_5 = new ol.format.GeoJSON();
var features_Red_BT_car_5 = format_Red_BT_car_5.readFeatures(json_Red_BT_car_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:8908'});
var jsonSource_Red_BT_car_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Red_BT_car_5.addFeatures(features_Red_BT_car_5);
var lyr_Red_BT_car_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Red_BT_car_5, 
                style: style_Red_BT_car_5,
                popuplayertitle: 'Red_BT_car',
                interactive: false,
                title: '<img src="styles/legend/Red_BT_car_5.png" /> Red_BT_car'
            });
var format_Red_MT_car_6 = new ol.format.GeoJSON();
var features_Red_MT_car_6 = format_Red_MT_car_6.readFeatures(json_Red_MT_car_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:8908'});
var jsonSource_Red_MT_car_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Red_MT_car_6.addFeatures(features_Red_MT_car_6);
var lyr_Red_MT_car_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Red_MT_car_6, 
                style: style_Red_MT_car_6,
                popuplayertitle: 'Red_MT_car',
                interactive: false,
                title: '<img src="styles/legend/Red_MT_car_6.png" /> Red_MT_car'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_territorio_car_1.setVisible(true);lyr_distritos_car_2.setVisible(false);lyr_postes_01_2026_car_3.setVisible(false);lyr_control_vegetacion_car_4.setVisible(true);lyr_Red_BT_car_5.setVisible(true);lyr_Red_MT_car_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_territorio_car_1,lyr_distritos_car_2,lyr_postes_01_2026_car_3,lyr_control_vegetacion_car_4,lyr_Red_BT_car_5,lyr_Red_MT_car_6];
lyr_territorio_car_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'AreaM': 'AreaM', 'Are Km': 'Are Km', });
lyr_distritos_car_2.set('fieldAliases', {'fid': 'fid', 'gml_id': 'gml_id', 'OBJECTID': 'OBJECTID', 'GlobalID': 'GlobalID', 'CÓDIGO': 'CÓDIGO', 'CÓDIGO_DT': 'CÓDIGO_DT', 'PROVINCIA': 'PROVINCIA', 'CANTÓN': 'CANTÓN', 'DISTRITO': 'DISTRITO', 'CÓDIGO_PR': 'CÓDIGO_PR', 'CÓDIGO_CA': 'CÓDIGO_CA', 'LEGISLACI?': 'LEGISLACI?', 'OFICIALIZA': 'OFICIALIZA', 'AREA': 'AREA', 'REGIÓN': 'REGIÓN', 'VERSIÓN': 'VERSIÓN', 'CREADO_POR': 'CREADO_POR', 'FECHA_CREA': 'FECHA_CREA', 'EDITADO_PO': 'EDITADO_PO', 'FECHA_EDIC': 'FECHA_EDIC', 'SHAPE.AREA': 'SHAPE.AREA', 'SHAPE.LEN': 'SHAPE.LEN', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', 'auxiliary_storage_labeling_labelrotation': 'auxiliary_storage_labeling_labelrotation', 'auxiliary_storage_labeling_show': 'auxiliary_storage_labeling_show', });
lyr_postes_01_2026_car_3.set('fieldAliases', {'fid': 'fid', 'COD_POSTE': 'COD_POSTE', 'RUTA': 'RUTA', 'NUMERACION': 'NUMERACION', 'TRABAJO_1': 'TRABAJO_1', 'FECHA_DE_TRABAJO_1': 'FECHA_DE_TRABAJO_1', 'ALTURA': 'ALTURA', 'TIPO': 'TIPO', 'ESTADO': 'ESTADO', 'FECHA': 'FECHA', 'COD_CIRC_1': 'COD_CIRC_1', 'MONTAJE__1': 'MONTAJE__1', 'MONTAJE__2': 'MONTAJE__2', 'MONTAJE__3': 'MONTAJE__3', 'RETENIDA': 'RETENIDA', 'ANCLAJE': 'ANCLAJE', 'MONTAJE__4': 'MONTAJE__4', 'MONTAJE__5': 'MONTAJE__5', 'MONTAJE__6': 'MONTAJE__6', 'RETENIDA_1': 'RETENIDA_1', 'ANCLAJE__1': 'ANCLAJE__1', 'MONTAJE__7': 'MONTAJE__7', 'MONTAJE__8': 'MONTAJE__8', 'MONTAJE__9': 'MONTAJE__9', 'RETENIDA_2': 'RETENIDA_2', 'ANCLAJE_2': 'ANCLAJE_2', 'RESPONSA_1': 'RESPONSA_1', 'OBSERVACIO': 'OBSERVACIO', 'FECHA_ULTIMA_AUDITORIA': 'FECHA_ULTIMA_AUDITORIA', 'X (I)': 'X (I)', 'Y (I)': 'Y (I)', 'Longitude (I)': 'Longitude (I)', 'Latitude (I)': 'Latitude (I)', 'PROYECTO_NUM': 'PROYECTO_NUM', 'CONDICION': 'CONDICION', });
lyr_control_vegetacion_car_4.set('fieldAliases', {'fid': 'fid', 'codigo_circ': 'codigo_circ', 'ruta': 'ruta', 'poste1': 'poste1', 'poste2': 'poste2', 'longitud_m': 'longitud_m', 'proyecto': 'proyecto', 'fecha_registro': 'fecha_registro', 'responsable': 'responsable', 'coord_x_ini': 'coord_x_ini', 'coord_y_ini': 'coord_y_ini', 'coord_x_fin': 'coord_x_fin', 'coord_y_fin': 'coord_y_fin', });
lyr_Red_BT_car_5.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'RUTA': 'RUTA', 'COD_SUB': 'COD_SUB', 'COD_CIRCUI': 'COD_CIRCUI', 'FASE': 'FASE', 'TENSIN': 'TENSIN', 'FECHA_INS': 'FECHA_INS', 'PENTACERRA': 'PENTACERRA', 'TIPO': 'TIPO', 'OBSERVACIO': 'OBSERVACIO', 'DESCRIPCIO': 'DESCRIPCIO', 'CALIBRE_LI': 'CALIBRE_LI', 'CALIBRE_NE': 'CALIBRE_NE', 'FECHA_ULTI': 'FECHA_ULTI', 'PROYECTO_N': 'PROYECTO_N', 'LengthI': 'LengthI', 'TypeI': 'TypeI', 'BranchesI': 'BranchesI', 'Coordinate': 'Coordinate', 'XI': 'XI', 'YI': 'YI', 'LongitudeI': 'LongitudeI', 'LatitudeI': 'LatitudeI', 'AreaI': 'AreaI', 'BearingI': 'BearingI', 'SelectionM': 'SelectionM', 'SelectionI': 'SelectionI', 'VersionI': 'VersionI', });
lyr_Red_MT_car_6.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'RUTA': 'RUTA', 'COD_SUB': 'COD_SUB', 'COD_CIRCUI': 'COD_CIRCUI', 'FASE': 'FASE', 'TENSIN': 'TENSIN', 'TIPO': 'TIPO', 'FECHA_INS': 'FECHA_INS', 'OBSERVACIO': 'OBSERVACIO', 'DESCRIPCIO': 'DESCRIPCIO', 'CALIBRE_LI': 'CALIBRE_LI', 'CALIBRE_NE': 'CALIBRE_NE', 'FECHA_ULTI': 'FECHA_ULTI', 'PROYECTO_N': 'PROYECTO_N', 'FECHA_ULIT': 'FECHA_ULIT', 'LengthI': 'LengthI', 'TypeI': 'TypeI', 'BranchesI': 'BranchesI', 'Coordinate': 'Coordinate', 'XI': 'XI', 'YI': 'YI', 'LongitudeI': 'LongitudeI', 'LatitudeI': 'LatitudeI', 'AreaI': 'AreaI', 'BearingI': 'BearingI', 'SelectionM': 'SelectionM', 'SelectionI': 'SelectionI', 'VersionI': 'VersionI', });
lyr_territorio_car_1.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'AreaM': 'TextEdit', 'Are Km': 'TextEdit', });
lyr_distritos_car_2.set('fieldImages', {'fid': 'TextEdit', 'gml_id': 'TextEdit', 'OBJECTID': 'TextEdit', 'GlobalID': 'TextEdit', 'CÓDIGO': 'TextEdit', 'CÓDIGO_DT': 'TextEdit', 'PROVINCIA': 'TextEdit', 'CANTÓN': 'TextEdit', 'DISTRITO': 'TextEdit', 'CÓDIGO_PR': 'TextEdit', 'CÓDIGO_CA': 'TextEdit', 'LEGISLACI?': 'TextEdit', 'OFICIALIZA': 'TextEdit', 'AREA': 'TextEdit', 'REGIÓN': 'TextEdit', 'VERSIÓN': 'TextEdit', 'CREADO_POR': 'TextEdit', 'FECHA_CREA': 'TextEdit', 'EDITADO_PO': 'TextEdit', 'FECHA_EDIC': 'TextEdit', 'SHAPE.AREA': 'TextEdit', 'SHAPE.LEN': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_lineanchorpercent': 'TextEdit', 'auxiliary_storage_labeling_lineanchorclipping': 'TextEdit', 'auxiliary_storage_labeling_lineanchortype': 'TextEdit', 'auxiliary_storage_labeling_lineanchortextpoint': 'TextEdit', 'auxiliary_storage_labeling_labelrotation': 'Hidden', 'auxiliary_storage_labeling_show': 'Hidden', });
lyr_postes_01_2026_car_3.set('fieldImages', {'fid': 'TextEdit', 'COD_POSTE': 'TextEdit', 'RUTA': 'TextEdit', 'NUMERACION': 'TextEdit', 'TRABAJO_1': 'TextEdit', 'FECHA_DE_TRABAJO_1': 'TextEdit', 'ALTURA': 'Range', 'TIPO': 'TextEdit', 'ESTADO': 'TextEdit', 'FECHA': 'TextEdit', 'COD_CIRC_1': 'Range', 'MONTAJE__1': 'TextEdit', 'MONTAJE__2': 'TextEdit', 'MONTAJE__3': 'TextEdit', 'RETENIDA': 'TextEdit', 'ANCLAJE': 'TextEdit', 'MONTAJE__4': 'TextEdit', 'MONTAJE__5': 'TextEdit', 'MONTAJE__6': 'TextEdit', 'RETENIDA_1': 'TextEdit', 'ANCLAJE__1': 'TextEdit', 'MONTAJE__7': 'TextEdit', 'MONTAJE__8': 'TextEdit', 'MONTAJE__9': 'TextEdit', 'RETENIDA_2': 'TextEdit', 'ANCLAJE_2': 'TextEdit', 'RESPONSA_1': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'FECHA_ULTIMA_AUDITORIA': 'TextEdit', 'X (I)': 'TextEdit', 'Y (I)': 'TextEdit', 'Longitude (I)': 'TextEdit', 'Latitude (I)': 'TextEdit', 'PROYECTO_NUM': 'TextEdit', 'CONDICION': 'TextEdit', });
lyr_control_vegetacion_car_4.set('fieldImages', {'fid': 'TextEdit', 'codigo_circ': 'TextEdit', 'ruta': 'TextEdit', 'poste1': 'TextEdit', 'poste2': 'TextEdit', 'longitud_m': 'TextEdit', 'proyecto': 'TextEdit', 'fecha_registro': 'DateTime', 'responsable': 'TextEdit', 'coord_x_ini': 'TextEdit', 'coord_y_ini': 'TextEdit', 'coord_x_fin': 'TextEdit', 'coord_y_fin': 'TextEdit', });
lyr_Red_BT_car_5.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'RUTA': 'TextEdit', 'COD_SUB': 'TextEdit', 'COD_CIRCUI': 'TextEdit', 'FASE': 'TextEdit', 'TENSIN': 'TextEdit', 'FECHA_INS': 'TextEdit', 'PENTACERRA': 'TextEdit', 'TIPO': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'CALIBRE_LI': 'TextEdit', 'CALIBRE_NE': 'TextEdit', 'FECHA_ULTI': 'TextEdit', 'PROYECTO_N': 'TextEdit', 'LengthI': 'TextEdit', 'TypeI': 'TextEdit', 'BranchesI': 'TextEdit', 'Coordinate': 'TextEdit', 'XI': 'TextEdit', 'YI': 'TextEdit', 'LongitudeI': 'TextEdit', 'LatitudeI': 'TextEdit', 'AreaI': 'TextEdit', 'BearingI': 'TextEdit', 'SelectionM': 'TextEdit', 'SelectionI': 'CheckBox', 'VersionI': 'TextEdit', });
lyr_Red_MT_car_6.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'RUTA': 'TextEdit', 'COD_SUB': 'TextEdit', 'COD_CIRCUI': 'TextEdit', 'FASE': 'TextEdit', 'TENSIN': 'TextEdit', 'TIPO': 'TextEdit', 'FECHA_INS': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'CALIBRE_LI': 'TextEdit', 'CALIBRE_NE': 'TextEdit', 'FECHA_ULTI': 'TextEdit', 'PROYECTO_N': 'TextEdit', 'FECHA_ULIT': 'TextEdit', 'LengthI': 'TextEdit', 'TypeI': 'TextEdit', 'BranchesI': 'TextEdit', 'Coordinate': 'TextEdit', 'XI': 'TextEdit', 'YI': 'TextEdit', 'LongitudeI': 'TextEdit', 'LatitudeI': 'TextEdit', 'AreaI': 'TextEdit', 'BearingI': 'TextEdit', 'SelectionM': 'TextEdit', 'SelectionI': 'CheckBox', 'VersionI': 'TextEdit', });
lyr_territorio_car_1.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'AreaM': 'no label', 'Are Km': 'no label', });
lyr_distritos_car_2.set('fieldLabels', {'fid': 'no label', 'gml_id': 'no label', 'OBJECTID': 'no label', 'GlobalID': 'no label', 'CÓDIGO': 'no label', 'CÓDIGO_DT': 'no label', 'PROVINCIA': 'no label', 'CANTÓN': 'no label', 'DISTRITO': 'no label', 'CÓDIGO_PR': 'no label', 'CÓDIGO_CA': 'no label', 'LEGISLACI?': 'no label', 'OFICIALIZA': 'no label', 'AREA': 'no label', 'REGIÓN': 'no label', 'VERSIÓN': 'no label', 'CREADO_POR': 'no label', 'FECHA_CREA': 'no label', 'EDITADO_PO': 'no label', 'FECHA_EDIC': 'no label', 'SHAPE.AREA': 'no label', 'SHAPE.LEN': 'no label', 'auxiliary_storage_labeling_lineanchorpercent': 'no label', 'auxiliary_storage_labeling_lineanchorclipping': 'no label', 'auxiliary_storage_labeling_lineanchortype': 'no label', 'auxiliary_storage_labeling_lineanchortextpoint': 'no label', });
lyr_postes_01_2026_car_3.set('fieldLabels', {'fid': 'hidden field', 'COD_POSTE': 'inline label - always visible', 'RUTA': 'hidden field', 'NUMERACION': 'hidden field', 'TRABAJO_1': 'hidden field', 'FECHA_DE_TRABAJO_1': 'hidden field', 'ALTURA': 'hidden field', 'TIPO': 'hidden field', 'ESTADO': 'hidden field', 'FECHA': 'hidden field', 'COD_CIRC_1': 'hidden field', 'MONTAJE__1': 'hidden field', 'MONTAJE__2': 'hidden field', 'MONTAJE__3': 'hidden field', 'RETENIDA': 'hidden field', 'ANCLAJE': 'hidden field', 'MONTAJE__4': 'hidden field', 'MONTAJE__5': 'hidden field', 'MONTAJE__6': 'hidden field', 'RETENIDA_1': 'hidden field', 'ANCLAJE__1': 'hidden field', 'MONTAJE__7': 'hidden field', 'MONTAJE__8': 'hidden field', 'MONTAJE__9': 'hidden field', 'RETENIDA_2': 'hidden field', 'ANCLAJE_2': 'hidden field', 'RESPONSA_1': 'hidden field', 'OBSERVACIO': 'hidden field', 'FECHA_ULTIMA_AUDITORIA': 'hidden field', 'X (I)': 'hidden field', 'Y (I)': 'hidden field', 'Longitude (I)': 'hidden field', 'Latitude (I)': 'hidden field', 'PROYECTO_NUM': 'hidden field', 'CONDICION': 'hidden field', });
lyr_control_vegetacion_car_4.set('fieldLabels', {'fid': 'hidden field', 'codigo_circ': 'inline label - always visible', 'ruta': 'inline label - always visible', 'poste1': 'hidden field', 'poste2': 'hidden field', 'longitud_m': 'inline label - always visible', 'proyecto': 'hidden field', 'fecha_registro': 'no label', 'responsable': 'hidden field', 'coord_x_ini': 'hidden field', 'coord_y_ini': 'hidden field', 'coord_x_fin': 'hidden field', 'coord_y_fin': 'hidden field', });
lyr_Red_BT_car_5.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'RUTA': 'no label', 'COD_SUB': 'no label', 'COD_CIRCUI': 'no label', 'FASE': 'no label', 'TENSIN': 'no label', 'FECHA_INS': 'no label', 'PENTACERRA': 'no label', 'TIPO': 'no label', 'OBSERVACIO': 'no label', 'DESCRIPCIO': 'no label', 'CALIBRE_LI': 'no label', 'CALIBRE_NE': 'no label', 'FECHA_ULTI': 'no label', 'PROYECTO_N': 'no label', 'LengthI': 'no label', 'TypeI': 'no label', 'BranchesI': 'no label', 'Coordinate': 'no label', 'XI': 'no label', 'YI': 'no label', 'LongitudeI': 'no label', 'LatitudeI': 'no label', 'AreaI': 'no label', 'BearingI': 'no label', 'SelectionM': 'no label', 'SelectionI': 'no label', 'VersionI': 'no label', });
lyr_Red_MT_car_6.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'RUTA': 'no label', 'COD_SUB': 'no label', 'COD_CIRCUI': 'no label', 'FASE': 'no label', 'TENSIN': 'no label', 'TIPO': 'no label', 'FECHA_INS': 'no label', 'OBSERVACIO': 'no label', 'DESCRIPCIO': 'no label', 'CALIBRE_LI': 'no label', 'CALIBRE_NE': 'no label', 'FECHA_ULTI': 'no label', 'PROYECTO_N': 'no label', 'FECHA_ULIT': 'no label', 'LengthI': 'no label', 'TypeI': 'no label', 'BranchesI': 'no label', 'Coordinate': 'no label', 'XI': 'no label', 'YI': 'no label', 'LongitudeI': 'no label', 'LatitudeI': 'no label', 'AreaI': 'no label', 'BearingI': 'no label', 'SelectionM': 'no label', 'SelectionI': 'no label', 'VersionI': 'no label', });
lyr_Red_MT_car_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});