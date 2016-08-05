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

Steps done

Step 1 and 2 were simple, though I just realised for the future paging buttons had to be layered on top of the slide group
so the slides div position had to be absolute and the parent had to relative.
Step 3 the slides div position had to be relative and all components position inside are set to absolute for layering support.

