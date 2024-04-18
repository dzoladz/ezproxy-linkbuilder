// ----------------------------------------
// Process the Original Links
// ----------------------------------------
$('#process-action').click(function() {
    // capture EZproxy prefix from _config
    let ezp = $('#proxy-prefix').html();

    // capture input link
    let orig_link = $('#org_link').val();

    // generate resultant URL
    let result = ezp + orig_link

        // copy result to clipboard
    toClipboard(result);

    // populate results to UI
    $('#result_link').val(result);
    $('#success').fadeIn('slow', function () {
        setTimeout(function(){
            $('#success').fadeOut('slow');
            }, 3000);
        }
    );
});

$('#clear-action').click(function() {
    $('#org_link').val('');
});

function toClipboard(copyText) {
   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText);
}