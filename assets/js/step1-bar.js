$( document ).ready(function() {
	var showingContinueBar = false;
	var continueHeight = $("#continue").css('height');
	var continuePaddingTop = $("#continue").css('paddingTop');
	var continuePaddingBottom = $("#continue").css('paddingBottom');
	hideContinueBar();

	$( '.g-selec-qty' ).val(0);
	$( '.g-selec-qty' ).removeClass('active');
	var continueBarNumberOfItems = 0;
	$( '#itemCount' ).html( continueBarNumberOfItems );
	var continueBarTotalAmount = 0;
	var continueBarPreviousValues = [];
	
	function hideContinueBar() {
		$("#continue").animate(
			{
				height: '0px',
				paddingTop: '0px',
				paddingBottom: '0px'
			},
			1000, 'easeOutElastic'
		);
	}
	
	function showContinueBar() {
		$("#continue").animate(
			{
				height: continueHeight,
				paddingTop: continuePaddingTop,
				paddingBottom: continuePaddingBottom
			},
			1000, 'easeOutElastic'
		);
	}
	$( '.g-selec-qty' ).on('change', function(){
		if ( !showingContinueBar ){
			showContinueBar();
			showingContinueBar = true;
		}

		if( continueBarPreviousValues[parseInt($(this).attr('g-selec-id'))] === undefined ) {
			continueBarPreviousValues[parseInt($(this).attr('g-selec-id'))] = 0;
		}
		
		if( parseInt($(this).val()) > 0 ) {
			$(this).addClass('active');
		} else {
			$(this).removeClass('active');
		}
		
		var difference = parseInt($(this).val()) - continueBarPreviousValues[parseInt($(this).attr('g-selec-id'))];
		var price = parseInt($('#g-selec-price-' + $(this).attr('g-selec-id')).html());
		var remaining = parseInt($('#g-selec-remaining-' + $(this).attr('g-selec-id')).html());

		continueBarNumberOfItems += difference;
		$( '#itemCount' ).html( continueBarNumberOfItems );

		
		continueBarTotalAmount += ( difference * price );
		$( '#itemTotal' ).html( continueBarTotalAmount );

		remaining -= difference;
		$('#g-selec-remaining-' + $(this).attr('g-selec-id')).html( remaining );		

		continueBarPreviousValues[parseInt($(this).attr('g-selec-id'))] = parseInt($(this).val());

		if( continueBarNumberOfItems == 0 ){
			hideContinueBar();
			showingContinueBar = false;
		}
	});
});
