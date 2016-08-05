# haymarket-ui-test
Technical test for Haymarket simple carousel

####Pre-plan steps

- 1 Create a 350x450 wrapper div wich will held all the carousel components and center it.
- 2 Add another slides div to the wrapper div to group the slide's and hide the overflow.
- 3 Create a slide div inside the slides div and force the height to the same as the parent div so it will forces to hide the other slide's what will be added at later stage.
- 4 Add all the other components to the slide div like image, price, tracker, and the details.
- 5 After styled the first slide, add 3 more slide to the slides div.
- 6 Add the paging buttons and hook it up with an event handler.

------------------------------------------------------------------

####Steps done

Step 1 and 2 were simple, though I just realised for the future paging buttons had to be layered on top of the slide group
so the slides div position had to be absolute and the parent had to relative.
Step 3 the slides div position had to be relative and all components position inside are set to absolute for layering support.

Step 4 for the tracker i just used a simple unordered list of 4 items and added a selected class to the one is currently selected.
Its simple the slide is currenly visible shows the right circle in colour blue.


Step 5 just duplicate the slides and change the image and the text and most importantly the id number for the script
Step 6 All we doing here is as we using the overflow hidden we just need to set the only slide to display as a block the rest is just hide.
--------------------------------------------------------------------------------------------

#####Final Thoughts

Though this project was fairly simple it had its ups and downs for example to decide how to handle the paging.
Also could more enhanced to animate the slides or add a timeout for auto slide.
Also to do more elegantly the tracking dots.

##########Used only jqurey external library and simple texteditor on mac
