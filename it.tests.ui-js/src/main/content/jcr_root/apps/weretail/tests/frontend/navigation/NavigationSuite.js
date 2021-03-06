/*
 *  Copyright 2016 Adobe Systems Incorporated
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
;(function(h,$){

    hobs.config.pacing_delay = 250;

    window.CQ.WeRetailIT.ExperienceNavigationTest = function (h, $) {
        return new h.TestCase("Navigation to experiences")

            // Navigate to Experience section and back using top logo

            .click(".navbar .navbar-center > li:not(.visible-xs) > a:contains(Experience)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/experience.html", true)

            .click("a.navbar-brand", {expectNav: true})
            .asserts.location("/content/we-retail/us/en.html", true)

            // Navigate to Experience page and back using top logo

            .click(".navbar .navbar-center > li:not(.visible-xs) > a:contains(Experience)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/experience.html", true)

            .click(".we-ArticleTeaser a:contains(Arctic Surfing)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/experience/arctic-surfing-in-lofoten.html", true)

            .click("a.navbar-brand", {expectNav: true})
            .asserts.location("/content/we-retail/us/en.html", true)

            // Navigate to Experience page and back to Experience section using breadcrumbs

            .click(".navbar .navbar-center > li:not(.visible-xs) > a:contains(Experience)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/experience.html", true)

            .click(".we-ArticleTeaser a:contains(Arctic Surfing)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/experience/arctic-surfing-in-lofoten.html", true)

            .click(".cmp .breadcrumb a:contains(Experience)")
            .asserts.location("/content/we-retail/us/en/experience.html", true)

            // Navigate to Experience page and back to Homepage using breadcrumbs

            .click(".we-ArticleTeaser a:contains(Arctic Surfing)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/experience/arctic-surfing-in-lofoten.html", true)

            .click(".cmp .breadcrumb a:contains(English)")
            .asserts.location("/content/we-retail/us/en.html", true)
        ;
    }

    window.CQ.WeRetailIT.MenNavigationTest = function(h, $){
        return new h.TestCase("Navigation to men")

            //Navigate to Men section and back using top logo

            .click(".navbar .navbar-center > li:not(.visible-xs) > a:contains(Men)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/men.html", true)

            .click("a.navbar-brand", {expectNav: true})
            .asserts.location("/content/we-retail/us/en.html", true)

            //Navigate to one Men product page and back using Men breadcrumb and top logo

            .click(".navbar .navbar-center > li:not(.visible-xs) > a:contains(Men)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/men.html", true)

            .click('a[href$="/content/we-retail/us/en/products/men/shirts/amsterdam-short-sleeve-travel-shirt.html"]', {expectNav: true})
            .asserts.location("/content/we-retail/us/en/products/men/shirts/amsterdam-short-sleeve-travel-shirt.html", true)

            .click(".cmp .breadcrumb a:contains(Men)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/products/men.html", true)

            .click("a.navbar-brand", {expectNav: true})
            .asserts.location("/content/we-retail/us/en.html", true)

            //Navigate to one Men product page and back using Shirts breadcrumb, Men breadcrumb and top logo

            .click(".navbar .navbar-center > li:not(.visible-xs) > a:contains(Men)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/men.html", true)

            .click('a[href$="/content/we-retail/us/en/products/men/shirts/amsterdam-short-sleeve-travel-shirt.html"]', {expectNav: true})
            .asserts.location("/content/we-retail/us/en/products/men/shirts/amsterdam-short-sleeve-travel-shirt.html", true)

            .click(".cmp .breadcrumb a:contains(Shirts)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/products/men/shirts.html", true)

            .click(".cmp .breadcrumb a:contains(Men)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/products/men.html", true)

            .click("a.navbar-brand", {expectNav: true})
            .asserts.location("/content/we-retail/us/en.html", true)

            //Navigate to All men's products and back using top logo

            .click(".navbar .navbar-center > li:not(.visible-xs) > a:contains(Men)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/men.html", true)

            .click(".button a:contains(All men's products)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/products/men.html", true)

            .click("a.navbar-brand", {expectNav: true})
            .asserts.location("/content/we-retail/us/en.html", true)

            //Navigate to "Our strongest clothes" category and back using the top logo

            .click(".navbar .navbar-center > li:not(.visible-xs) > a:contains(Men)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/men.html", true)

            .click(".we-CategoryTeaser a:contains(Our strongest clothes)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/products/men/shirts.html", true)

            .click(".cmp .breadcrumb a:contains(Men)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/products/men.html", true)

            .click("a.navbar-brand", {expectNav: true})
            .asserts.location("/content/we-retail/us/en.html", true)

            //Navigate to "Our warmest jackets" category and back using the top logo

            .click(".navbar .navbar-center > li:not(.visible-xs) > a:contains(Men)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/men.html", true)

            .click(".we-CategoryTeaser a:contains(Our warmest jackets)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/products/men/coats.html", true)

            .click(".cmp .breadcrumb a:contains(Men)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/products/men.html", true)

            .click("a.navbar-brand", {expectNav: true})
            .asserts.location("/content/we-retail/us/en.html", true)

            // Navigate to Experience page from Men page and back to Experience section using breadcrumbs

            .click(".navbar .navbar-center > li:not(.visible-xs) > a:contains(Men)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/men.html", true)

            .click(".we-ArticleTeaser a:contains(Arctic Surfing)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/experience/arctic-surfing-in-lofoten.html", true)

            .click(".cmp .breadcrumb a:contains(Experience)")
            .asserts.location("/content/we-retail/us/en/experience.html", true)

            // Navigate to Experience page from Men page and back to Experience section using breadcrumbs

            .click(".navbar .navbar-center > li:not(.visible-xs) > a:contains(Men)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/men.html", true)

            .click(".we-ArticleTeaser a:contains(Arctic Surfing)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/experience/arctic-surfing-in-lofoten.html", true)

            .click(".cmp .breadcrumb a:contains(English)")
            .asserts.location("/content/we-retail/us/en.html", true)
        ;
    }

    window.CQ.WeRetailIT.WomenNavigationTest = function (h, $) {
        return new h.TestCase("Navigation to women")

            // Navigate to Women section and back using top logo

            .click(".navbar .navbar-center > li:not(.visible-xs) > a:contains(Women)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/women.html", true)

            .click("a.navbar-brand", {expectNav: true})
            .asserts.location("/content/we-retail/us/en.html", true)

            //Navigate to one Women product page and back using Women breadcrumb and top logo

            .click(".navbar .navbar-center > li:not(.visible-xs) > a:contains(Women)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/women.html", true)

            .click('a[href$="/content/we-retail/us/en/products/women/shirts/devi-sleeveless-shirt.html"]', {expectNav: true})
            .asserts.location("/content/we-retail/us/en/products/women/shirts/devi-sleeveless-shirt.html", true)

            .click(".cmp .breadcrumb a:contains(Women)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/products/women.html", true)

            .click("a.navbar-brand", {expectNav: true})
            .asserts.location("/content/we-retail/us/en.html", true)

            //Navigate to one Women product page and back using Shirts breadcrumb, Women breadcrumb and top logo

            .click(".navbar .navbar-center > li:not(.visible-xs) > a:contains(Women)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/women.html", true)

            .click('a[href$="/content/we-retail/us/en/products/women/shirts/devi-sleeveless-shirt.html"]', {expectNav: true})
            .asserts.location("/content/we-retail/us/en/products/women/shirts/devi-sleeveless-shirt.html", true)

            .click(".cmp .breadcrumb a:contains(Shirts)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/products/women/shirts.html", true)

            .click(".cmp .breadcrumb a:contains(Women)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/products/women.html", true)

            .click("a.navbar-brand", {expectNav: true})
            .asserts.location("/content/we-retail/us/en.html", true)

            //Navigate to All women's products and back using top logo

            .click(".navbar .navbar-center > li:not(.visible-xs) > a:contains(Women)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/women.html", true)

            .click(".button a:contains(All women's products)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/products/women.html", true)

            .click("a.navbar-brand", {expectNav: true})
            .asserts.location("/content/we-retail/us/en.html", true)

            //Navigate to "Our strongest clothes" category and back using the top logo

            .click(".navbar .navbar-center > li:not(.visible-xs) > a:contains(Women)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/women.html", true)

            .click(".we-CategoryTeaser a:contains(Our strongest clothes)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/products/women/shirts.html", true)

            .click(".cmp .breadcrumb a:contains(Women)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/products/women.html", true)

            .click("a.navbar-brand", {expectNav: true})
            .asserts.location("/content/we-retail/us/en.html", true)

            //Navigate to "Our warmest jackets" category and back using the top logo

            .click(".navbar .navbar-center > li:not(.visible-xs) > a:contains(Women)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/women.html", true)

            .click(".we-CategoryTeaser a:contains(Our warmest jackets)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/products/women/coats.html", true)

            .click(".cmp .breadcrumb a:contains(Women)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/products/women.html", true)

            .click("a.navbar-brand", {expectNav: true})
            .asserts.location("/content/we-retail/us/en.html", true)

            // Navigate to Experience page from Women page and back to Experience section using breadcrumbs

            .click(".navbar .navbar-center > li:not(.visible-xs) > a:contains(Women)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/women.html", true)

            .click(".we-ArticleTeaser a:contains(Arctic Surfing)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/experience/arctic-surfing-in-lofoten.html", true)

            .click(".cmp .breadcrumb a:contains(Experience)")
            .asserts.location("/content/we-retail/us/en/experience.html", true)

            // Navigate to Experience page from Women page and back to Experience section using breadcrumbs

            .click(".navbar .navbar-center > li:not(.visible-xs) > a:contains(Women)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/women.html", true)

            .click(".we-ArticleTeaser a:contains(Arctic Surfing)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/experience/arctic-surfing-in-lofoten.html", true)

            .click(".cmp .breadcrumb a:contains(English)")
            .asserts.location("/content/we-retail/us/en.html", true)
        ;
    }

    window.CQ.WeRetailIT.EquipmentNavigationTest = function (h, $) {
        return new h.TestCase("Navigation to equipment")

            // Navigate to Equipment section and back using top logo

            .click(".navbar .navbar-center > li:not(.visible-xs) > a:contains(Equipment)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/equipment.html", true)

            .click("a.navbar-brand", {expectNav: true})
            .asserts.location("/content/we-retail/us/en.html", true)

            //Navigate to one Equipment product page and back using Equipment breadcrumb and top logo

            .click(".navbar .navbar-center > li:not(.visible-xs) > a:contains(Equipment)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/equipment.html", true)

            .click('a[href$="/content/we-retail/us/en/products/equipment/running/faba-running-pants.html"]', {expectNav: true})
            .asserts.location("/content/we-retail/us/en/products/equipment/running/faba-running-pants.html", true)

            .click(".cmp .breadcrumb a:contains(Equipment)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/products/equipment.html", true)

            .click("a.navbar-brand", {expectNav: true})
            .asserts.location("/content/we-retail/us/en.html", true)

            //Navigate to one Equipment product page and back using Running breadcrumb, Equipment breadcrumb and top logo

            .click(".navbar .navbar-center > li:not(.visible-xs) > a:contains(Equipment)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/equipment.html", true)

            .click('a[href$="/content/we-retail/us/en/products/equipment/running/faba-running-pants.html"]', {expectNav: true})
            .asserts.location("/content/we-retail/us/en/products/equipment/running/faba-running-pants.html", true)

            .click(".cmp .breadcrumb a:contains(Running)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/products/equipment/running.html", true)

            .click(".cmp .breadcrumb a:contains(Equipment)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/products/equipment.html", true)

            .click("a.navbar-brand", {expectNav: true})
            .asserts.location("/content/we-retail/us/en.html", true)

            //Navigate to Hiking products category and back using the top logo

            .click(".navbar .navbar-center > li:not(.visible-xs) > a:contains(Equipment)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/equipment.html", true)

            .click(".we-CategoryTeaser a:contains(Hiking)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/products/equipment/hiking.html", true)

            .click(".cmp .breadcrumb a:contains(Equipment)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/products/equipment.html", true)

            .click("a.navbar-brand", {expectNav: true})
            .asserts.location("/content/we-retail/us/en.html", true)

            //Navigate to Running products category and back using the top logo

            .click(".navbar .navbar-center > li:not(.visible-xs) > a:contains(Equipment)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/equipment.html", true)

            .click(".we-CategoryTeaser a:contains(Running)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/products/equipment/running.html", true)

            .click(".cmp .breadcrumb a:contains(Equipment)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/products/equipment.html", true)

            .click("a.navbar-brand", {expectNav: true})
            .asserts.location("/content/we-retail/us/en.html", true)

            //Navigate to Biking products category and back using the top logo

            .click(".navbar .navbar-center > li:not(.visible-xs) > a:contains(Equipment)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/equipment.html", true)

            .click(".we-CategoryTeaser a:contains(Biking)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/products/equipment/biking.html", true)

            .click(".cmp .breadcrumb a:contains(Equipment)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/products/equipment.html", true)

            .click("a.navbar-brand", {expectNav: true})
            .asserts.location("/content/we-retail/us/en.html", true)

            //Navigate to Surfing products category and back using the top logo

            .click(".navbar .navbar-center > li:not(.visible-xs) > a:contains(Equipment)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/equipment.html", true)

            .click(".we-CategoryTeaser a:contains(Surfing)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/products/equipment/surfing.html", true)

            .click(".cmp .breadcrumb a:contains(Equipment)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/products/equipment.html", true)

            .click("a.navbar-brand", {expectNav: true})
            .asserts.location("/content/we-retail/us/en.html", true)

            //Navigate to Snow Sports products category and back using the top logo

            .click(".navbar .navbar-center > li:not(.visible-xs) > a:contains(Equipment)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/equipment.html", true)

            .click(".we-CategoryTeaser a:contains(Snow Sports)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/products/equipment/snow-sports.html", true)

            .click(".cmp .breadcrumb a:contains(Equipment)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/products/equipment.html", true)

            .click("a.navbar-brand", {expectNav: true})
            .asserts.location("/content/we-retail/us/en.html", true)

            //Navigate to All equipment and back using top logo

            .click(".navbar .navbar-center > li:not(.visible-xs) > a:contains(Equipment)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/equipment.html", true)

            .click(".button a:contains(All equipment)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/products/equipment.html", true)

            .click("a.navbar-brand", {expectNav: true})
            .asserts.location("/content/we-retail/us/en.html", true)

            //Navigate to Snowboarding products category and back using the top logo

            .click(".navbar .navbar-center > li:not(.visible-xs) > a:contains(Equipment)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/equipment.html", true)

            .click(".we-CategoryTeaser a:contains(Snowboarding)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/products/equipment/snow-sports.html", true)

            .click(".cmp .breadcrumb a:contains(Equipment)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/products/equipment.html", true)

            .click("a.navbar-brand", {expectNav: true})
            .asserts.location("/content/we-retail/us/en.html", true)
        ;
    }

    window.CQ.WeRetailIT.AboutUsNavigationTest = function (h, $) {
        return new h.TestCase("Navigation to about us")

            // Navigate to About Us section and back using top logo

            .click(".navbar .navbar-center > li:not(.visible-xs) > a:contains(About Us)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/about-us.html", true)

            .click("a.navbar-brand", {expectNav: true})
            .asserts.location("/content/we-retail/us/en.html", true)
        ;
    }

    window.CQ.WeRetailIT.FooterButtonsNavigationTest = function (h, $) {
        return new h.TestCase("Navigation using footer buttons")

            // Navigate to Experience section using the Experience button from footer and back using top logo

            .click(".we-Footer-nav a:contains(Experience)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/experience.html", true)

            .click("a.navbar-brand", {expectNav: true})
            .asserts.location("/content/we-retail/us/en.html", true)

            // Navigate to Men section using the Men button from footer and back using top logo

            .click(".we-Footer-nav a:contains(Men)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/men.html", true)

            .click("a.navbar-brand", {expectNav: true})
            .asserts.location("/content/we-retail/us/en.html", true)

            // Navigate to Women section using the Women button from footer and back using top logo

            .click(".we-Footer-nav a:contains(Women)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/women.html", true)

            .click("a.navbar-brand", {expectNav: true})
            .asserts.location("/content/we-retail/us/en.html", true)

            // Navigate to Equipment section using the Equipment button from footer and back using top logo

            .click(".we-Footer-nav a:contains(Equipment)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/equipment.html", true)

            .click("a.navbar-brand", {expectNav: true})
            .asserts.location("/content/we-retail/us/en.html", true)

            // Navigate to About Us section using the About Us button from footer and back using top logo

            .click(".we-Footer-nav a:contains(About Us)", {expectNav: true})
            .asserts.location("/content/we-retail/us/en/about-us.html", true)

            .click("a.navbar-brand", {expectNav: true})
            .asserts.location("/content/we-retail/us/en.html", true)

        ;
    }

    new h.TestSuite("We.Retail Tests - Navigation", {path:"/apps/weretail/tests/navigation/NavigationSuite.js", register: true})
        .addTestCase(window.CQ.WeRetailIT.HomepageLoadTest(h, $))
        .addTestCase(window.CQ.WeRetailIT.ExperienceNavigationTest(h, $))
        .addTestCase(window.CQ.WeRetailIT.MenNavigationTest(h, $))
        .addTestCase(window.CQ.WeRetailIT.WomenNavigationTest(h, $))
        .addTestCase(window.CQ.WeRetailIT.EquipmentNavigationTest(h, $))
        .addTestCase(window.CQ.WeRetailIT.AboutUsNavigationTest(h, $))
        .addTestCase(window.CQ.WeRetailIT.FooterButtonsNavigationTest(h, $))
    ;
})(hobs, jQuery);
