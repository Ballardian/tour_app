import $ from 'jquery';

const scroll = () => {
  $(function() {
    $('a[href="#section06"]').on('click', function(e) {
      e.preventDefault();
      console.log('scroll pls')
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });
}
export { scroll }

