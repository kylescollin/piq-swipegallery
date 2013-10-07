----------------------------
Title: PlaceIQ Swipe Gallery
File: piq-swipegallery
Author: Kyle Scollin
Date: October 4, 2013
----------------------------


DESCRIPTION
===========
This is a swipe gallery mobile website, ideally served as a mobile ad. It has a fixed size of 320x480px. This is a simple gallery that can be navigated by swiping. The gallery can be simple photos, graphics, videos, or complex divs. They can have various hot spots to link out to as well.


USER FLOW
=========
User lands on the site and can see the first image in the gallery. From there, users can swipe around through the image gallery. Users can tap images to be taken to different URLs, or tap a CTA on the page to go to an external URL


HOW TO UPDATE
=============
1. Save each picture into the img folder.
2. Make sure they are all correctly linked in the index.html file in a <div class="swiper-slide"><img src="img/{filename}"></div>. Adjust number of divs if needed. 
(NOTE: It is possible to have images of various heights and widths.)
3. Update the background image file. Correctly link it in the .less file.
4. In the .less file, change the swiperHeight variable. If the heights are consistant, set it to that height, otherwise setting it to the height of the tallest image is recommended.
5. Adjust the top position variable to move the gallery up or down.
6. Adjust the spacing between each image. If the images are to take up the full width of the page, set it to 0.
7. Edit the index.html file to link out if needed