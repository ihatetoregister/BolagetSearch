package DDG::Spice::BolagetSearch;
# ABSTRACT: Search the Swedish Systembolaget catalogue of alcohol

use DDG::Spice;

name "Bolaget Search";
description "Search Systembolaget";
source "Bolaget";
primary_example_queries "bolaget diplomatico";
attribution email => ['paulsson.fredrik@gmail.com','Fredrik Paulsson'];
triggers any => "bolaget", "systemet", "systembolaget";
spice to => 'http://systemetapi.se/product?name=$1';
spice wrap_jsonp_callback => 1;

handle remainder => sub {
    return $_ if $_;
    return;
};

1;
