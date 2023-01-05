/*
Script to load on every page of a store, tracking users' clickstream data
*/

$(document).ready(function(){
    console.log('tracker start');
    try {
        var customer = ShopifyAnalytics.meta.page.customerId;
    } catch (TypeError) {
        var customer = null;
    }
    try {
        var product_id = ShopifyAnalytics.meta.product.id;
    } catch (TypeError) {
        var product_id = null;
    }
    
    var store_id = ShopifyAnalytics.lib.integrations[0].defaultAttributes.shopId
    var session_id = ShopifyAnalytics.lib.integrations[0].defaultAttributes.visitToken
    console.log(store_id, session_id, customer, product_id)
    
    $.ajax({
        type: "POST",
        url: "http://localhost:8000/clickstream/",
        headers: {
            'X-CSRFToken': $('[name="csrfmiddlewaretoken"]').val()
        },
        data: {
            store_id: store_id,
            session_id: session_id,
            customer: customer,
            product_id: product_id,
            shopify: JSON.stringify(ShopifyAnalytics),
        },
        dataType: "text",
        success: function(result){
            console.log('success');
        },
        error: function(xhr, status, error){
            console.log('failure');
        }
    })
});
