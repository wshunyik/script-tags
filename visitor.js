/*
Script to load on every page of a store, tracking users' clickstream data
*/

$(document).ready(function(){
    console.log('tracker start');
    var customer = ShopifyAnalytics.meta.page.customerId;
    var product_id = ShopifyAnalytics.meta.product.id;
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
