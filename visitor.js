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
    
    console.log(customer, product_id);
    
    $.ajax({
        type: "POST",
        url: "http://localhost:8000/clickstream/",
        headers: {
            'X-CSRFToken': $('[name="csrfmiddlewaretoken"]').val()
        },
        data: {
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
