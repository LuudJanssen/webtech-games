function showPopup(type) {
    $('.popup-selected').removeClass('popup-selected');
    $('.popup-blur').addClass('popup-active');

    var $popupContainer = $('.popup-container');
    $popupContainer.addClass('popup-show');
    $popupContainer.find('.popup-' + type).addClass('popup-selected');
}

function closePopup() {
    $('.popup-container').removeClass('popup-show');
    $('.popup-blur').removeClass('popup-active');
}

function preventPopupClosing(event) {
    event.stopPropagation();
}

$(document).ready(function () {
    $('.popup-container').click(closePopup);
    $('.popup').click(preventPopupClosing);
});