let ImageGroupOne = document.getElementById("image-group-one");
let ImageGroupTwo = document.getElementById("image-group-two");

let imageOneVisible = false;
let imageTwoVisible = false;

ImageGroupOne.addEventListener("zappar-visible", () => {
    // The image has appeared so show the group
    ImageGroupOne.setAttribute("visible", "true");
    imageOneVisible = true;
});

ImageGroupTwo.addEventListener("zappar-visible", () => {
   // The image has appeared so show the group
   ImageGroupTwo.setAttribute("visible", "true");
   imageTwoVisible = true;
});