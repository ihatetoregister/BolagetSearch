function ddg_spice_bolaget_search(api_result) {

    if(!api_result) {
        return;
    }
    
    var header = 'Systembolaget';
    var source = "http://systembolaget.se";
    
    for(var i = 0; i < api_result.length; i++) {
        var prodnr = api_result[i].product_number;
        api_result[i].product_number = prodnr.substring(0, prodnr.length-2);
        
        var alcohol = api_result[i].alcohol;
        api_result[i].alcohol = alcohol*100
    }
    
    Spice.render({
        data              : api_result,
        header1           : header,
        source_url        : source,
        source_name       : 'Systembolaget',
        spice_name        : 'bolaget_search',
        template_frame    : 'list',
        template_options     : {
            items: api_result,
            show: 3,
            max: 10,
            template_item: 'bolaget_search'
        },
        force_big_header  : true,
        force_space_after : true,
        force_no_fold : true
    });
};
