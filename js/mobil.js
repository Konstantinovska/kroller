jQuery(".mobile-menu__link ").on("click", function()
{
jQuery("#mobile-nav").removeClass("mobile-menu-expanded").slideUp(); 
jQuery("#nav_toggle").removeClass("active");
});